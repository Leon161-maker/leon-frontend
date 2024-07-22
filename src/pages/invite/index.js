import React from 'react';

import {Gift, PremiumGift} from '../../assests/svgs/index'

const InviteFriends = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#74561d] via-[#303c20] to-[#303c20] text-white p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-center text-4xl font-semibold mt-6 mb-2">Invite friends</h1>
        <p className="text-center mb-6">You and your friend will receive bonuses</p>
        
        <div className="space-y-4">
          <div className="bg-[#56683F] rounded-xl p-4 flex items-center justify-between">
            <img src={Gift} alt="Gift Icon" className="w-12 h-12" />
            <div className="ml-4 flex-1">
              <h2 className="font-bold text-lg">Invite a friend</h2>
              <p>2,000 for you and your friend</p>
            </div>
          </div>
          
          <div className="bg-[#56683F] rounded-xl p-4 flex items-center justify-between">
            <img src={PremiumGift} alt="Premium Gift Icon" className="w-12 h-12" />
            <div className="ml-4 flex-1">
              <h2 className="font-bold text-lg">Invite a friend with Telegram Premium</h2>
              <p>10,000 for you and your friend</p>
            </div>
          </div>
        </div>
        
        <h2 className="mt-6 text-xl">List of your friends</h2>
        <div className="bg-[#56683F]  rounded-xl p-4 mt-2">
          Lorem
        </div>
      </div>
      
    </div>
  );
}

export default InviteFriends;
