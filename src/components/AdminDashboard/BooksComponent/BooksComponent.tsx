"use client";

import { Book } from "@/interface/globalType";
import BookCards from "../BookCards";
import BookTable from "../BookTable";

interface BookTableProps {
  books: Book[];
  title: string;
}

const BooksComponent = ({ books, title }: BookTableProps) => {
  return (
    <div className="space-y-6 ">
      <div className="bg-white sm:px-6 rounded-lg   ">
        <div className="flex items-center justify-between border-b pb-5">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p>{books?.length}</p>
        </div>
        <div className=" ">
          <BookTable books={books} />
          <BookCards books={books} />
        </div>
      </div>
    </div>
  );
};

export default BooksComponent;
