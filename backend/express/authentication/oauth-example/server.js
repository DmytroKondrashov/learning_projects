import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback",
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }));

app.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/" }),
(req, res) => {
  res.redirect("/profile");
});

app.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/auth/github");
  }
  res.send(`<h1>Welcome ${req.user.displayName}</h1><p><a href="/logout">Logout</a></p>`);
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

app.get("/", (req, res) => {
  res.send('<h1>GitHub OAuth Login</h1><a href="/auth/github">Login with GitHub</a>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
