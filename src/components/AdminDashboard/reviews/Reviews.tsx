'use client'

import AdminTestimonialCard from '@/components/cards/AdminTestimonialCard'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import MyLoading from '@/components/ui/MyLoading'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useGetAllCustomersReviewsQuery, usePostCustomerReviewMutation } from '@/redux/features/others/othersApi'
import { useAppDispatch } from '@/redux/hooks'
import { handleAsyncWithToast } from '@/utils/handleAsyncWithToast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'



const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  platform: z.enum(["amazon", "linkedin"], {
    required_error: "Please select a review platform.",
  }),
  reviewText: z.string().min(10, {
    message: "Review must be at least 10 characters.",
  }),
})

export function AddReviewForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [postReview] = usePostCustomerReviewMutation()
  const { data, isLoading } = useGetAllCustomersReviewsQuery(undefined)
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      platform: undefined,
      reviewText: "",
    },
  })


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // In a real application, you would send this data to your backend
    const formData = new FormData()
    const data = {
      name: values.name,
      socials: [values.platform],
      review: values.reviewText
    }
    formData.append("data", JSON.stringify(data))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const finishRes = await handleAsyncWithToast(
      async () => {
        return postReview(formData); // Replace with your actual login function
      },
      "Adding Reviews...", // Toast message for the start of the process
      "Review Added Completed!", // Toast message for success
      `Please Check Your Network`, // Toast message for failure
      true,
      dispatch
    );
    form.reset()
    setIsSubmitting(false)
  }

  if (isLoading) {
    return <MyLoading />
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Review Platform</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reviewText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Review</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your review here..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting} className='bg-primary text-white'>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </Form>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
          data?.data.length === 0 ? <p>No Reviews Found</p> :
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.data.map((review: any) => <AdminTestimonialCard id={review._id} key={review._id} name={review.name} reviews={review.review} />)
        }

      </div>
    </div>
  )
}

