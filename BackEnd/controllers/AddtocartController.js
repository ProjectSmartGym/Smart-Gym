import Cart from "../models/AddToCart.js";

// Create or update a cart
export const createOrUpdateCart = async (req, res) => {
  try {
    const { member, items, totalPrice } = req.body;
    let cart = await Cart.findOne({ member });

    if (cart) {
      cart.items = items;
      cart.totalPrice = totalPrice;
      await cart.save();
      return res.status(200).json({ message: "Cart updated successfully", cart });
    }

    const newCart = new Cart({ member, items, totalPrice });
    await newCart.save();
    res.status(201).json({ message: "Cart created successfully", cart: newCart });
  } catch (error) {
    res.status(500).json({ message: "Error creating or updating cart", error: error.message });
  }
};

// Get cart by member ID
export const getCartByMember = async (req, res) => {
  try {
    const cart = await Cart.findOne({ member: req.params.memberId }).populate("items.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error: error.message });
  }
};

// Remove an item from cart
export const removeItemFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ member: req.params.memberId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(item => item.product.toString() !== req.params.productId);
    cart.totalPrice = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

    await cart.save();
    res.status(200).json({ message: "Item removed successfully", cart });
  } catch (error) {
    res.status(500).json({ message: "Error removing item", error: error.message });
  }
};

// Clear all items from the cart
export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ member: req.params.memberId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();
    res.status(200).json({ message: "Cart cleared successfully", cart });
  } catch (error) {
    res.status(500).json({ message: "Error clearing cart", error: error.message });
  }
};
