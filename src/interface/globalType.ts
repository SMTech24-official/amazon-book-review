import { StaticImageData } from "next/image";

export interface TBooksAndMembers {
  _id: number;
    title: string;
    authorName?: string;
    createdAt: string;
    bookCover: string | StaticImageData; 
  }