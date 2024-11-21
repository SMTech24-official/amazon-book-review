import Image from "next/image";
import React from "react";
import coins from "@/assets/coins.png"

type BuzzPoint = {
    type: string;
    points: number;
  };
  
  const buzzPoints: BuzzPoint[] = [
    { type: "Low-Content Books (e.g., coloring books, workbooks)", points: 5 },
    { type: "Medium-Length Non-Fiction (100-200 pages, such as self-help, guides)", points: 15 },
    { type: "Long Fiction Books (300+ pages, novels or complex non-fiction)", points: 25 },
    { type: "Kindle Unlimited Review", points: 5 },
    { type: "Low-Cost eBook (up to $0.99)", points: 10 },
    { type: "Mid-Range eBook ($1.00 - $3.99)", points: 15 },
    { type: "High-Cost eBook ($4.00 and above)", points: 20 },
    { type: "Referral Bonus", points: 50 },
    { type: "5 x Referral Bonus", points: 100 },
    { type: "10 x Referral Bonus", points: 200 },
    { type: "Reviewer of the month", points: 50 },
  ];

  
const page = () => {
  return (
    <div>
      <div className="border-b-1  p-4">Coins</div>
      <div className="  flex items-center justify-center w-full">
      <div className=" w-full bg-white shadow-lg rounded-lg">
        <div className="">
         
          <table className="max-w-6xl w-full border-collapse ">
            <thead>
              <tr className=" text-sm text-gray-600">
                <th className=" px-4 py-4 text-left">Book Type</th>
                <th className=" px-4 py-4 text-center">BuzzPoints</th>
              </tr>
            </thead>
            <tbody>
              {buzzPoints.map((item, index) => (
                <tr
                  key={index}
                 
                >
                  <td className=" px-4 py-3 text-sm text-gray-700">
                    {item.type}
                  </td>
                  <td className=" px-4 py-3 text-center  font-medium text-gray-700">
                    <div className="max-w-28 flex items-center justify-between mx-auto px-4 py-[6px] border border-gray-300 rounded-md">
                      {item.points}
                      {/* <span className=" text-yellow-500 text-lg">🪙</span> */}
                      <Image src={coins} alt="icon of coins earned by reding" className="max-w-6 max-h-6" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default page;
