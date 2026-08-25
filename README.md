# Travel Unbounded

**Live Website:** [Travel Unbounded](https://travel-unbounded-oujv.vercel.app/?utm_source=chatgpt.com)

Travel Unbounded is a modern full-stack travel platform designed to showcase curated travel experiences across India and international destinations.

The platform allows users to:

* Explore curated travel destinations
* Search and filter destinations
* Learn about the company and its office locations
* Submit travel booking enquiries
* Receive client-side and server-side validation feedback
* Store booking enquiries securely in MongoDB

## ✨ Features

### 🏠 Home Page

* Immersive hero section
* Travel-focused call-to-action buttons
* Featured Indian destinations
* Featured international destinations
* Why Choose Us section
* Final travel enquiry CTA section

### 🌍 Destinations

Explore **10 curated destinations**.

#### India

* Kerala
* Himachal Pradesh
* Ladakh
* Andaman
* Goa

#### International

* Kenya
* Vietnam
* Tanzania
* Iceland
* Sri Lanka

Additional functionality:

* Search destinations by name or country
* Filter destinations by **All**, **India**, or **International**
* View destination details
* Start an enquiry for a selected destination

### 🏢 About Page

* Travel Unbounded company story
* Company values
* Office locations

#### Bengaluru — Headquarters

541, 7th Main Rd,
HAL 2nd Stage, Indiranagar,
Bengaluru – 560008, India

#### Kochi — Kerala Office

LR Towers, S Janatha Road,
Palavivatton,
Kochi – 682025, India

#### Nairobi — Kenya Office

Westpark Towers, Muthithi Road,
Nairobi, P.O. Box 6950,
Postal Code 00100, Kenya

## 📝 Booking Enquiry Form

The booking form includes:

* Full Name
* Country Code
* Contact Number
* Email
* Destination
* Date of Travel
* Number of People
* Hotel Category
* Number of Children

### Validation

The application includes:

* Required field validation
* Email validation
* Phone number validation
* Future travel date validation
* Minimum 1 traveller validation
* Minimum 0 children validation
* Client-side validation
* Server-side validation

## 🔔 User Experience

* Loading state during form submission
* Success and error notifications
* No browser `alert()` usage
* Responsive mobile navigation
* Mobile, tablet, and desktop support

## 🗄️ Backend and Database

* `POST /api/enquiry` for submitting booking enquiries
* MongoDB database integration
* Mongoose schema validation
* Secure environment variable configuration
* Database connection caching for Next.js
* `GET /api/enquiry` included as an optional bonus feature for retrieving enquiries

## 🛠️ Tech Stack

| Technology             | Purpose                       |
| ---------------------- | ----------------------------- |
| Next.js                | Full-stack React framework    |
| TypeScript             | Type-safe development         |
| Tailwind CSS           | Styling and responsive design |
| MongoDB                | Database                      |
| Mongoose               | MongoDB object modeling       |
| Lucide React           | Icons                         |
| Next.js Route Handlers | Backend API                   |
| React Hooks            | Client-side state management  |

## 📁 Project Structure

```text
travel-unbounded/
│
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   └── enquiry/
│   │       └── route.ts
│   ├── contact/
│   │   └── page.tsx
│   ├── destinations/
│   │   └── page.tsx
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
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🔑 Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/travel_unbounded?retryWrites=true&w=majority
```

> **Important:** Never commit `.env.local` or real MongoDB credentials to GitHub.

Your `.gitignore` should contain:

```text
.env
.env.local
node_modules/
.next/
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sainath5592/Travel_Unbounded.git
```

### 2. Navigate to the Project

```bash
cd Travel_Unbounded
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 5. Start the Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## 🌐 Live Deployment

The application is deployed on Vercel:

[https://travel-unbounded-oujv.vercel.app/](https://travel-unbounded-oujv.vercel.app/?utm_source=chatgpt.com)

## 🔌 API Documentation

### Submit a Booking Enquiry

**Endpoint:**

```text
POST /api/enquiry
```

**Content-Type:**

```text
application/json
```

### Example Request

```json
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
```

### Example Success Response

```json
{
  "success": true,
  "message": "Thank you! Our travel expert will contact you within 24 hours."
}
```

## 📋 Database Schema

Each enquiry is stored with the following structure:

```text
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
```

### Validation Rules

* `fullName` — Required
* `countryCode` — Required
* `contactNumber` — Required
* `email` — Required and must be valid
* `destination` — Required
* `travelDate` — Required and must be a future date
* `numberOfPeople` — Minimum 1
* `hotelCategory` — Standard, Deluxe, or Luxury
* `numberOfChildren` — Minimum 0

## 🧪 Testing Checklist

Before deployment, verify:

* [ ] All pages load correctly
* [ ] Navigation links work
* [ ] Mobile navigation works
* [ ] Destination search works
* [ ] Destination filters work
* [ ] Booking form validation works
* [ ] Invalid emails are rejected
* [ ] Past travel dates are rejected
* [ ] Number of people cannot be less than 1
* [ ] Number of children cannot be negative
* [ ] Successful enquiries are saved to MongoDB
* [ ] Success and error messages display correctly
* [ ] Website works on mobile, tablet, and desktop
* [ ] `npm run build` completes successfully

Run the production build check:

```bash
npm run build
```

## 🚀 Deployment

This project is deployed using Vercel.

### Deployment Steps

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variable:

```text
MONGODB_URI
```

4. Select the appropriate environment, such as **Production** and **Preview**.
5. Deploy the application.
6. Test the live website and booking enquiry form.

## 🔍 SEO

Each page includes appropriate metadata such as:

* Page title
* Meta description
* Semantic heading structure

Pages include:

* Home
* Destinations
* About
* Contact

## 🎯 Assignment Requirements Covered

* Next.js App Router
* TypeScript
* Tailwind CSS
* Responsive design
* Reusable React components
* India and international destinations
* About page and office locations
* Booking enquiry form
* Client-side validation
* Server-side validation
* MongoDB database integration
* Next.js API Route Handler
* Success and error handling
* Basic SEO metadata
* Complete project documentation

## 📄 License

This project was created as part of a technical assignment.

© 2026 Travel Unbounded. All rights reserved.
