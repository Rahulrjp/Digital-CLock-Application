import React from 'react'
import { useState } from 'react';
import { useTimeFormat } from './TimeFormatContext';

export default function FormatBlock() {
    
  const {isOn, setIsOn} = useTimeFormat();
  
    return (
      <div className="w-80 flex items-center justify-center p-4 bg-slate-700 mx-auto my-10 rounded-lg" style={{ boxShadow : '1px 1px 50px rgb(71 85 105)'}}>
        <label className="relative inline-flex items-center cursor-pointer gap-12">
            <p className='text-xl text-white select-none'> Format : {isOn ? '12' : '24'} Hour</p>
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={isOn} 
            id='format-changer'
            onChange={() => setIsOn(!isOn)}
          />
          <div className= "flex items-center w-14 h-7 bg-red-600 rounded-full peer peer-checked:bg-green-500 peer-checked:justify-end transition">
            <div className='w-5 h-5 bg-white rounded-full mx-1 '></div>
          </div>
        </label>
      </div>
    );
  }
