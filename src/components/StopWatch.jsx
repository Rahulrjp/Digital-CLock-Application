import React, { useEffect, useState } from 'react'
import { useDarkMode } from './DarkModeContext'

function StopWatch() {

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [miliSecond, setMiliSecond] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const {isDarkMode} = useDarkMode()

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setMiliSecond((prev) => {
                    if (prev >= 99) {
                        setSecond((s) => {
                            if (s >= 119) {
                                setMinute((m) => {
                                    if (m >= 59) {
                                        setHour((h) => h + 1);
                                        return 0;
                                    }
                                    return m + 1;
                                });
                                return 0;
                            }
                            return s+1;
                        });
                        return 0;
                    }
                    return prev+1;
                });
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const resetTimer = () => {
        setIsRunning(false);
        setHour(0);
        setMinute(0);
        setSecond(0);
        setMiliSecond(0);
    };


    return (

        <div id='main' className='flex flex-col max-w-xl mx-auto h-60 rounded-xl place-content-center shadow-lg ring-teal-300 ring-2 mt-28' style={{boxShadow : !isDarkMode ? '1px 1px 40px rgb(94 234 212)': '1px 1px 80px rgb(107 114 128)' ,backgroundColor : isDarkMode ? 'white' : 'rgb(22 78 99)'}}>
            <div id="content" className='flex gap-4 place-content-center'>
                <div id='hour'
                    className='w-28 h-28 text-sky-400 rounded-md place-content-center text-center text-4xl' style={{textShadow: '1px 1px 30px rgb(49, 166, 192)'}}>{hour.toString().padStart(2,'0')}</div>
                <div id='minute'
                    className='w-28 h-28 text-orange-600 rounded-md place-content-center text-center text-4xl' style={{ textShadow : '1px 1px 50px rgb(234 88 12)'}}>{minute.toString().padStart(2,'0')}</div>
                <div id='second'
                    className='w-28 h-28 text-green-600 rounded-md place-content-center text-center text-4xl' style={{ textShadow : '1px 1px 25px rgb(22 163 74 )'}}> {(second/2).toString().padStart(2,'0')}</div>
                <div id='milisecond'
                    className='w-28 h-28 text-yellow-500 rounded-md place-content-center text-center text-4xl' style={{ textShadow : '1px 1px 30px rgb(234 179 8)'}}>{miliSecond.toString().padStart(2,'0')}</div>
            </div>
            <div id="btn" className='p-5 flex justify-center gap-8'>
                <button className='w-20 h-10 bg-white rounded-md'
                    onClick={() => setIsRunning(!isRunning)}
                    value={isRunning}
                    style={{backgroundColor: isRunning ? 'rgb(239 68 68)' : 'rgb(22 163 74)' , color : 'white'}}
                    >{isRunning ? 'Pause' : 'Start'}</button>
                    <button className='w-20 h-10 bg-sky-500 text-white rounded-md' onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default StopWatch
