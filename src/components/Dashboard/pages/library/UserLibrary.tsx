"use client"

import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import { genres } from '@/lib/fakeData/genre';
import { Book, User } from '@/lib/types/type';
import { useGetAllLibraryBooksQuery } from '@/redux/features/book/bookApi';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import LibraryBookCard from '../../components/cards/libraryBookCard/LibraryBooksCard';
import FilterDropdown from '../../components/filterButton/FilterButton';
import MyLoading from '@/components/ui/MyLoading';

const UserLibrary = () => {
    const { data: BooksData, isLoading } = useGetAllLibraryBooksQuery(undefined)

    const [filter, setFilter] = useState('All'); // State to manage filter

    // Filter books based on the selected filter
    const filteredBooks = BooksData?.data.filter((book: User & Book) =>
        filter === 'All' || book.genre.toLocaleLowerCase() == filter.toLocaleLowerCase() || book.bookFormate == filter.toLocaleLowerCase()
    );

    if (isLoading) {
        return <div className="h-screen"><MyLoading /></div>
    }

    return (
        <div>
            {/* heading */}
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start  justify-between mb-4 '>
                <BreadCrumb />
                <FilterDropdown filter={filter} setFilter={setFilter} genres={genres} />
            </div>

            {/* Books Grid */}
            {
                BooksData?.data.length > 0 ? <div className='flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3 items-center justify-center'>
                    {filteredBooks?.map((data: User & Book) => (
                        <LibraryBookCard
                            key={data._id}
                            bookTitleOrTitle={data.title}
                            author={data.authorName}
                            publishedDate={new Date(data.publishedDate)}
                            coinsPerReview={data.coinsPerReview}
                            imageSrc={data.bookCover}
                        >
                            <Button radius="sm" className="w-full bg-primary text-white py-2 rounded-lg">
                                Start Reding
                            </Button>
                        </LibraryBookCard>
                    ))}
                </div>
                    : <div className='h-[80vh] w-full flex items-center justify-center text-xl text-red-500'><p>No Books Found</p></div>
            }

        </div>
    );
};

export default UserLibrary;
