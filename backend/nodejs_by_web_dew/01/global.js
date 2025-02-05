// global has setTimeout and __dirname, so it can be addressed directly
// console.log(global);

// setTimeout(() => {console.log("Hello")}, 1000)

// __dirname is the directory name of the current module
// console.log(__dirname);

// __filename is the file name of the current module
// console.log(__filename);

// process is the global object that provides information about the current process
// console.log(process);
// shows the arguments passed to the script (try running "node global.js hello world")
// console.log(process.argv);

// module is the current module
// console.log(module);

// require is the function that loads the module
// console.log(require);

// exports is the object that is returned by the module
// console.log(exports);

// URL is a global object that provides information about the URL
const url = new URL("https://www.google.com/search?q=nodejs");
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.search);
console.log(url.searchParams);
console.log(url.searchParams.get("q"));
