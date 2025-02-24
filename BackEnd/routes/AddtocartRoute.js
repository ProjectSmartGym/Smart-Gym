import express from "express";
import { createOrUpdateCart, getCartByMember, removeItemFromCart, clearCart } from "../controllers/AddtocartController.js";


const router = express.Router();

router.post("/", createOrUpdateCart);
router.get("/:memberId", getCartByMember);
router.delete("/:memberId/items/:productId", removeItemFromCart);
router.delete("/:memberId", clearCart);

export default router;
