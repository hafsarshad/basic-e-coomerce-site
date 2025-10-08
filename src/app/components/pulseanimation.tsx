
'use client';
import React, { useEffect, useState } from 'react';
import './carousel.css';
export default function pulseanimation(){
    return(
 <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
  <div className="w-28 h-28 bg-[#FFD912] rounded-full animate-morph shadow-[0_0_60px_10px_rgba(255,217,18,0.8)]"></div>
</div>




    );
}