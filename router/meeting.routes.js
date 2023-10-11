import express from "express";
import {createMeeting} from "../controller/meeting.js";

const router = express.Router();

router.post('/api/meeting', createMeeting);

export default router;