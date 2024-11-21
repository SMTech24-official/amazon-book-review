import { StaticImageData } from "next/image";

export interface TBooksAndMembers {
    id: number;
    name: string;
    writer?: string;
    date: string;
    image: string | StaticImageData; 
  }