const Post = require('../models/post');

module.exports = {
    all: async (req, res) => {
        try {
            const posts = await Post.find().populate('user');

            res.send({
                error: false,
                message: 'List of all posts from the database',
                posts: posts
            })
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    getByUser: async (req, res) => {
        try {
            const posts = await Post.find({ user: req.params.id })

            res.send({
                error: false,
                message: `All posts for user with id #${req.params.id}`,
                posts: posts
            })
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    create: async (req, res) => {
        try {
            const post = await Post.create(req.body);

            res.send({
                error: false,
                message: `User with id #${req.body.user} has just created a new post!`,
                post: post
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    },
    delete: async (req, res) => {
        try {
            const posts = await Post.findByIdAndDelete({ _id: req.params.id });

            res.send({
                error: false,
                message: `Post with id #${req.params.id} is deleted`,
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    }
}