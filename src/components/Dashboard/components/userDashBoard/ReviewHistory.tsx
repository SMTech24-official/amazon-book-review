import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ReviewHistory() {
  const reviews = [
    { bookName: "Sandworms of Dune", review: 10 },
    { bookName: "Hunters of Dune", review: 10 },
    { bookName: "Dune", review: 10 },
    { bookName: "Chapterhouse: Dune", review: 10 },
    { bookName: "Dune Messiah", review: 10 },
    { bookName: "God Emperor of Dune", review: 10 },
  ]

  return (
    <div className="w-full max-w-4xl space-y-4 ">
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-semibold tracking-tight">Review History</h2>


        <Select defaultValue="this-month">
          <SelectTrigger className="w-[180px] bg-">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
            <SelectItem value="last-3-months">Last 3 months</SelectItem>
            <SelectItem value="last-6-months">Last 6 months</SelectItem>
            <SelectItem value="last-year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold !text-black">Book Name</TableHead>
            <TableHead className="font-bold !text-black">Review</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.bookName}>
              <TableCell className="font-medium  hover:underline">
                <p>{review.bookName}</p>
              </TableCell>
              <TableCell>{review.review}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}