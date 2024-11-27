"use client"

import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import MyLoading from '@/components/ui/MyLoading';
import { genres } from '@/lib/fakeData/genre';
import { Book, User } from '@/lib/types/type';
import { useGetAllLibraryBooksQuery, useStartReadingMutation } from '@/redux/features/book/bookApi';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import LibraryBookCard from '../../components/cards/libraryBookCard/LibraryBooksCard';
import FilterDropdown from '../../components/filterButton/FilterButton';
import { handleAsyncWithToast } from '@/utils/handleAsyncWithToast';
import { useAppDispatch } from '@/redux/hooks';
import { NoBooksFound } from '@/components/noBooksFound/NoFoundBooks';

const UserLibrary = () => {
    const dispatch = useAppDispatch();
    const { data: BooksData, isLoading } = useGetAllLibraryBooksQuery(undefined)
    const [startReading] = useStartReadingMutation(undefined)
    const [filter, setFilter] = useState('All'); // State to manage filter

    // Filter books based on the selected filter
    const filteredBooks = BooksData?.data.filter((book: User & Book) =>
        filter === 'All' || book.genre.toLocaleLowerCase() == filter.toLocaleLowerCase() || book.bookFormate == filter.toLocaleLowerCase()
    );

    if (isLoading) {
        return <div className="h-screen"><MyLoading /></div>
    }

    const handleStartReading = async (id: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const res = await handleAsyncWithToast(
            async () => {
                return startReading({ id }); // Replace with your actual login function
            },
            "Starting to read...", // Toast message for the start of the process
            "Reading started successfully!", // Toast message for success
            "Failed to start reading. Please try again.", // Toast message for failure
            true,
            dispatch
        );

    };


    return (
        <div>
            {/* heading */}
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start  justify-between mb-4 '>
                <BreadCrumb />
                <FilterDropdown filter={filter} setFilter={setFilter} genres={genres} />
            </div>

            {/* Books Grid */}
            {
                filteredBooks?.length > 0 ? <div className='flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3 items-center justify-center'>
                    {filteredBooks?.map((data: User & Book) => (
                        <LibraryBookCard
                            key={data._id}
                            bookTitleOrTitle={data.title}
                            author={data.authorName}
                            publishedDate={new Date(data.publishedDate)}
                            coinsPerReview={data.points}
                            imageSrc={data.bookCover}
                        >
                            <Button onClick={() => handleStartReading(data._id)} radius="sm" className="w-full bg-primary text-white py-2 rounded-lg">
                                Start Reading
                            </Button>
                        </LibraryBookCard>
                    ))}
                </div>
                    : <NoBooksFound/>
            }

        </div>
    );
};

export default UserLibrary;
