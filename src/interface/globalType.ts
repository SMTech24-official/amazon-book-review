import { StaticImageData } from "next/image";

export interface Book {
    id: number;
    name: string;
    writer: string;
    date: string;
    image: string | StaticImageData; 
  }