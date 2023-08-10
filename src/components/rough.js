import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
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
  
  const data = [
    {
      name:"Sanden Vikas", achieved: "", plannermonthdate: "",  partno:"2884-0850V", target: "800", 
      date: [
        {zone: "zone1", line: "line1", date: "01 aug", shift1: "", shift2: "", shift3: "", target: "100"},
        {zone: "", line: "", date: "02 aug", shift1: "", shift2: "", shift3: "", target: ""},
        {zone: "", line: "", date: "03 aug", shift1: "", shift2: "", shift3: "", target: ""},
      ]
    }
  ]


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
      <div className='card w-full overflow-auto h-full'>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Part Number</th>
            <th>Target</th>
            <th>%Achieved</th>
            {tableHeader?.map((date,index) => (
              <React.Fragment key={date}>
                <th style={{backgroundColor: index % 2 === 1 ? "white" : "#f0f4f7"}}>Zone</th>
                <th style={{backgroundColor: index % 2 === 1 ? "white" : "#f0f4f7"}}>Line</th>
                <th style={{backgroundColor: index % 2 === 1 ? "white" : "#f0f4f7",}} colSpan={3}>Target</th>
                <th style={{backgroundColor: index % 2 === 1 ? "white" : "#f0f4f7"}}>{formatDate(date)} Acheived</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
            {data?.map((item,index) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.partno}</td>
            <td>{item.target}</td>
            <td></td>
            {item?.date?.map((items,index) => (
              <>
                <td>{items.zone}</td>
                <td>line1</td>
                <td><InputText className="shift-box" placeholder='Shift 1' value={shift1} onChange={(e)=> handlechange(e,items,index)} /></td>
                <td><InputText className="shift-box" placeholder='Shift 2' value={shift2} onChange={(e)=> handlechange(e,items,index)} /></td>
                <td><InputText className="shift-box" placeholder='Shift 3' value={shift3} onChange={(e)=> handlechange(e,items,index)} /></td>
                <td>100</td>
              </>
            ))}
          </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CalendarTable;


const data = [
  {
    name:"Sanden Vikas", achieved: "", plannermonthdate: "",  partno:"2884-0850V", target: "800", 
    date: [
      {zone: "zone1", line: "line1", date: "01 aug", shift1: "", shift2: "", shift3: "", target: "100"},
      {zone: "", line: "", date: "02 aug", shift1: "", shift2: "", shift3: "", target: ""},
      {zone: "", line: "", date: "03 aug", shift1: "", shift2: "", shift3: "", target: ""},
    ]
  }
]