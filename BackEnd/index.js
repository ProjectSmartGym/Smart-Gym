import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/ProductRoute.js"; // Import product routes
import MemberRoute from "./routes/MemberRoute.js";
import BatchRoute from "./routes/BatchRoute.js";
import TrainerRoute from "./routes/TrainerRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
import ExerciseRoute from "./routes/ExerciseRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AddtocardRoute from "./routes/AddtocartRoute.js";
import MemberattendanceRoute from "./routes/MemberattendanceRoute.js";
import TrainerattendanceRoute from "./routes/TrainerattendanceRoute.js";
import TrainerbatchRoute from "./routes/TrainerbatchRoute.js";
import MembershiptypeRoute from "./routes/MembershiptypeRoute.js";
import AdminRoute from "./routes/AdminRoute.js";


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute); // ✅ Attach Product Routes
app.use("/api/members",MemberRoute);
app.use("/api/batches",BatchRoute);
app.use("/api/trainers",TrainerRoute);
app.use("/api/orders",OrderRoute);
app.use("/api/exercises",ExerciseRoute);
app.use("/api/users",UserRoute);
app.use("/api/addtocart",AddtocardRoute);
app.use("/api/memberattendance",MemberattendanceRoute);
app.use("/api/trainerattendance",TrainerattendanceRoute);
app.use("/api/trainerbatch",TrainerbatchRoute);
app.use("/api/membershiptype",MembershiptypeRoute);
app.use("/api/admin",AdminRoute);


app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));