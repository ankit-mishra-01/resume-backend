import express from "express";
import { addEnquiry } from "../controllers/enquiryController.js";

const enquiryRouter = express.Router();

enquiryRouter.post("/", addEnquiry);

export default enquiryRouter;
