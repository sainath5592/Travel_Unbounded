🏔️ Travel Unbounded

India's Most Trusted Experiential Travel Experts
Extraordinary journeys, personally crafted around the people taking them.

A premium full-stack experiential travel website built with Next.js, TypeScript, Tailwind CSS, MongoDB, and Mongoose.

📖 Overview

Travel Unbounded is a modern travel platform designed to showcase curated travel experiences across India and international destinations.

The platform allows users to:

Explore curated travel destinations
Search and filter destinations
Learn about the company and its office locations
Submit travel booking enquiries
Receive client-side and server-side validation feedback
Store booking enquiries securely in MongoDB
✨ Features
🏠 Home Page
Immersive hero section
Travel-focused call-to-action buttons
Featured Indian destinations
Featured international destinations
Why Choose Us section
Final travel enquiry CTA section
🌍 Destinations

Explore 10 curated destinations.

India

Kerala
Himachal Pradesh
Ladakh
Andaman
Goa

International

Kenya
Vietnam
Tanzania
Iceland
Sri Lanka

Additional functionality:

Search destinations by name or country
Filter by All, India, or International
View destination details
Start an enquiry for a selected destination
🏢 About Page
Travel Unbounded company story
Company values
Office locations

Bengaluru — Headquarters

541, 7th Main Rd
HAL 2nd Stage
Indiranagar, Bengaluru – 560008
India

Kochi — Kerala Office

LR Towers, S Janatha Road
Palavivatton, Kochi – 682025
India

Nairobi — Kenya Office

Westpark Towers, Muthithi Road
Nairobi, P.O. Box 6950
Postal Code 00100
Kenya

📝 Booking Enquiry Form

The booking form includes:

Full Name
Country Code
Contact Number
Email
Destination
Date of Travel
Number of People
Hotel Category
Number of Children

Validation includes:

Required field validation
Email validation
Phone number validation
Future travel date validation
Minimum 1 traveller
Minimum 0 children
Client-side validation
Server-side validation
🔔 User Experience
Loading state during form submission
Success and error notifications
No browser alert() usage
Responsive mobile navigation
Mobile, tablet, and desktop support
🗄️ Backend and Database
POST /api/enquiry for submitting booking enquiries
MongoDB database integration
Mongoose schema validation
Secure environment variable configuration
Database connection caching for Next.js

GET /api/enquiry is included as an optional bonus feature for retrieving enquiries.

🛠️ Tech Stack
Technology	Purpose
Next.js	Full-stack React framework
TypeScript	Type-safe development
Tailwind CSS	Styling and responsive design
MongoDB	Database
Mongoose	MongoDB object modeling
Lucide React	Icons
Next.js Route Handlers	Backend API
React Hooks	Client-side state management
📁 Project Structure
travel-unbounded/
│
├── app/
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   └── enquiry/
│   │       └── route.ts
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── destinations/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── BookingForm.tsx
│   ├── CTASection.tsx
│   ├── DestinationCard.tsx
│   ├── DestinationGrid.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── OfficeLocations.tsx
│   ├── Toast.tsx
│   └── WhyChooseUs.tsx
│
├── data/
│   └── destinations.ts
│
├── lib/
│   └── mongodb.ts
│
├── models/
│   └── Enquiry.ts
│
├── types/
│   └── index.ts
│
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
🔑 Environment Variables

Create a .env.local file in the project root:

MONGODB_URI=your_mongodb_connection_string
Example
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/travel_unbounded?retryWrites=true&w=majority

⚠️ Never commit .env.local or real MongoDB credentials to GitHub.

Your .gitignore should contain:

.env
.env.local
node_modules
.next
🚀 Getting Started
1. Clone the Repository
git clone https://github.com/sainath5592/Travel_Unbounded.git
2. Navigate to the Project
cd Travel_Unbounded
3. Install Dependencies
npm install
4. Configure Environment Variables

Create a .env.local file and add your MongoDB connection string:

MONGODB_URI=your_mongodb_connection_string
5. Start the Development Server
npm run dev

Open:

http://localhost:3000
🔌 API Documentation
Submit a Booking Enquiry

Endpoint

POST /api/enquiry

Content-Type

application/json
Example Request
{
  "fullName": "Rahul Sharma",
  "countryCode": "+91",
  "contactNumber": "9876543210",
  "email": "rahul@example.com",
  "destination": "Kerala",
  "travelDate": "2026-11-15",
  "numberOfPeople": 2,
  "hotelCategory": "Deluxe",
  "numberOfChildren": 0
}
Example Success Response
{
  "success": true,
  "message": "Thank you! Our travel expert will contact you within 24 hours."
}
📋 Database Schema

Each enquiry is stored with the following structure:

Enquiry
│
├── fullName
├── countryCode
├── contactNumber
├── email
├── destination
├── travelDate
├── numberOfPeople
├── hotelCategory
├── numberOfChildren
└── createdAt

Validation rules:

fullName — Required
countryCode — Required
contactNumber — Required
email — Required and valid
destination — Required
travelDate — Required and must be a future date
numberOfPeople — Minimum 1
hotelCategory — Standard, Deluxe, or Luxury
numberOfChildren — Minimum 0
🧪 Testing Checklist

Before deployment, verify:

 All pages load correctly
 Navigation links work
 Mobile navigation works
 Destination search works
 Destination filters work
 Booking form validation works
 Invalid emails are rejected
 Past travel dates are rejected
 Number of people cannot be less than 1
 Number of children cannot be negative
 Successful enquiries are saved to MongoDB
 Success and error messages display correctly
 Website works on mobile, tablet, and desktop
 npm run build completes successfully

Run the production build check:

npm run build
🌐 Deployment

This project can be deployed on Vercel.

Deployment Steps
Push the project to GitHub.
Import the repository into Vercel.
Add the required environment variable:
MONGODB_URI
Deploy the application.
Test the live website and booking enquiry form.
🔍 SEO

Each page includes appropriate metadata such as:

Page title
Meta description
Semantic heading structure

Pages include:

Home
Destinations
About
Contact
🎯 Assignment Requirements Covered
Next.js App Router
TypeScript
Tailwind CSS
Responsive design
Reusable React components
India and international destinations
About page and office locations
Booking enquiry form
Client-side validation
Server-side validation
MongoDB database integration
Next.js API Route Handler
Success and error handling
Basic SEO metadata
Complete project documentation
📄 License

This project was created as part of a technical assignment.

© 2026 Travel Unbounded. All rights reserved.

Important

Before pasting this, change this line if the GitHub username/repository is not yours:

git clone https://github.com/sainath5592/Travel_Unbounded.git
