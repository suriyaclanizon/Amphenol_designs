import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import constants from '../constants/constants';
import { Toast } from 'primereact/toast';

const CalendarTable = () => {
  const toast = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState();
  const [tableHeader, setTableHeader] = useState([]);
  const [todayDate, setTodayDate] = useState(null);
  const [shift1, setShift1] = useState("");
  const [shift2, setShift2] = useState("");
  const [shift3, setShift3] = useState("");

  useEffect(() => {
    // Get the current date and month
    getSchedule()
    const currentDate = new Date();
    handleDateChange(currentDate)
  }, []);

  useEffect(() => {
    if(shift1 && shift2 && shift3){ 
      const payload = {
        part_number:"656159400A",
        shift_1 : "4",
        shift_2 : "5",
        shift_3 : "6",
        target: "2",
        target_achieved: "2",
        perday_achieved: "2"
      }
      // setIsLoading(true);
      // axios
      //     .post(constants.URL.SCHEDULE, payload)
      //     .then((resp) => {
      //         console.log(resp);
      //         // setRecords(resp?.data?.results);
      //     })
      //     .catch((e) => console.error(e))
      //     .finally(() => {
      //         setIsLoading(false);
      //         setShift1("")
      //         setShift2("")
      //         setShift3("")
      //     });
    }
  }, [shift1,shift2,shift3]);

const getSchedule = () => {
    setIsLoading(true);
    axios
        .get(constants.URL.SCHEDULE)
        .then((resp) => {
            // console.log(resp?.data?.results);
            setRecords(resp?.data?.results);
        })
        .catch((e) => console.error(e))
        .finally(() => {
            setIsLoading(false);
        });
}

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

  const [shift1Values, setShift1Values] = useState([]);
  const [shift2Values, setShift2Values] = useState([]);
  const [shift3Values, setShift3Values] = useState([]);

  const handleShift1change = (e, rowIndex, dateIndex,capacity)=>{
    // console.log(e.target.value,date,index,capacity);
    const newValue = e.target.value;
    const shift1Value = parseFloat(newValue); // Convert the shift1 value to a number for comparison
    if (shift1Value > capacity) {
        setShift1("")
        toast.current.show({ severity: "error", summary: "Failure", detail: "Entered value exceeds over shift capacity" });
    }else { 
      setShift1(newValue);
      setShift1Values((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[rowIndex] = {
        ...updatedValues[rowIndex],
        [dateIndex]: newValue,
      };
      return updatedValues;
    });
    }
  }
  
  const handleShift2change = (e, rowIndex, dateIndex,capacity)=>{
    // console.log(e.target.value,date,index,capacity);
    const newValue = e.target.value;
    const shift2Value = parseFloat(newValue); // Convert the shift1 value to a number for comparison
    if (shift2Value > capacity) {
        setShift2("")
        toast.current.show({ severity: "error", summary: "Failure", detail: "Entered value exceeds over shift capacity" });
    }else { 
      setShift2(newValue);
      setShift2Values((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[rowIndex] = {
        ...updatedValues[rowIndex],
        [dateIndex]: newValue,
      };
      return updatedValues;
    });
    }
  }
  const handleShift3change = (e, rowIndex, dateIndex,capacity)=>{
    // console.log(e.target.value,date,index,capacity);
    const newValue = e.target.value;
    const shift3Value = parseFloat(newValue); // Convert the shift1 value to a number for comparison
    if (shift3Value > capacity) {
        setShift3("")
        toast.current.show({ severity: "error", summary: "Failure", detail: "Entered value exceeds over shift capacity" });
    }else { 
      setShift3(newValue);
      setShift3Values((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[rowIndex] = {
        ...updatedValues[rowIndex],
        [dateIndex]: newValue,
      };
      return updatedValues;
    });
    }
  }

  return (
    <div style={{ height: "calc(100vh - 15rem)" }}>
    <Toast ref={toast} />
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
          {records?.map((item, rowIndex)=>{
            var line = item.zoneLineDetail_id.line;
            var zone = item.zoneLineDetail_id.zone;
            var capacity = item.zoneLineDetail_id.shift_capacity;
            return(
              <tr key={rowIndex}>
            <td>{item.customer_id.customer_name}</td>
            <td>{item.part_number}</td>
            <td>{item.target}</td>
            <td>{item.target_achieved}</td>
            <td>{item.stock}</td>
            {/* <td>{item.zoneLineDetail_id.line}</td>
            <td>{item.zoneLineDetail_id.zone}</td> */}
            {tableHeader?.map((date,dateIndex) => {
                const shift1Value =
                  (shift1Values[rowIndex] && shift1Values[rowIndex][dateIndex]) || '';
                  const shift2Value =
                    (shift2Values[rowIndex] && shift2Values[rowIndex][dateIndex]) || '';
                    const shift3Value =
                      (shift3Values[rowIndex] && shift3Values[rowIndex][dateIndex]) || '';
                return (
                  <React.Fragment key={dateIndex}>
                <td>{zone}</td>
                <td>{line}</td>
                <td><InputText className="shift-box" placeholder='Shift 1' value={shift1Value} onChange={(e)=> handleShift1change(e,rowIndex, dateIndex,capacity)} /></td>
                <td><InputText className="shift-box" placeholder='Shift 2' value={shift2Value} onChange={(e)=> handleShift2change(e,rowIndex, dateIndex,capacity)} /></td>
                <td><InputText className="shift-box" placeholder='Shift 3' value={shift3Value} onChange={(e)=> handleShift3change(e,rowIndex, dateIndex,capacity)} /></td>
                <td>100</td>
              </React.Fragment>
            )})}
          </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CalendarTable;



// zone-line detail shift
