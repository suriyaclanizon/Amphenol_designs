import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "../assets/css/BOM.css"
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";

const Planner = () => {
    const [records, setRecords] = useState();
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [value, setValue] = useState('');
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const data = [

        { Date: "09 Jun, 2023", PartNumber: "Cable", ClientName: "10000", Counts: "200" },
        { Date: "09 Jun, 2023", PartNumber: "Grommet", ClientName: "20000", Counts: "500" },
        { Date: "09 Jun, 2023", PartNumber: "Band Cable", ClientName: "50000", Counts: "300" },
        { Date: "09 Jun, 2023", PartNumber: "Grommet", ClientName: "40000", Counts: "400" },
        { Date: "09 Jun, 2023", PartNumber: "Grommet", ClientName: "40000", Counts: "400" },
        { Date: "09 Jun, 2023", PartNumber: "Grommet", ClientName: "40000", Counts: "400" },
        { Date: "09 Jun, 2023", PartNumber: "Grommet", ClientName: "40000", Counts: "400" },

    ];
    const iconTemplate = () => (
        <i className={` pi pi-trash`} style={{ fontSize: '1.5rem', color: 'green' }}></i>
    );

    useEffect(() => {
        setRecords(data);
    }, []);
    return (
        <div>
            <div className="card p-fluid">
                <div className="title1 flex justify-content-between">
                    <h3 className="pt-2">Add Plan</h3>
                    <div className="flex">
                        
                    <Button className="btn" label="Upload"  onClick={() => setVisible(true)} />
                        
                        <Button className="btn ml-3" label="Add" onClick={() => setVisible(true)} />
                        
                    </div>
                </div>
            </div>
            <div className="grid table-demo">
                <div className="col-12">
                    <div className="card leave_table">
                        <DataTable className='' value={records}
                            responsiveLayout="scroll">
                            <Column field="Date" header="Date" style={{ minWidth: '200px' }}></Column>
                            <Column field="PartNumber" header="Part Number" style={{ minWidth: '200px' }} ></Column>
                            <Column field="ClientName" header="Client Name" style={{ minWidth: '200px' }} ></Column>
                            <Column field="Counts" header="Counts" style={{ minWidth: '200px' }} ></Column>
                            <Column body={iconTemplate} style={{ textAlign: 'center' }}></Column>
                        </DataTable>
                        <div className=" content">
                            <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="" className="w-full md:w-14rem" />
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="" className="w-full md:w-14rem" />
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} />

                        </div>
                        <div className="Savebtn">
                            <Button label="Save" onClick={() => setVisible(true)} /></div>
                    </div>


                </div>
            </div>


        </div>
    )
}
export default Planner