import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";

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
    const day = date?.getDate().toString().padStart(2, '0');
    const month = date?.toLocaleString('default', { month: 'short' });
    return `${day} ${month}`;
  };

  return (
    <div style={{ height: "calc(100vh - 15rem)" }}>
      <div className="card p-fluid p-2 px-4">
        <div className="flex justify-content-between align-items-center">
          <h4 className='mb-0 font-bold'>Schedule</h4>
          <div className="my-1 flex">
            <Calendar value={todayDate} onChange={(e) => setTodayDate(e.value)} style={{width: "100px"}} dateFormat="MM-yy" />
            <div>
            <Button className="btn1" label="Upload" />
            </div>
          </div>
        </div>
      </div>
      <div className='card w-full overflow-auto h-full'>
      <table>
        <thead>
          <tr>
            <th style={{minWidth: "102px"}}>Customer Name</th>
            <th style={{minWidth: "102px"}}>Part Number</th>
            <th style={{minWidth: "102px"}}>Target</th>
            <th style={{minWidth: "102px"}}>%Achieved</th>
            {tableHeader?.map((date) => (
              <th key={date?.getDate()} className="bg-odd">
                {formatDate(date)}
                <th style={{minWidth: "102px"}}>Zone</th>
                <th style={{minWidth: "102px"}}>Line</th>
                <th style={{minWidth: "50px"}}>Stock</th>
                <th style={{minWidth: "102px"}}>Target</th>
                <th style={{minWidth: "50px"}}>Acheived</th>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{minWidth: "102px"}}>Sanden Vikas</td>
            <td style={{minWidth: "102px"}}>2884-0850V</td>
            <td style={{minWidth: "102px"}}>800</td>
            <td style={{minWidth: "102px"}}></td>
            {tableHeader?.map((date) => (
              <td key={date?.getDate()} className={todayDate?.getDate() === date?.getDate() ? 'today' : ''}>
                <td style={{width: "100px"}}><Dropdown  style={{width: "100px"}} /></td>
                <td style={{width: "100px"}}><Dropdown  style={{width: "100px"}} /></td>
                <td style={{width: "50px"}}>100</td>
                <td style={{width: "100px"}}><InputText  style={{width: "100px"}} /></td>
                <td style={{width: "50px"}}>100</td>
              </td>
            ))}
          </tr>
          <tr>
            <td style={{minWidth: "102px"}}>Sanden Vikas</td>
            <td style={{minWidth: "102px"}}>VAC32-10340</td>
            <td style={{minWidth: "102px"}}>1200</td>
            <td style={{minWidth: "102px"}}></td>
            {tableHeader?.map((date) => (
              <td key={date?.getDate()} className={todayDate?.getDate() === date?.getDate() ? 'today' : ''}>
                <td style={{width: "100px"}}><Dropdown  style={{width: "100px"}} /></td>
                <td style={{width: "100px"}}><Dropdown  style={{width: "100px"}} /></td>
                <td style={{width: "50px"}}>100</td>
                <td style={{width: "100px"}}><InputText  style={{width: "100px"}} /></td>
                <td style={{width: "50px"}}>100</td>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CalendarTable;
