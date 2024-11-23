import newBook from "@/assets/newBook.png";
import BooksComponent from "@/components/AdminDashboard/BooksComponent/BooksComponent";
import TabPage from "@/components/common/tabPage/TabPage";
import { TBooksAndMembers } from "@/interface/globalType";
import { useGetAllPendingBooksQuery } from "@/redux/features/book/bookApi";
import { Metadata } from "next";
import { useEffect } from "react";
import { FaClipboardList, FaUserCog } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Admin Dashboard',
}


const books: TBooksAndMembers[] = [
  {
    _id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    authorName: "J. K. Rowling",
    createdAt: "09-11-2024",
    bookCover: newBook, // Use your image path here
  },
  {
    _id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    authorName: "J. K. Rowling",
    createdAt: "09-11-2024",
    bookCover: newBook,
  },
  {
    _id: 3,
    title: "Harry Potter and the Philosopher's Stone",
    authorName: "J. K. Rowling",
    createdAt: "09-11-2024",
    bookCover: newBook,
  },
];

const AdminDashboardPAge = () => {
  const { data, isLoading } = useGetAllPendingBooksQuery(undefined);
  console.log(data?.data);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (!url.searchParams.has("tab")) {
        url.searchParams.set("tab", "New Books");
        window.location.href = url.toString();
      }
    }
  }, []);

  const tabs = [
    {
      label: "New Books",
      value: "New Books",
      icon: <FaUserCog className="min-w-6 min-h-6 mr-2" />,
      component: (
        <BooksComponent
          books={data?.data}
          isLoading={isLoading}
          title="New books pending"
        />
      ),
    },
    {
      label: "New Reviews",
      value: "New Reviews",
      icon: <FaClipboardList className="min-w-6 min-h-6 mr-2" />,
      component: <BooksComponent books={books} title="New review pending" />,
    },
  ];

  // demo link for breadcrumb
  // http://localhost:3000/admin-dashboard/settings?tab=general/subtab1/subtab2

  return <TabPage defaultTab="New Books" tabs={tabs} />;
};

export default AdminDashboardPAge;
