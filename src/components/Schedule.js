import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useStoreActions, useStoreState } from 'easy-peasy';
import "../assets/css/BOM.css"
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";


const Schedule = () => {
    const [records, setRecords] = useState();
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [value, setValue] = useState('');
    
    const [months, setMonths] = useState();
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ];
    
      const handleOptionChange = (selectedOption) => {
        console.log('Selected Option:', selectedOption);
      };

      const month = [
        { name: "Jan", code: "1" },
        { name: "Feb", code: "2" },
        { name: "March", code: "3" },
        { name: "April", code: "4" },
        { name: "May", code: "5" },
        { name: "June", code: "6" },
        { name: "July", code: "7" },
        { name: "Aug", code: "8" },
        { name: "Sep", code: "9" },
        { name: "Oct", code: "10" },
        { name: "Nov", code: "11" },
        { name: "Dec", code: "12" },
    ];
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const data = [
        
        {CustomerName: "Sanden Vikas", PartNumber: "2884-0850V", LineNumber: "10000",Zone:"Zone -1",Particular:"Target",Jan01:"200",Jan02:"200",Jan03:"200",Jan04:"200",Jan05:"200",Jan06:"200",Jan07:"200",Jan08:"200"},
        {CustomerName: "Sanden Vikas", PartNumber: "Grommet",LineNumber: "20000",Zone:"Zone -1" ,Particular:"Target",Jan01:"200",Jan02:"200",Jan03:"200",Jan04:"200",Jan05:"200",Jan06:"200",Jan07:"200",Jan08:"200"},
        {CustomerName: "Tata Ficosa", PartNumber: "Band Cable",LineNumber: "50000",Zone:"Zone -1",Particular:"Target",Jan01:"200",Jan02:"200",Jan03:"200",Jan04:"200",Jan05:"200",Jan06:"200",Jan07:"200",Jan08:"200" },
        {CustomerName: "Joysonsafety", PartNumber: "Grommet",LineNumber :"40000",Zone:"Zone -1" ,Particular:"Target",Jan01:"200",Jan02:"200",Jan03:"200",Jan04:"200",Jan05:"200",Jan06:"200",Jan07:"200",Jan08:"200"},
        {CustomerName: "AUTOLIV INDIA PVT LTD", PartNumber: "Grommet",LineNumber :"40000",Zone:"Zone -1",Particular:"Target",Jan01:"200",Jan02:"200",Jan03:"200",Jan04:"200",Jan05:"200",Jan06:"200",Jan07:"200",Jan08:"200" },
        {CustomerName: "Minda Corporation", PartNumber: "Grommet",LineNumber :"40000",Zone:"Zone -2",Particular:"Target",Jan01:"200",Jan02:"200",Jan03:"200",Jan04:"200",Jan05:"200",Jan06:"200",Jan07:"200",Jan08:"200" },
        {CustomerName: "Rane TRW Steering  Systems Ltd", PartNumber: "Grommet",LineNumber :"40000",Zone:"Zone -2" ,Particular:"Target",Jan01:"200",Jan02:"200",Jan03:"200",Jan04:"200",Jan05:"200",Jan06:"200",Jan07:"200",Jan08:"200"},
        {CustomerName: "MAHLEV", PartNumber: "Grommet",LineNumber :"40000",Zone:"Zone -2" ,Particular:"Target",Jan01:"200",Jan02:"200",Jan03:"200",Jan04:"200",Jan05:"200",Jan06:"200",Jan07:"200",Jan08:"200"},
       
      ];

    // const iconTemplate = () => (
    //     // <i className={` pi pi-trash`} style={{ fontSize: '1.5rem', color: 'green' }}></i>
    //   );

    useEffect(() => {
        setRecords(data);
    }, []);
  return (
    <div>
        <div className="card p-fluid">
                        <div className="title1 mt-2 flex justify-content-between">
                            <h3 className="leave_title pt-2">Schedule</h3>
                            <div className="flex">
                            <Dropdown value={months} onChange={(e) => setMonths(e.target.value)} options={month} optionLabel="name" placeholder="Month" className="dropMonth" />
                                <Button className="Upbtn" label="Upload" onClick={() => setVisible(true)} />
                                
                                </div>
                                </div>
                                </div>
        <div className="grid table-demo">
        <div className="col-12">
                <div className="card leave_table">
                <div className="sch_content">
                <table className="sch_table">
                <tr>
                        <th>Customer Name </th>
                        <th>Part Number </th>
                        <th>Line Number </th>
                        <th>Zone </th>
                        <th>Particular </th>
                        <th> 01Jan </th>
                        <th> 02 Jan  </th>
                        <th> 03 Jan  </th>
                        <th> 04 Jan  </th>
                        <th> 05 Jan  </th>
                        <th> 06 Jan  </th>
                        <th> 07 Jan  </th>
                        <th> 08 Jan  </th>
                
                      </tr>
                      <tr>
    <td>Sanden Vikas</td>
    <td >6325598625</td>
    <td>553325698</td>
    <td rowspan="3" >Zone-1</td>
    <td className="sch_part1">Target</td>
<td>350</td>
<td>400</td>
<td>350</td>
<td>450</td>
<td>450</td>
<td>550</td>
<td>650</td>

<td>250</td>
<td>350</td>
  </tr>               
<tr>
  <td></td>
    <td></td>
    <td></td>
<td className="sch_part2">Avalabilty</td>
<td>300</td>
<td>350</td>
<td>450</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>

   </tr>
   <tr>
  <td></td>
   <td></td>
   <td></td>
<td className="sch_part3">Achiecved</td>
  </tr>
  <tr>
    <td>Sanden Vikas</td>
    <td >6325598625</td>
    <td>553325698</td>
    <td rowspan="3" >Zone-1</td>
    <td className="sch_part1">Target</td>
<td>350</td>
<td>400</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>

  </tr>               
<tr>
  <td></td>
    <td></td>
    <td></td>
<td className="sch_part2">Avalabilty</td>
<td>300</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
   </tr>
   <tr>
  <td></td>
   <td></td>
   <td></td>
<td className="sch_part3">Achiecved</td>
<td>350</td>
<td>450</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
  </tr>
  <tr>
    <td>Tata Ficosa</td>
    <td >6325598625</td>
    <td>553325698</td>
    <td rowspan="3" >Zone-1</td>
    <td className="sch_part1">Target</td>
<td>350</td>
<td>400</td>
<td>350</td>
<td>350</td>
<td>350</td><td>350</td>
<td>350</td>
<td>350</td>
<td>450</td>
  </tr>               
<tr>
  <td></td>
    <td></td>
    <td></td>
<td className="sch_part2">Avalabilty</td>
<td>300</td>
<td>350</td>
<td>450</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>450</td>
   </tr>
   <tr>
  <td></td>
   <td></td>
   <td></td>
<td className="sch_part3">Achiecved</td>
  </tr>
  <tr>
    <td>AUTOLIV INDIA PVT LTD</td>
    <td >6325598625</td>
    <td>553325698</td>
    <td rowspan="3" >Zone-1</td>
    <td className="sch_part1">Target</td>
<td>350</td>
<td>400</td>
<td>250</td>
<td>400</td>
<td>350</td>
<td>450</td>
<td>450</td>
<td>350</td>
<td>450</td>
  </tr>               
<tr>
  <td></td>
    <td></td>
    <td></td>
<td className="sch_part2">Avalabilty</td>
<td>300</td>
<td>400</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>450</td>
<td>450</td>
<td>450</td>
   </tr>
   <tr>
  <td></td>
   <td></td>
   <td></td>
<td className="sch_part3">Achiecved</td>
<td>350</td>
<td>450</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
<td>350</td>
  </tr>
  
  
</table>    
</div>              
</div>
</div>
</div>
</div>
  )
}
export default Schedule