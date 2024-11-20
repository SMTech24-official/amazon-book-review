import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star, Coins } from 'lucide-react'

export default function BooksCards() {
  return (
    <div className="flex gap-6 p-4 max-w-2xl">
      <div className="relative w-[120px] h-[180px]">
        <Image
          src="/placeholder.svg?height=180&width=120"
          alt="Dune movie poster"
          className="rounded-md object-cover"
          width={120}
          height={180}
          priority
        />
      </div>
      
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Dune</h2>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-medium">
                Live
              </span>
              <span className="text-xs text-muted-foreground">
                2 reader are reading
              </span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Published: 14 -8-2024
          </div>
        </div>

        <div className="flex items-center gap-6 mt-auto">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <div className="text-sm">
              <span className="font-medium">12</span> Reviews
              <span className="mx-2">·</span>
              <span className="font-medium text-green-600">5.4</span> Avg rating
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Coins className="w-4 h-4 text-yellow-600" />
            <span className="text-sm text-muted-foreground">10 per review</span>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button className="bg-black text-white hover:bg-black/90">
            In for Review
          </Button>
        </div>
      </div>
    </div>
  )
}