import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';

const CalendarTable = () => {
  const [tableHeader, setTableHeader] = useState([]);
  const [todayDate, setTodayDate] = useState(null);

  useEffect(() => {
    // Get the current date and month
    const currentDate = new Date(todayDate);
    const currentMonth = currentDate.getMonth();

    // Get the first date of the month
    const firstDateOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1);

    // Get the last date of the month
    const lastDateOfMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0);

    // Generate an array of all dates in the current month
    const datesInMonth = [];
    for (let date = firstDateOfMonth; date <= lastDateOfMonth; date.setDate(date.getDate() + 1)) {
      datesInMonth.push(new Date(date));
    }

    // Set the table header with all the dates of the month
    setTableHeader(datesInMonth);

    // Set today's date
    setTodayDate(currentDate);
  }, []);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    return `${day} ${month}`;
  };

  return (
    <div>
      <Calendar value={todayDate} onChange={(e) => setTodayDate(e.value)} />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>number</th>
            <th>target</th>
            {tableHeader.map((date) => (
              <th key={date.getDate()} className={todayDate.getDate() === date.getDate() ? 'today' : ''}>
                {formatDate(date)}
                <th>zone</th>
                <th>line</th>
                <th>stock</th>
                <th>target</th>
                <th>acheived</th>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Add table rows for your calendar data here */}
          {/* Each row should have data for each date in the month */}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable;
