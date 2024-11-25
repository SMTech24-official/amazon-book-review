/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';
import { Button } from '@nextui-org/react';

const KnowledgeHubStartReadingCard = ({item} : {item:any}) => {
    console.log(item);
      // Handle PDF download
  const handleDownloadPdf = (pdfUrl: string) => {
    if (!pdfUrl) {
      alert("PDF not available");
      return;
    }
    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };
    return (
        <div className='border border-gray-400 p-3 flex flex-col items- gap-3 rounded-xl'>
            {
                item?.cover ? 
                <Image src={item?.cover} height={400} width={200} alt='img' className='mx-auto'/>
                :  
                <Image src={"https://img.freepik.com/free-photo/yellow-book-cover_1101-1118.jpg"} height={400} width={200} alt='img' className='mx-auto'/>
             }
            <h3 className='text-xl font-medium mt-1 mb-3'>{item?.title}</h3>
            <p className='text-start font-medium'>By: {item?.addedBy}</p>
            <Button radius='sm' onClick={() => handleDownloadPdf(item?.pdfFile)} className='bg-primary text-white'>Start reading</Button>
        </div>
    );
};

export default KnowledgeHubStartReadingCard;