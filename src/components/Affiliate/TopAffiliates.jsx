import React, { useState } from 'react';
import Leaderboard from './Leaderboard';
import {getBadge, getOrdinalNumber} from '../../utils/utils';

const TopAffiliates = ({ data }) => {
  const [previewImage, setPreviewImage] = useState(null);
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-start">
     {data.map((item, index) => (
       <div className="relative rounded-md">
       <div className="absolute z-[10] flex justify-center -translate-x-1/2 -translate-y-1/2 top-16 left-1/2">
         <div className="w-16 h-16 rounded-full bg-mainTheme flex items-center justify-center uppercase">
                {item.firstName.slice(0, 1) + item.lastName.slice(0, 1)}
         </div>
       </div>
       <div className="flex items-center justify-end w-full h-16 px-8 rounded-t-md bg-gradient-to-r from-cyan-300 via-blue-500 to-blue-900 ">
         <p className="text-3xl font-bold">{index +1}</p>
         <p className="text-xs">{getOrdinalNumber(index +1)}</p>
       </div>
       <div className="relative px-4 pt-10 pb-8 space-y-4 rounded-b-md bg-secTheme capitalize">
         <div className='flex justify-start items-center gap-2'>
           <p>{item.firstName} {item.lastName}   </p>
           {getBadge(item.affiliateType, '25px')}
         </div>
         <div className="flex gap-10 ">
           <div>
             <p className="text-xs font-light">Total Earnings</p>
             <p>${item.totalEarnings.toFixed(2)}</p>
           </div>
           <div className="text-left">
             <p className="text-xs font-light">Total Affiliate Signup</p>
             <p>{item.totalAffiliates}</p>
           </div>
         </div>
         <div className="flex gap-10 ">
           <div>
             <p className="text-xs font-light">Direct Earnings</p>
             <p>${item.directEarnings.toFixed(2)}</p>
           </div>
           <div className="text-left">
             <p className="text-xs font-light">Indirect Earnings</p>
             <p>${item.indirectEarnings.toFixed(2)}</p>
           </div>
         </div>
       </div>
     </div>
     ))}

    </div>
  );
};

export default TopAffiliates;
