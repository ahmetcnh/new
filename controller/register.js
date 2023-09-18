import express from "express";
import bcrypt from "bcrypt";
import { user } from "../models/model.js";
import { APIError } from "../errors/error.js";
import { Response } from "../errors/response.js";
import { createToken } from "../middleware/auth.js";
const router = express.Router();


export const register = async (req, res) => {
    try {
    console.log(req.body);
      const { name,email, password } = req.body;
      const userCheck = await user.findOne({ email });
      if (userCheck) {
        throw new APIError("A user with this email already exists");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new user({
        name,
        email,
        password: hashedPassword,
      });
      createToken(newUser,res);
      const savedUser = await newUser.save();
      
      return new Response(savedUser, "kullanici veritabanina kaydedildi").created(res);
    } catch (err) {
      throw new APIError("kullanici kaydedilemedi: " + err.message, 400);
    }
};