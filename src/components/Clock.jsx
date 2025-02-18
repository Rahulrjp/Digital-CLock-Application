import React from 'react';
import { useTimeFormat } from './TimeFormatContext'; // Import the context
import Update from './TimeFormatChange';
import { useDarkMode } from './DarkModeContext';

function Clock() {
    const { isOn } = useTimeFormat(); // Access the isOn state
    const {isDarkMode} = useDarkMode()
    const now = new Date();
    const hours = isOn ? now.getHours() % 12 || 12 : now.getHours(); // 12-hour format when isOn is true
    const minutes = now.getMinutes()
    const amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className='flex flex-col max-w-xl mx-auto h-60 rounded-xl place-content-center mt-28 ring-2' style={{boxShadow : !isDarkMode ? '1px 1px 40px rgb(94 234 212)': '1px 1px 80px rgb(107 114 128)', backgroundColor : isDarkMode ? 'white' : 'rgb(22 78 99)' }}>
            <div className='flex gap-4 justify-center items-center'>
                <div id='time' className='flex gap-8 justify-center align-middle'>
                    <div className='text-sky-500 p-4 text-6xl rounded-3xl font-semibold select-none' style={{textShadow: '1px 1px 30px rgb(49, 166, 192)'}}>
                        {hours.toString().padStart(2, '0')}
                    </div>
                    <p className='p-4 text-6xl rounded-3xl font-semibold select-none' style={{opacity : Update().getSeconds() % 2 == 0 ? 1 : 0, textShadow: '1px 1px 25px rgb(94 234 212)' , color : isDarkMode ? 'black' : 'white'}}>:</p>
                    <div className='text-orange-600 p-4 text-6xl rounded-3xl font-semibold select-none' style={{ textShadow : '1px 1px 50px rgb(234 88 12)'}}>
                        {minutes.toString().padStart(2, '0')}
                    </div>
                    <div className='text-green-600 px-3 rounded-3xl text-2xl font-semibold select-none place-content-center' style={{ textShadow : '1px 1px 25px rgb(22 163 74 )'}}>
                        {Update().getSeconds().toString().padStart(2,'0')}
                    </div>
                    {isOn && <p className='text-yellow-500 text-2xl px-3 rounded-3xl font-semibold place-content-center select-none' style={{ textShadow : '1px 1px 30px rgb(234 179 8)'}}>{amPm}</p>}
                </div>
            </div>
            <div className='mx-auto mt-5 p-2 rounded-xl'>
                <p className='text-2xl font-semibold select-none' style={{ textShadow : '1px 1px 20px rgb(215, 70, 70)' , color : 'rgb(250, 30, 30)'}}>
                    {week[now.getDay()]}, {month[now.getMonth()]} {now.getDate().toString().padStart(2, '0')}
                </p>
            </div>
        </div>
    );
}

export default Clock;
