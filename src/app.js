import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import router from "./Routes/Profile.routes.js";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Allowed origins
const allowedOrigins = [
  "https://predusk-ka-assingment.vercel.app",
  "http://localhost:5173" // optional (for local frontend)
];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin (like Postman)
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true
//   })
// );

app.use(
  cors({
    origin: "https://predusk-ka-assingment.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);



// Test route
app.get("/check", (req, res) => {
  return res.status(200).json({
    message: "Everything is working here"
  });
});

// Routes
app.use("/api/v1", router);

export default app;
