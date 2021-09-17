const express = require('express');
const router = express.Router();
const posts = require('../model/posts');
const cors = require('cors');

const options = {
    origin: 'http://localhost:3000',
};

router.use(cors(options));

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post('/new', (req, res) => {
    let title = req.body.title;
    let desc = req.body.desc;

    posts.newPost(title, desc);
    res.send('Post adicionado');
});

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    posts.deletePost(id);
    res.send('Post removido com sucesso');
});

module.exports = router;
