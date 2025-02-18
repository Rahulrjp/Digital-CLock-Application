import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TimePicker from './TimePicker';
import { useDarkMode } from './DarkModeContext';

const hours = Array.from({ length: 24 }, (_, i) => ({ label: `${i} hour`, value: i }));
const minutes = Array.from({ length: 60 }, (_, i) => ({ label: `${i} min`, value: i }));
const seconds = Array.from({ length: 60 }, (_, i) => ({ label: `${i} sec`, value: i }));


const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "transparent",  // Change to desired background color
        color: "#fff",
        border: 'none',
        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        outline: 'none',
        cursor: 'pointer',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'rgb(209 213 219)',  // Text color inside the dropdown
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "#444", // Background color of dropdown menu
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "rgb(22 163 74)" : "#444",
        color: "#fff",
        "&:hover": {
            backgroundColor: "rgb(234 88 12)",
        },
    }),
    dropdownIndicator: () => ({ display: "none" }),  // Hides dropdown arrow
    indicatorsContainer: () => ({ display: "none" }), // Removes the entire right-side icons
    input: (provided) => ({
        ...provided,
        opacity: 0,
        width: 0,
    }),
};

function Timer() {

    const {isDarkMode} = useDarkMode()

    const [selectedHour, setSelectedHour] = useState(hours[2]);
    const [selectedMinute, setSelectedMinute] = useState(minutes[0]);
    const [selectedSecond, setSelectedSecond] = useState(seconds[0]);

    const [timeLeft, setTimeLeft] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const getTotalSeconds = () => {
        return (
            selectedHour.value * 3600 +
            selectedMinute.value * 60 +
            selectedSecond.value
        );
    };

    const toggleTimer = () => {
        if (!isRunning) {
            setTimeLeft(getTotalSeconds());
        }
        setIsRunning(!isRunning);
    };

    useEffect(() => {             //coutdown Logic
        if (isRunning && timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }
    }, [isRunning, timeLeft]);


    //Format Time Display
    
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h : ${m}m : ${s}s`;
    };
    const resetTimer = () => {
        setTimeLeft(null);
        setIsRunning(false);
    };

    return (
        <div className='flex flex-col max-w-xl mx-auto h-60 rounded-xl place-content-center shadow-lg ring-teal-300 ring-2 mt-28' style={{ boxShadow : !isDarkMode ? '1px 1px 40px rgb(94 234 212)': '1px 1px 80px rgb(107 114 128)' , backgroundColor : isDarkMode ? 'white' : 'rgb(22 78 99)' }}>
            
        {!isRunning ? <div className='flex justify-center items-center'>
                <div id='time' className='flex justify-center align-middle text-4xl text-white items-center'>
                    <div className='p-1 text-3xl rounded-3xl font-semibold select-none' >
                        <Select
                            value={selectedHour}
                            onChange={setSelectedHour}
                            options={hours}
                            className="w-32 text-center"
                            styles={customStyles}
                            isDisabled={isRunning}
                            
                        />
                    </div>
                    :
                    {/* <p className='text-white p-4 text-6xl rounded-3xl font-semibold select-none' style={{ textShadow: '1px 1px 25px rgb(94 234 212)' }}>:</p> */}
                    <div className='p-1 text-3xl rounded-3xl font-semibold select-none' style={{ }}>
                        <Select
                            value={selectedMinute}
                            onChange={setSelectedMinute}
                            options={minutes}
                            className="w-36 text-center"
                            styles={customStyles}
                            isDisabled={isRunning}
                        />
                    </div>
                    :

                    <div className='p-1 text-3xl rounded-3xl font-semibold select-none place-content-center' style={{ }}>
                        <Select
                            value={selectedSecond}
                            onChange={setSelectedSecond}
                            options={seconds}
                            className="w-36 text-center text-green-600 "
                            styles={customStyles}
                            isDisabled={isRunning}
                        />
                    </div>
                </div>
            </div> : ""}





            {timeLeft !== null && (
                <div className="text-center mt-2 text-white text-3xl font-bold">
                    {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
                </div>
            )}





            <div id="btn" className='p-5 flex justify-center gap-8'>
                <button className='w-20 h-10 bg-white rounded-md'
                    onClick={toggleTimer}
                    value={isRunning}
                    style={{ backgroundColor: isRunning ? 'rgb(239 68 68)' : 'rgb(22 163 74)', color: 'white' }}
                >{isRunning ? 'Pause' : 'Start'}</button>
                <button className='w-20 h-10 bg-sky-500 text-white rounded-md' onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Timer;
