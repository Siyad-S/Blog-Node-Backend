const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const route =  require("./router/blogRouter")



app.use(express.json());
app.use(cors());

app.use("/api", route);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

