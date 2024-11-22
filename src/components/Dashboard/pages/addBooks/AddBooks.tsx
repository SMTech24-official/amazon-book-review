'use client'

import BreadCrumb from "@/components/Shared/breadCrumb/BreadCrumb"
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

export default function AddBooksO() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log('Form Data:', data)
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
                        <Label htmlFor="author">Author name</Label>
                        <Input id="author" name="author" placeholder="John" />
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="amazonLink">Your book link of amazon books</Label>
                        <Input id="amazonLink" name="amazonLink" placeholder="URL" />
                    </div>

                    <div className="space-y-2">
                        <Label>Where will the reader read the book?</Label>
                        <Select name="readingPlatform" >
                            <SelectTrigger>
                                <SelectValue placeholder="Select reading location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pdf">PDF</SelectItem>
                                <SelectItem value="kindle">Kindle</SelectItem>
                                <SelectItem value="epub">EPUB</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                        <DnDInput
                            width="w-full"
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
                                    <SelectItem value="horror">Horror</SelectItem>
                                    <SelectItem value="fantasy">Fantasy</SelectItem>
                                    <SelectItem value="scifi">Science Fiction</SelectItem>
                                    <SelectItem value="romance">Romance</SelectItem>
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
                                    <SelectItem value="fiction">Fiction</SelectItem>
                                    <SelectItem value="nonfiction">Non-Fiction</SelectItem>
                                    <SelectItem value="academic">Academic</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Word count</Label>
                    <Select name="wordRange">
                        <SelectTrigger>
                            <SelectValue placeholder="Select word count range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="12000-20000">12000 - 20000</SelectItem>
                            <SelectItem value="20000-40000">20000 - 40000</SelectItem>
                            <SelectItem value="40000-60000">40000 - 60000</SelectItem>
                            <SelectItem value="60000+">60000+</SelectItem>
                        </SelectContent>
                    </Select>
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