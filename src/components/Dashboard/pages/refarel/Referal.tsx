"use client"
import handIcon from "@/assets/fi_18188459.png";
import refer from "@/assets/fi_1921935.png";
import referIcon from "@/assets/refer.png";
import GradCircleWrapper from '@/components/common/grad-circleWrapper/GradCircleWrapper';
import { useGetInviteLinkQuery } from "@/redux/features/invite/inviteApi";
import { Button } from '@nextui-org/react';
import copy from 'clipboard-copy';
import { CheckCheck, Copy } from 'lucide-react';
import Image from 'next/image';
import { useState } from "react";
import ProgressBar from '../../components/progressBar/ProgressBar';
import { useUserDataQuery } from "@/redux/features/auth/authApi";
const Referral = () => {
    const { data: user } = useUserDataQuery(undefined)
    const { data, isLoading } = useGetInviteLinkQuery(undefined)

    console.log(data?.data);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = async () => {
      try {
        await copy(data?.data);
        setIsCopied(true);
      } catch (error) {
        console.error('Failed to copy text to clipboard', error);
      }
    };
    
    return (
        <div>
            <p className="text-center text-2xl font-medium">
                Refer your friends and family to get a bonus
            </p>
            <GradCircleWrapper className=''>
                <div className='flex flex-col items-center justify-center lg:space-y-6 md:space-y-4 space-y-2 aspect-square '>
                    <Image
                        src={refer}
                        alt="Referral"
                        width={100}
                        height={100}
                        className="rounded sm:w-20 sm:h-20 w-20 h-20"
                    />
                    <p className='text-xl font-medium text-center max-w-2xl'>By inviting your friends you and your friend both can earn BuzzPoints
                        And also earn a  “Community Builder” badge.</p>
                    <Button isLoading={isLoading} onClick={() => handleCopyClick()} radius='sm' className='bg-primary text-white flex items-center gap-2'>
                        <Image
                            src={referIcon}
                            alt="Referral icon"
                            width={100}
                            height={100}
                            className="rounded sm:w-6 sm:h-6 w-6 h-6"
                        />
                        Copy Referral Link
                        {
                            isCopied ? <CheckCheck className='min-h-6 min-w-6'/> : <Copy className='min-h-6 min-w-6' />
                        }
                        
                    </Button>
                </div>
            </GradCircleWrapper>

            <ProgressBar value={user?.data.invitedFriends ?? 0} max={20} middleValue={10} />
            <div className="mt-20 max-w-2xl mx-auto flex flex-col gap-4 items-center">
                <Image
                    src={handIcon}
                    alt="Referral icon"
                    width={100}
                    height={100}
                    className="rounded  w-10 h-10"
                />
                <p className='text-center'>
                    For every referral you and your friend will get 50 BuzzPoints. For 10 referral you will get 100 extra BuzzPoints and for 20 referral you will get an extra 200 BuzzPoints and a “Community Builder” badge
                </p>
            </div>
        </div>
    );
};

export default Referral;