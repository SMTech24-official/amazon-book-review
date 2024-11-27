'use client'

import BreadCrumb from "@/components/common/breadCrumb/BreadCrumb"
import { Button } from "@/components/ui/button"
import DnDInput from "@/components/ui/DnDInput"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { BookTypes } from "@/lib/fakeData/bookTypes"
import { genres } from "@/lib/fakeData/genre"
import { useAddBookMutation } from "@/redux/features/book/bookApi"
import { useAppDispatch } from "@/redux/hooks"
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast"
import { useState } from "react"

export default function AddBooksO() {
    const [bookCover, setBookCover] = useState<File | null>(null)
    const [bookPdf, setBookPdf] = useState<File | null>(null)

    const dispatch = useAppDispatch();
    const [addBook] = useAddBookMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData();

        const Alldata = new FormData(e.currentTarget);

        const data = Object.fromEntries(Alldata.entries());
        console.log(data.bookCover, data.bookPdf);
        if (bookCover && bookPdf) {
            console.log(bookCover, bookPdf);
            formData.append("bookCover", bookCover)
            formData.append("bookPdf", bookPdf)

            const otherData = {
                amazonBookUrl: data.amazonBookUrl,
                authorName: data.authorName,
                bookFormate: data.bookFormat,
                bookType: data.bookType,
                genre: data.genre,
                title: data.title,
            }
            formData.append("data", JSON.stringify(otherData))
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const finishRes = await handleAsyncWithToast(
                async () => {
                    return addBook(formData); // Replace with your actual login function
                },
                "Adding Books...", // Toast message for the start of the process
                "Book Added Completed!", // Toast message for success
                `Please Check Your Book Data`, // Toast message for failure
                true,
                dispatch
            );
        }

    }



    return (
        <div className="">
            <BreadCrumb />

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="title">Book title</Label>
                        <Input id="title" name="title" placeholder="Game of thrones" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="authorName">Author name</Label>
                        <Input id="authorName" name="authorName" placeholder="John" />
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="amazonBookUrl">Your book link of amazon books</Label>
                        <Input id="amazonBookUrl" name="amazonBookUrl" placeholder="URL" />
                    </div>

                    <div className="space-y-2">
                        <Label>Where will the reader read the book?</Label>
                        <Select name="bookFormat" >
                            <SelectTrigger>
                                <SelectValue placeholder="Select reading location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="PDF">PDF</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                        <DnDInput
                            width="w-full"
                            setNew={setBookCover}
                            initialFile={null}
                            id="bookCover"
                            label="Upload Book cover"
                            acceptedTypes="image"
                        />
                    </div>

                    <div className="space-y-2">
                        <DnDInput
                            width="w-full"
                            initialFile={null}
                            setNew={setBookPdf}
                            id="bookPdf"
                            label="Upload Book PDF"
                            acceptedTypes="pdf"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">More about the book</h2>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label>Genre</Label>
                            <Select name="genre">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select genre" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        genres?.map((data, idx) => <SelectItem key={idx} value={data.toLocaleLowerCase()}>{data}</SelectItem>)
                                    }
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Book type</Label>
                            <Select name="bookType">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectContent>
                                        {
                                            BookTypes?.map((data, idx) => <SelectItem key={idx} value={data.toLocaleLowerCase()}>{data}</SelectItem>)
                                        }
                                    </SelectContent>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button variant="outline" type="button">
                        Discard
                    </Button>
                    <Button className="bg-[#9C4E83] hover:bg-[#8C457B]" type="submit">
                        Submit your book
                    </Button>
                </div>
            </form>
        </div>
    )
}