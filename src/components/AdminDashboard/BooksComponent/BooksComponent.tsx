"use client";

import { TBooksAndMembers } from "@/interface/globalType";
import BookCards from "../BookCards";
import BookTable from "../BookTable";

interface BookTableProps {
  books: TBooksAndMembers[];
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
          <BookCards books={books} className="grid-cols-1 xs:grid-cols-2 lg:grid-cols-3"/>
        </div>
      </div>
    </div>
  );
};

export default BooksComponent;