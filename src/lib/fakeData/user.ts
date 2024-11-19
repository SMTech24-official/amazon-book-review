import { User } from "../types/type";

export const user: User = {
  image: null, // URL to the user's image
  name: "John Doe",
  amazonAuthorPage: "https://amazon.com/author/johndoe",
  email: "johndoe@example.com",
  amazonReviewerName: "JohnDReviewer",
  reviewCountry: "United States",
  password: "securePassword123", // Ensure passwords are securely hashed in real applications
  role: "Author", // Example roles: "Reviewer", "Author", "Admin"
  plans: "yearly",
};
