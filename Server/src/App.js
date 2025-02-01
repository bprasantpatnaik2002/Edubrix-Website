import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import 'dotenv/config'

import { Student } from "./models/StudentSchema.js";
import { Parent } from "./models/ParentSchema.js";
import { Service } from "./models/ServiceSchema.js";
import { Blog } from "./models/BlogSchema.js";
import { Coupon } from "./models/CouponSchema.js";
import { NewsUpdate } from "./models/NewsUpdate.js";
import { Batch } from "./models/BatchSchema.js";
import { Review } from "./models/ReviewSchema.js";
import { Admin } from "./models/AdminSchema.js";

const app=express();

// app.use is used whenever we want to make any settings for our backend like allow taking json,url,cookies,cors allowing,etc or adding any middlewares

app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))

//allowing cors to flow into and out of backend

app.use(express.json())             //allowing json data to flow into and out of backend
app.use(bodyParser.urlencoded({extended:true,limit:"1024kb"})) //allowing to extract data from the frontend
app.use(express.urlencoded({extended:true,limit:"1024kb"}))    //allowing url data to flow into and out of backend
app.use(express.static("public")) //allowing static data from public folder to flow into and out of backend
app.use(cookieParser());
app.use(express.static(process.cwd()+'/dist'))

const generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

/* ========================== Middleware to authenticate ========================== */

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Get token from cookies
        if (!token) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user in the database
        const user = await Admin.findOne({ email: decoded.email });

        if (!user) {
            return res.status(401).json({ error: "Invalid token. User does not exist." });
        }

        req.user = user; // Store user info in req for further use
        
        next(); // Proceed to the next middleware or route handler

    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token." });
    }
};

/* ========================== Signup ========================== */

app.post("/api/auth/signup", async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await Admin.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // **Hash the password**
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Admin({ email, password: hashedPassword });
        await newUser.save();
        console.log("User registered successfully");

        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

/* ========================== Signin ========================== */

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user in database
        const user = await Admin.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Incorrect email" });
        }

        // Compare entered password with the hashed password stored in DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        // Generate JWT token
        const token = generateToken(email);

        // Store JWT token in httpOnly cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Use secure cookies in production
            sameSite: "strict",
        });

        res.json({ success: true, message: "Login successful" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

/* ========================== STUDENT ========================== */
app.get("/fall", async (req, res) => {
    try {
        const data = await Student.find();
        res.json(data);
    } catch (error) {
        res.status(500).json([]);
    }
    
});

app.post("/fall", authenticateUser, async (req, res) => {
    try {
        const newData = new Student(req.body);
        await newData.save();
        res.json(await Student.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
    
});

app.delete("/fall/:id", authenticateUser, async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
    
});


/* ========================== PARENT ========================== */
app.get("/parent", async (req, res) => {
    try {
        res.json(await Parent.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.post("/parent", authenticateUser, async (req, res) => {
    try {
        const newData = new Parent(req.body);
        await newData.save();
        res.json(await Student.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
    
});

app.delete("/parent/:id", authenticateUser, async (req, res) => {
    try {
        await Parent.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
    
});

/* ========================== SERVICES ========================== */
app.get("/services", async (req, res) => {
    
    try {
        res.json(await Service.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.post("/services", authenticateUser, async (req, res) => {
    
    try {
        const newData = new Service(req.body);
        await newData.save();
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.delete("/services/:id", authenticateUser, async (req, res) => {
    console.log("deleted",req.params.id);

    try {
        await Service.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

/* ========================== BLOGS ========================== */
app.get("/blogs", async (req, res) => {
    
    try {
        res.json(await Blog.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.post("/blogs", authenticateUser, async (req, res) => {
    
    try {
        const newData = new Blog(req.body);
        await newData.save();
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.delete("/blogs/:id", authenticateUser, async (req, res) => {
    
    try {
        await Blog.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

/* ========================== COUPONS ========================== */
app.get("/coupons", async (req, res) => {
    
    try {
        res.json(await Coupon.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.post("/coupons", authenticateUser, async (req, res) => {
    
    try {
        const newData = new Coupon(req.body);
        await newData.save();
        res.json(await Coupon.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.delete("/coupons/:id", authenticateUser, async (req, res) => {
    
    try {
        await Coupon.findByIdAndDelete(req.params.id);
        res.json(await Coupon.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

/* ========================== NEWS UPDATES ========================== */
app.get("/newsUpdates", async (req, res) => {
    
    try {
        res.json(await NewsUpdate.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.post("/newsUpdates", authenticateUser, async (req, res) => {
    
    try {
        console.log("added");
        const newData = new NewsUpdate(req.body);
        await newData.save();
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
    
});

app.delete("/newsUpdates/:id", authenticateUser, async (req, res) => {
    try {
        await NewsUpdate.findByIdAndDelete(req.params.id);
    
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

/* ========================== BATCHES ========================== */
app.get("/batches", async (req, res) => {
    
    try {
        res.json(await Batch.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.post("/batches", authenticateUser, async (req, res) => {
    
    try {
        const newData = new Batch(req.body);
        await newData.save();
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.delete("/batches/:id", authenticateUser, async (req, res) => {
    try {
        await Batch.findByIdAndDelete(req.params.id);
        
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

/* ========================== Reviews ========================== */
app.get("/reviews", async (req, res) => {
    
    try {
        res.json(await Review.find());
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.post("/reviews", authenticateUser, async (req, res) => {
    
    try {
        const newData = new Review(req.body);
        await newData.save();
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
});

app.delete("/reviews/:id", authenticateUser, async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        
    }
    
});


export {app}