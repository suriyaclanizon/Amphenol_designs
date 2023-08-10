import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

const CalendarTable = () => {
  const [tableHeader, setTableHeader] = useState([]);
  const [todayDate, setTodayDate] = useState(null);
  const [shift1, setShift1] = useState(null);
  const [shift2, setShift2] = useState(null);
  const [shift3, setShift3] = useState(null);

  useEffect(() => {
    // Get the current date and month
    const currentDate = new Date();
    handleDateChange(currentDate)
  }, []);

  const formatDate = (date) => {
    const day = date?.getDate().toString().padStart(2, '0');
    const month = date?.toLocaleString('default', { month: 'short' });
    return `${day} ${month}`;
  };

  const handleDateChange = (e) => {
    console.log(e);
    const currentDate = new Date(e);
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
  }

  const handlechange = (e,item,index)=>{
    console.log(e.target.value,item,index);
  }

  return (
    <div style={{ height: "calc(100vh - 15rem)" }}>
      <div className="card p-fluid p-2 px-4">
        <div className="flex justify-content-between align-items-center">
          <h4 className='mb-0 font-bold'>Schedule</h4>
          <div className="my-1 flex">
            <Calendar value={todayDate} onChange={(e) => handleDateChange(e.value)} style={{width: "100px"}} dateFormat="MM-yy" />
            <div>
            <Button className="btn1" label="Upload" />
            </div>
          </div>
        </div>
      </div>
      <div className='card w-full overflow-auto h-full p-0'>
      <table>
        <thead>
          <tr>
            <th rowSpan={3}>Customer Name</th>
            <th rowSpan={3}>Part Number</th>
            <th rowSpan={3}>Target</th>
            <th rowSpan={3}>% Achieved</th>
            <th rowSpan={3}>Stock</th>
            {tableHeader?.map((date,index) => (
            <th colSpan={6} style={{backgroundColor: index % 2 === 1 ? "#fafafa" : "#f0f4f7"}}>{formatDate(date)}</th>
            ))}
            </tr>
          <tr>
            {tableHeader?.map((date,index) => (
              <React.Fragment key={date}>
                <th rowSpan={2} style={{backgroundColor: index % 2 === 1 ? "#fafafa" : "#f0f4f7"}}>Zone</th>
                <th rowSpan={2} style={{backgroundColor: index % 2 === 1 ? "#fafafa" : "#f0f4f7"}}>Line</th>
                <th colSpan={3} style={{backgroundColor: index % 2 === 1 ? "#fafafa" : "#f0f4f7"}}>Target</th>
                <th rowSpan={2} style={{backgroundColor: index % 2 === 1 ? "#fafafa" : "#f0f4f7"}}>Acheived</th>
              </React.Fragment>
            ))}
          </tr>
          <tr>
            {tableHeader?.map((date,index) => (
              <React.Fragment key={date}>
                <th style={{backgroundColor: index % 2 === 1 ? "#fafafa" : "#f0f4f7"}}>Shift 1</th>
                <th style={{backgroundColor: index % 2 === 1 ? "#fafafa" : "#f0f4f7"}}>Shift 2</th>
                <th style={{backgroundColor: index % 2 === 1 ? "#fafafa" : "#f0f4f7"}}>Shift 3</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sanden Vikas</td>
            <td>2884-0850V</td>
            <td>800</td>
            <td></td>
            <td>100</td>
            {tableHeader?.map((date,index) => (
              <>
                <td>zone1</td>
                <td>line1</td>
                <td><InputText className="shift-box" placeholder='Shift 1' value={shift1} onChange={(e)=> handlechange(e,date,index)} /></td>
                <td><InputText className="shift-box" placeholder='Shift 2' value={shift2} onChange={(e)=> handlechange(e,date,index)} /></td>
                <td><InputText className="shift-box" placeholder='Shift 3' value={shift3} onChange={(e)=> handlechange(e,date,index)} /></td>
                <td>100</td>
              </>
            ))}
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CalendarTable;
