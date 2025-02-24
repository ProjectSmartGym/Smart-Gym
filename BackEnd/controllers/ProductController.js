import Product from "../models/Product.js";

// ✅ Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, image } = req.body;

    const newProduct = new Product({ name, description, price, category, stock, image });

    await newProduct.save();

    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// ✅ Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category"); // Populate category details
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// ✅ Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// ✅ Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, image } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category, stock, image },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// ✅ Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Exporting all functions
export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };