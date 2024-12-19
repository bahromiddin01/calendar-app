import React, { useState } from 'react';

export default function Calendar() {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const handlePrev = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNext = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const adjustedFirstDay = (firstDayOfMonth === 0 ? 7 : firstDayOfMonth) - 1;

    const days = [];
    for (let i = 0; i < adjustedFirstDay; i++) {
        days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }
    while (days.length < 42) {
        days.push(null);
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-6 border-green-300 shadow-green-200 shadow-lg p-10 border rounded-2xl w-[500px] h-[500px]">
                <div className="flex justify-between items-center gap-16">
                    <button
                        className="hover:bg-green-100 px-3 py-1 rounded-md font-light font-sans text-xl hover:text-green-500"
                        onClick={handlePrev}
                    >
                        <i className="fa-angle-left fa-solid"></i>
                    </button>
                    <div className="flex justify-center items-center gap-4 w-44">
                        <h1 className="font-medium text-center text-xl">{monthNames[currentMonth]}</h1>
                        <h1 className="font-medium text-center text-xl">{currentYear}</h1>
                    </div>
                    <button
                        className="hover:bg-green-100 px-3 py-1 rounded-md font-light font-sans text-xl hover:text-green-500"
                        onClick={handleNext}
                    >
                        <i className="fa-chevron-right fa-solid"></i>
                    </button>
                </div>
                <div className="gap-4 grid grid-cols-7">
                    {weekDays.map((day, index) => (
                        <p className="w-10 font-medium text-center text-sm" key={index}>{day}</p>
                    ))}
                </div>
                <div className="gap-4 grid grid-cols-7 h-72">
                    {days.map((day, index) =>
                        day ? (
                            <p
                                key={index}
                                className={`text-center rounded-full p-2 cursor-pointer mx-auto w-10 h-10 ${day === todayDate &&
                                        currentMonth === todayMonth &&
                                        currentYear === todayYear
                                        ? 'bg-green-500 text-white font-bold'
                                        : 'hover:bg-green-100 hover:text-green-500 border border-green-500 duration-200'
                                    }`}
                            >
                                {day}
                            </p>
                        ) : (
                            <div key={index} className="invisible"></div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
