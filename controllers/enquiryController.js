import mongoose from "mongoose";
import Enquiry from "../models/Enquiry.js";

export const addEnquiry = async (req, res) => {
  const { name, email, phone, description } = req.body;
  console.log("------------------req.body-------------------\n", req.body);

  try {
    // Combined validation
    if (!name || (!email && !phone)) {
      return res.status(400).json({
        error: !name
          ? "Name is required."
          : "Either phone or email is required.",
      });
    }

    // Create a new enquiry
    const newEnquiry = new Enquiry({ name, email, phone, description });

    // Save the enquiry to the database
    await newEnquiry.save();

    // Send success response
    return res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    // Handle any errors
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while submitting the enquiry." });
  }
};
