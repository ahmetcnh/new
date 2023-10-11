import bcrypt from "bcrypt";
import { user } from "../models/model.js";
import { APIError } from "../errors/error.js";
import url from "url"

const meetingurl="localhost:3001/api/meeting"



export const login = async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await user.findOne({ email });
  const name=await user.findOne({email})
  if (!userInfo) {
    throw new APIError("Email not found");
  }

  const storedHashedPassword = userInfo.password;

  const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

  if (!passwordMatch) {
    throw new APIError("Incorrect password");
  }
  else{
    console.log(userInfo);
    res.status(200).redirect(meetingurl);
    return true
  }
};