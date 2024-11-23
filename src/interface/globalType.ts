import { StaticImageData } from "next/image";

export interface TBooksAndMembers {
  _id: number;
    title: string;
    authorName?: string;
    createdAt: string;
    bookCover: string | StaticImageData; 
  }


  interface BookId {
    isReadyForReview: boolean;
    _id: string;
    title: string;
    authorName: string;
    userId: string;
    amazonBookUrl: string;
    bookFormate: string;
    bookCover: string;
    bookPdf: string;
    status: string;
    genre: string;
    bookType: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  interface UserId {
    _id: string;
    fullName: string;
    reviewerName: string;
    amazonCountry: string;
    email: string;
    role: string;
    points: number;
    otp: string | null;
    otpExpires: string | null;
    isVerified: boolean;
    isSubscribed: boolean;
    subscriptionPlane: string;
    invitedFriends: number;
    termsAccepted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface BookRecord {
    _id: string;
    bookId: BookId;
    userId: UserId;
    readingStatus: string;
    isApproved: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  