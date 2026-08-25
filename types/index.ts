export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  price: number;
  category: "india" | "international";
}

export interface BookingEnquiry {
  fullName: string;
  countryCode: string;
  contactNumber: string;
  email: string;
  destination: string;
  travelDate: string | Date;
  numberOfPeople: number;
  hotelCategory: "Standard" | "Deluxe" | "Luxury";
  numberOfChildren: number;
  createdAt?: string | Date;
}
