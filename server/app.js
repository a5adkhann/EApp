const cors = require("cors");
const express = require("express");
const productController = require("./controllers/productController");
const { default: mongoose } = require("mongoose");
const categoryController = require("./controllers/categoryController");


const app = express();
 mongoose.connect('mongodb://127.0.0.1:27017/EApp')
.then(() => console.log('Connected!'))
.catch(() => console.log('Connection failed'))

app.use(cors());

const port = 8005;


app.get("/", (req, res) => {
    res.send("Server is running");
})

app.get("/products", productController.getAllProducts);

app.get("/categories", categoryController.getAllCategories);

app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
})