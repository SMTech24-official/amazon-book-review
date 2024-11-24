"use client"
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import { useGetAllBooksQuery } from '@/redux/features/book/bookApi';
import BooksCards from '../cards/booksCard/BooksCards';
import MyLoading from '@/components/ui/MyLoading';
import { Book, User } from '@/lib/types/type';

const UDBookReview = () => {
    const { data: BooksData, isLoading } = useGetAllBooksQuery(undefined)



    if (isLoading) {
        return <div className="h-screen"><MyLoading /></div>
    }
    console.log(BooksData);
    return (
        <div>
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start xl:items-center justify-between mb-4 '>
                <BreadCrumb />

                <div className='flex items-center justify-center gap-4'>
                    <button className="text-primary text-sm font-semibold">
                        Your Books
                    </button>
                    <button className="text-primary text-sm font-semibold">
                        Reading
                    </button>
                </div>
            </div>
            <div className='md:grid md:grid-cols-1 flex flex-wrap items-center justify-center xl:gap-5 lg;gap-4 md:gap-3 gap-2'>
                {
                    BooksData?.data.map((book: User & Book) => <BooksCards
                        key={book._id}
                        bookTitle={book.title}
                        status={book.status}
                        readers={book.readers ?? 0}
                        publishedDate={new Date(book.publishedDate)}
                        coinsPerReview={book.coinsPerReview}
                        reviewCount={book.reviewCount}
                        imageSrc={book.bookCover}
                        isReadyForReview={book.isReadyForReview}
                    />)
                }
            </div>
        </div>
    );
};

export default UDBookReview;