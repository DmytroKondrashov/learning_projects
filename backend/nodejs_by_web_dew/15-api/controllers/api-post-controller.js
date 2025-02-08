import Post from '../models/post.js';

const handleError = (res, error) => {
  console.log(error);
  res.status(500).json({ message: error.message });
};

const getPost = (req, res) => {
  Post
    .findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

const deletePost = (req, res) => {
  Post
  .findByIdAndDelete(req.params.id)
  .then(() => res.status(200).json(req.params.id))
  .catch((error) => handleError(res, error));
}

const editPost = (req, res) => {
  const { title, author, text } = req.body;
  Post
    .findByIdAndUpdate(req.params.id, { title, author, text })
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

const getPosts = (req, res) => {
  Post
    .find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => handleError(res, error));
}

const addPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

export {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost,
};