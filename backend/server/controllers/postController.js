const posts = [];
let idCounter = 1;

const getPosts = (req, res) => {
  res.json(posts);
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: idCounter++, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
};

module.exports = { getPosts, createPost };
