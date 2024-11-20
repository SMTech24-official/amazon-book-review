'use client'
import newBook from "@/assets/newBook.png";
import BooksComponent from '@/components/AdminDashboard/BooksComponent/BooksComponent';
import TabPage from "@/components/Shared/tabPage/TabPage";

import { Book } from '@/interface/globalType';
import { useEffect } from 'react';
import { FaClipboardList, FaUserCog } from 'react-icons/fa';

const books: Book[] = [
    {
      id: 1,
      name: "Harry Potter and the Philosopher's Stone",
      writer: "J. K. Rowling",
      date: "09-11-2024",
      image: newBook, // Use your image path here
    },
    {
      id: 2,
      name: "Harry Potter and the Philosopher's Stone",
      writer: "J. K. Rowling",
      date: "09-11-2024",
      image: newBook,
    },
    {
      id: 3,
      name: "Harry Potter and the Philosopher's Stone",
      writer: "J. K. Rowling",
      date: "09-11-2024",
      image: newBook,
    },
  ];

const AdminDashboardPAge = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            if (!url.searchParams.has('tab')) {
                url.searchParams.set('tab', 'New Books');
                window.location.href = url.toString(); 
            }
        }
    }, []);

    const tabs = [
        {
            label: "New Books",
            value: "New Books",
            icon: <FaUserCog className="min-w-6 min-h-6 mr-2" />,
            component: <BooksComponent books={books} title='New books pending' />
        },
        {
            label: "New Reviews",
            value: "New Reviews",
            icon: <FaClipboardList className="min-w-6 min-h-6 mr-2" />,
            component: <BooksComponent books={books} title='New review pending'/>
        }
    ];

    // demo link for breadcrumb 
    // http://localhost:3000/admin-dashboard/settings?tab=general/subtab1/subtab2


    return (
        <TabPage defaultTab="general" tabs={tabs} />
    )
};

export default AdminDashboardPAge;