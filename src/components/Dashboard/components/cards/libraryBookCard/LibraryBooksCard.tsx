"use client"
export default function LibraryBookCard() {
    return (
        <div className="w-64 border rounded-lg shadow-sm">
            <div className="relative">
                <img
                    src="/placeholder.svg?height=200&width=150"
                    alt="Book cover"
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-center">The Housemaid&apos;s Secret</h3>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-yellow-500" />
                        <span className="ml-1 text-sm font-medium">100</span>
                    </div>
                    <span className="text-sm text-gray-600">By: John Smith</span>
                </div>
            </div>
            <div className="p-4">
                <button className="w-full bg-purple-500 text-white hover:bg-purple-600">
                    Start reading
                </button>
            </div>
        </div>
    )
}

