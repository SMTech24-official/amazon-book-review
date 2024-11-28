"use client"

import GradCircleWrapper from '@/components/common/grad-circleWrapper/GradCircleWrapper';
import { Button } from '@nextui-org/react';
import React from 'react';
import { RiCustomerService2Line } from 'react-icons/ri';

const HelpPages = () => {
    return (
        <div>
            <p className='mt-4 py-5 border-b'>Email: <span>example@gmail.com</span></p>
            <GradCircleWrapper className=''>
                <div className='flex flex-col items-center justify-center lg:space-y-6 md:space-y-4 space-y-2 aspect-square '>
                    <p className='text-2xl font-medium text-center'>Let’s work together and solve the problem!</p>
                    <p className='max-w-sm text-center'>Our customer care will guide you step by step to your solution</p>
                    <Button radius='sm' className='bg-primary text-white flex items-center gap-2'>
                        Send Email
                        <RiCustomerService2Line className='min-h-6 min-w-6' />
                    </Button>
                </div>
            </GradCircleWrapper>
        </div>
    );
};

export default HelpPages;