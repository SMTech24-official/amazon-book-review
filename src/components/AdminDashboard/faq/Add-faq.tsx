'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button, Input, Textarea } from '@nextui-org/react'
import { usePostFAQMutation } from '@/redux/features/others/othersApi'
import { useAppDispatch } from '@/redux/hooks'
import { handleAsyncWithToast } from '@/utils/handleAsyncWithToast'

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button radius='sm' type="submit" disabled={pending} className='bg-primary text-white'>
            {pending ? 'Adding...' : 'Add FAQ'}
        </Button>
    )
}

export function AddFAQForm() {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [postFAQ] = usePostFAQMutation()

    const dispatch = useAppDispatch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function handleSubmit(formData: FormData) {
        const data = {
            question: question, answer: answer
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const finishRes = await handleAsyncWithToast(
            async () => {
                return postFAQ(data); // Replace with your actual login function
            },
            "Adding FAQ...", // Toast message for the start of the process
            "FAQ Added Completed!", // Toast message for success
            `Please Check Your Network`, // Toast message for failure
            true,
            dispatch
        );
        setQuestion("")
        setAnswer("")
    }



    return (
        <Card>
            <CardHeader>
                <CardTitle>Add New FAQ</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="question">Question</Label>
                        <Input
                            id="question"
                            name="question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="answer">Answer</Label>
                        <Textarea
                            id="answer"
                            name="answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            required
                            className='!bg-white placeholder:bg-white'
                        />
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    )
}