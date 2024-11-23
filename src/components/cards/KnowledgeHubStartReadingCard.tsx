import Image from 'next/image';
import React from 'react';
import { Button } from '@nextui-org/react';

const KnowledgeHubStartReadingCard = ({title, author, image}: {title: string, author: string, image:string}) => {
    return (
        <div className='border p-3 flex flex-col items- gap-3 rounded-xl w-full'>
            <Image src={image} height={400} width={200} alt='img' className='mx-auto'/>
            <h3 className='text-xl font-medium mt-1 mb-3 flex-1'>{title}</h3>
            <p className='text-start font-medium'>By: {author}</p>
            <Button radius='sm' className='bg-primary text-white'>Start reading</Button>
        </div>
    );
};

export default KnowledgeHubStartReadingCard;