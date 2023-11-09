const fs = require("fs");
const { v4: uuidv4, v4 } = require('uuid');

const blogDataFile = "blogData.json";


//*****************read method********************** */
function showBlogCard  () {
    try {
        const data = fs.readFileSync(blogDataFile, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

//*****************write method********************* */
function writeBlogCard (blog) {
    const data = JSON.stringify(blog, null, 2);
    fs.writeFileSync(blogDataFile, data);
}


//*****************get method*********************** */
const getBlogCard = (req, res) => {
    const blog = showBlogCard();
    res.json(blog);
};

//*****************post method********************** */
const postBlogCard = (req, res) => {
    const blogCard = showBlogCard();

    const newBlogCard = req.body;
    newBlogCard.id = uuidv4();
    let currentDate = new Date()
    currentDate = currentDate.toDateString();
    newBlogCard.timestamp = currentDate;
    blogCard.push(newBlogCard);
    writeBlogCard(blogCard);
    
    res.status(201).json({ message: "Blog created successfully",})
}
module.exports = {
    getBlogCard,
    postBlogCard
}