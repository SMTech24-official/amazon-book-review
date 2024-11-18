import { Bell, Book, BookOpen, HelpCircle, Library, LogOut, Plus, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white flex dark:bg-gray-950">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Booksy.buzz"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-semibold">Booksy.buzz</span>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-md"
            >
              <div className="bg-primary/10 p-1 rounded">
                <BookOpen className="h-4 w-4" />
              </div>
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Book className="h-4 w-4 ml-1" />
              My Books
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Plus className="h-4 w-4 ml-1" />
              Add Books
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Library className="h-4 w-4 ml-1" />
              Library
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <BookOpen className="h-4 w-4 ml-1" />
              Reading
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <Book className="h-4 w-4 ml-1" />
              Knowledge hub
            </Link>
          </div>
          <div className="mt-4">
            <Link
              href="#"
              className="flex items-center gap-2 px-3 py-2 text-blue-600 text-sm"
            >
              <Image
                src="/placeholder.svg"
                alt="Facebook"
                width={16}
                height={16}
                className="rounded"
              />
              FB community
            </Link>
          </div>
        </nav>
        <div className="border-t p-4 space-y-3">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <HelpCircle className="h-4 w-4" />
            Help
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            <LogOut className="h-4 w-4" />
            Log Out
          </Link>
          <div className="flex items-center gap-3 px-3 py-2">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="font-medium">John Smith</div>
              <div className="text-xs text-gray-500">Book Artist</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="border-b">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-2">
              <span>Welcome Back, Smith!</span>
              <span className="text-xl">👋</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search"
                  className="pl-8 w-[250px]"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Image
                  src="/placeholder.svg"
                  alt="Referral"
                  width={16}
                  height={16}
                  className="rounded"
                />
                Referral
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">🟡</span>
                <span>100</span>
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Empty State */}
        <div className="flex items-center justify-center h-[calc(100vh-73px)]">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Complete Profile"
                width={100}
                height={100}
                className="rounded-full bg-purple-100 p-4"
              />
            </div>
            <p className="text-gray-600">
              Please complete your profile first to
              <br />
              add books and see your progress
            </p>
            <Button className="bg-primary">Profile settings</Button>
          </div>
        </div>
      </div>
    </div>
  )
}