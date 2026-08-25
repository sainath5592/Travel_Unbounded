import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      countryCode,
      contactNumber,
      email,
      destination,
      travelDate,
      numberOfPeople,
      hotelCategory,
      numberOfChildren,
    } = body;

    // Server-side validation: Required fields check
    if (
      !fullName ||
      !countryCode ||
      !contactNumber ||
      !email ||
      !destination ||
      !travelDate ||
      !numberOfPeople ||
      !hotelCategory
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide all required enquiry fields.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Phone validation
    const cleanPhone = String(contactNumber).replace(/\D/g, "");
    if (cleanPhone.length < 6 || cleanPhone.length > 15) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid contact phone number.",
        },
        { status: 400 }
      );
    }

    // Date validation
    const parsedDate = new Date(travelDate);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid travel date.",
        },
        { status: 400 }
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (parsedDate < today) {
      return NextResponse.json(
        {
          success: false,
          message: "Travel date cannot be in the past.",
        },
        { status: 400 }
      );
    }

    // Number of people validation
    const peopleNum = Number(numberOfPeople);
    if (isNaN(peopleNum) || peopleNum < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Number of people must be at least 1.",
        },
        { status: 400 }
      );
    }

    // Number of children validation
    const childrenNum = Number(numberOfChildren || 0);
    if (isNaN(childrenNum) || childrenNum < 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Number of children cannot be negative.",
        },
        { status: 400 }
      );
    }

    // Hotel Category validation
    const allowedCategories = ["Standard", "Deluxe", "Luxury"];
    if (!allowedCategories.includes(hotelCategory)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid hotel category.",
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    try {
      await connectToDatabase();

      // Create enquiry
      const newEnquiry = await Enquiry.create({
        fullName,
        countryCode,
        contactNumber,
        email,
        destination,
        travelDate: parsedDate,
        numberOfPeople: peopleNum,
        hotelCategory,
        numberOfChildren: childrenNum,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Our travel expert will contact you within 24 hours.",
          data: { id: newEnquiry._id },
        },
        { status: 201 }
      );
    } catch (dbError: any) {
      console.error("MongoDB Atlas connection error:", dbError);
      return NextResponse.json(
        {
          success: false,
          message:
            "MongoDB Atlas connection error. Please verify your exact cluster host in .env.local MONGODB_URI.",
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error submitting enquiry:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to submit enquiry. Please try again later.",
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error: any) {
    console.error("Error fetching enquiries:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch enquiries from database.",
      },
      { status: 500 }
    );
  }
}
