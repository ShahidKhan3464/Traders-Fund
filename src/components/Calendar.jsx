import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Notification from '../components-website/Notification';

const Calendar = ({ tradeData, setCurrentMonth, setCurrentYear }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [notification, setNotification] = useState('');
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate(); // Get the current day
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Generate days for the previous month
  const prevMonthDaysArray = Array.from({ length: firstDayOfMonth }, (_, index) => daysInPrevMonth - firstDayOfMonth + index + 1);

  // Generate days for the next month
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDay();
  const remainingDays = 6 - lastDayOfMonth;
  const nextMonthDaysArray = Array.from({ length: remainingDays }, (_, index) => index + 1);

  const goToPrevMonth = () => {
    const date = new Date(currentYear, currentMonth - 1, 1);
    date.setUTCDate(date.getUTCDate() + 1);
    setCurrentMonth(date.getUTCMonth());
    setCurrentYear(date.getUTCFullYear());
    setCurrentDate(date);
  };

  const goToNextMonth = () => {
    const date = new Date(currentYear, currentMonth + 1, 1);
    date.setUTCDate(date.getUTCDate() + 1);
    setCurrentMonth(date.getUTCMonth());
    setCurrentYear(date.getUTCFullYear());
    setCurrentDate(date);
  };

  const allDaysArray = [...prevMonthDaysArray, ...daysArray, ...nextMonthDaysArray];

  const dayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const data = [];

  const compareDates = (receivedDate, day) => {
    const currentDate = new Date(currentYear, currentMonth, day);
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
    currentDate.setUTCHours(0);
    currentDate.setUTCMinutes(0);
    currentDate.setUTCSeconds(0);
    const receivedDateObj = new Date(receivedDate);
    receivedDateObj.setUTCDate(receivedDateObj.getUTCDate() + 1);
    receivedDateObj.setUTCHours(0);
    receivedDateObj.setUTCMinutes(0);
    receivedDateObj.setUTCSeconds(0);
    return currentDate.toISOString() === receivedDateObj.toISOString();
  };
  const formatDay = day => (day > 0 ? day.toString().padStart(2, '0') : '');
  const renderWeekRows = () => {
    const rows = [];
    let rowIndex = 0;

    let currentDayIndex = 1;

    for (let i = 0; i < 6; i++) {
      const weekDays = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          weekDays.push(null); // Push null for the days of the previous month
        } else if (currentDayIndex <= daysInMonth) {
          weekDays.push(currentDayIndex);
          currentDayIndex++;
        } else {
          weekDays.push(null); // Push null for the days of the next month
        }
      }

      rows.push(
        <div key={rowIndex} className="flex items-center justify-between w-full mx-auto calendar-week">
          {weekDays.map((day, index) => {
            if (day === null) {
              return (
                <div
                  key={index}
                  className="calendar-day text-sm flex flex-col justify-between cursor-pointer p-2 min-w-[150px] w-full h-[100px] border border-transparent"
                ></div>
              );
            } else {
              const event = tradeData?.profits?.find(event => compareDates(event.tradeDate, day));
              return (
                <div
                  key={index}
                  className={`calendar-day text-sm flex flex-col justify-between cursor-pointer p-2 min-w-[150px] w-full h-[100px] border ${day === today.getDate() && today.getMonth() === currentMonth && today.getFullYear() === currentYear ? 'border-green-500' : 'border-secGrayTheme'} ${event ? (event.profit > 0 ? 'bg-green-50' : 'bg-red-50') : 'bg-grayTheme'} `}
                >
                  <div className="flex justify-between w-full">
                    {event && (
                      <div className="text-base ">
                        <p className={`${event.profit > 0 ? 'text-green-500' : 'text-red-500'}`}>${event.profit}</p>
                      </div>
                    )}
                    {event && (
                      <p className={`ml-auto text-right ${event.profit > 0 ? 'text-green-900' : 'text-red-900'}`}>{formatDay(day)}</p>
                    )}
                    {!event && <p className={`ml-auto text-right text-white`}>{formatDay(day)}</p>}
                  </div>
                  {event && <p className={`${event.profit > 0 ? 'text-green-900' : 'text-red-900'}`}>{event.totalTrades} trades</p>}
                </div>
              );
            }
          })}
        </div>
      );

      rowIndex++;
    }

    return rows;
  };

  return (
    <>
      {notification && <Notification message={notification.message} type={notification.type} />}
      <div className="visible w-full overflow-x-scroll calendar min-w-max overflow-x:">
        <div className="flex lg:flex-row flex-col gap-2 justify-between flex-1 px-4 py-5 calendar-header rounded-[8px] bg-grayTheme overflow-x:visible  min-w-max w-auto">
          <p>Daily trade breakdown</p>
          <div className="flex items-center gap-2 text-lg">
            <h2> {`${monthNames[currentMonth]} ${currentYear}`}</h2>
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700" onClick={goToPrevMonth}>
              <BiChevronLeft></BiChevronLeft>
            </button>
            <button
              className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 ${today.getFullYear() === currentYear && today.getMonth() === currentMonth ? 'text-gray-500' : 'text-white'}`}
              onClick={goToNextMonth}
              disabled={today.getFullYear() === currentYear && today.getMonth() === currentMonth}
            >
              <BiChevronRight></BiChevronRight>
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-1 w-auto py-2 day-headings bg-secGrayTheme overflow-x:visible min-w-max">
          {dayHeadings.map(day => (
            <div key={day} className="day-heading p-2 min-w-[150px] w-full ">
              <p className="text-sm font-medium text-center uppercase">{day}</p>
            </div>
          ))}
        </div>
        <div className="calendar-weeks lg:h-[500px] h-auto ">{renderWeekRows()}</div>
      </div>
    </>
  );
};

export default Calendar;
