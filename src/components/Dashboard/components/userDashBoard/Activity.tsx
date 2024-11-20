import { Check, Pencil } from 'lucide-react'

export default function Activity() {
  const activities = [
    {
      icon: "edit",
      text: "Your book The Housemaid's Secret added for review",
      time: "3 hours ago"
    },
    {
      icon: "check",
      text: "Your book The Housemaid's Secret was submitted",
      time: "2 month ago"
    },
    {
      icon: "check",
      text: "Your book The Housemaid's Secret was approved",
      time: "1 day ago"
    },
    {
      icon: "edit",
      text: "Your book The Housemaid's Secret has been reviewed",
      time: "3 hours ago"
    },
    {
      icon: "check",
      text: "Your book The Housemaid's Secret was submitted",
      time: "2 month ago"
    },
    {
      icon: "check",
      text: "Your book The Housemaid's Secret was approved",
      time: "1 day ago"
    }
  ]

  return (
    <div className="w-full max-w-2xl p-4">
      <h2 className="text-2xl font-semibold mb-6">Your Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1">
              {activity.icon === "edit" ? (
                <Pencil className="h-4 w-4 text-gray-500" />
              ) : (
                <Check className="h-4 w-4 text-gray-500" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-gray-600">{activity.text}</p>
              <p className="text-sm text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}