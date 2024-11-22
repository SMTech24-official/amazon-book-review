import Image from 'next/image';
import React from 'react';
import book from "@/assets/Book Cover Image.png"
import { Button } from '@nextui-org/react';

const KnowledgeHubStartReadingCard = () => {
    return (
        <div className='border border-gray-400 p-3 flex flex-col items- gap-3 rounded-xl'>
            <Image src={book} height={400} width={200} alt='img' className='mx-auto'/>
            <h3 className='text-xl font-medium mt-1 mb-3'>How to earn Buzz points</h3>
            <p className='text-start font-medium'>By: Booksy</p>
            <Button radius='sm' className='bg-primary text-white'>Start reading</Button>
        </div>
    );
};

export default KnowledgeHubStartReadingCard;