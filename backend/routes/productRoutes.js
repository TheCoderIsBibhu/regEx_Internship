const express = require('express');
const router = express.Router();

const {getAllProducts,getProductById}= require('../controller/productControllers');
//@desc GET all products from db
//@Route GET.api/products
//@access public
router.get("/", getAllProducts)

//@desc GET a product by id from db
//@Route GET.api/products/:id
//@access public
router.get("/:id", getProductById)

module.exports = router;