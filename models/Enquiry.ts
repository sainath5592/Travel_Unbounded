import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnquiry extends Document {
  fullName: string;
  countryCode: string;
  contactNumber: string;
  email: string;
  destination: string;
  travelDate: Date;
  numberOfPeople: number;
  hotelCategory: string;
  numberOfChildren: number;
  createdAt: Date;
}

const EnquirySchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    countryCode: {
      type: String,
      required: [true, "Country code is required"],
      trim: true,
    },
    contactNumber: {
      type: String,
      required: [true, "Contact number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
    },
    destination: {
      type: String,
      required: [true, "Destination is required"],
      trim: true,
    },
    travelDate: {
      type: Date,
      required: [true, "Travel date is required"],
    },
    numberOfPeople: {
      type: Number,
      required: [true, "Number of people is required"],
      min: [1, "Number of people must be at least 1"],
    },
    hotelCategory: {
      type: String,
      required: [true, "Hotel category is required"],
      enum: ["Standard", "Deluxe", "Luxury"],
    },
    numberOfChildren: {
      type: Number,
      default: 0,
      min: [0, "Number of children cannot be negative"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;
