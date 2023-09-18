import bcrypt from "bcrypt"
import { user } from "../models/model.js"
import { APIError } from "../errors/error.js"
import { tokenCheck } from "../middleware/auth.js"

export const login = async (req, res) => {
  const { email, password } = req.body
  const userInfo = await user.findOne({ email })

  if (!userInfo) {
    throw new APIError("Email not found")
  }

  const comparePassword = await bcrypt.compare(password, userInfo.password)

  if (!comparePassword) {
    throw new APIError("Incorrect password")
  }


  console.log(userInfo)
  return true
}