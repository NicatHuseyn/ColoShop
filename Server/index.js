// imports
require('dotenv').config();
const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const { type } = require('os');
const { title } = require('process');
const send = require('send');
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.Port || 3000;
const connectionString = process.env.ConnectionString;

// create schema 
const productSchema = new mongoose.Schema({
    title: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    discount: { type: Number, require: false },
    color: { type: String, require: true },
    size: { type: String, require: true },
    category: { type: String, require: true },
    newProduct: { type: Boolean, require: false }
});

// cearet mdoel
const ProductModel = mongoose.model("Product", productSchema);


// CRUD methods:

// get all products
app.get("/api/products", async (req, res) => {
    try {
        const products = await ProductModel.find({});
        if (products.length === 0) {
            return res.send({ message: "Products is empty", products: null });
        }
        res.status(200).send({ message: "Successfully", products: products });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", ErrorMessage: error.message });
    }
});

// get by id product
app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).send({ message: "Product not found", product: null });
        }
        res.status(200).send({ message: "Successfully", product: product });
    } catch (error) {
        res.status(500).send({ message: "Internal Sevrer Error", ErrorMessage: error.message });
    }
});

// create new product (post method)
app.post("/api/products", async (req, res) => {
    try {
        const newProduct = await ProductModel({ ...req.body });
        await newProduct.save();
        res.status(201).send({ message: "Create new product successfully", newProduct: newProduct });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", ErrorMessage: error.message });
    }
});

// update product
app.put("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateItem = req.body;
        const updateProduct = await ProductModel.findByIdAndUpdate(id, updateItem, { new: true });
        if (!updateProduct) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send({ message: "Product update Successfully", product: updateProduct });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", ErrorMessage: error.message });
    }
})

// delete product
app.delete("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await ProductModel.findByIdAndDelete(id);
        if (!deleteProduct) {
            return res.status(404).send({ message: "Product not found" })
        }
        res.send({ message: "Product Delete" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", ErrorMessage: error.message })
    }
})

mongoose.connect(connectionString)
    .then(() => {
        console.log("Connected");
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })