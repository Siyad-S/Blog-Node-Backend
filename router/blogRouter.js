const express = require("express");
const router = express.Router();
const {
    getBlogCard,
    postBlogCard
} = require('../controller/blogController');

router.route('/').get(getBlogCard).post(postBlogCard);

module.exports = router;