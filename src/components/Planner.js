import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "../assets/css/BOM.css"
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import constants from '../constants/constants';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const Planner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState();
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);
    const [partNo, setPartNo] = useState(null);
    const [count, setCount] = useState('');
    const toast = useRef(null);
    const cities = ["31020311X017", "656159400A"
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
        getPlanner()
    }, []);

    const getPlanner = () => {
        setIsLoading(true);
        axios
            .get(constants.URL.PLANNER)
            .then((resp) => {
                // var data = resp?.data?.results?.filter((item)=>{
                //     return item.in_ward_quantity
                // })
                // console.log(data);
                setRecords(resp?.data?.results);
            })
            .catch((e) => console.error(e))
            .finally(() => {
                setIsLoading(false);
            });
    }

    const addPlanner = () => {
        const payload = {
            part_number: partNo,
            count: count,
            planner_date: date,
        }
        setIsLoading(true);
        axios.post(constants.URL.PLANNER, payload)
            .then((resp) => {
                // console.log(resp.data.results);
                toast.current.show({ severity: "success", summary: "Success"});
                getPlanner()
            }).catch((e) => {
                toast.current.show({ severity: "error", summary: "Failure", detail: e?.response?.data?.message });
                console.error(e);
            }).finally(() => {
                setIsLoading(false);
            })
    }

    // const handleUpdate = () =>{
    //     const payload = {
    //         part_number: partNo || selectedRow?.part_number,
    //         qty_par_per: quantity || selectedRow?.qty_par_per
    //     }
    //     setIsLoading(true);
    //     axios.patch(constants.URL.BOM_MASTER+"/"+selectedRow?._id, payload)
    //         .then((resp) => {
    //             // console.log(resp.data.results);
    //             toastBC.current.clear();
    //             show();
    //             getBomMasterData()
    //         }).catch((e) => {
    //             toast.current.show({ severity: "error", summary: "Failure", detail: e?.response?.data?.message });
    //             console.error(e);
    //         }).finally(() => {
    //             setIsLoading(false);
    //             setVisible(false)
    //             setSelectedRow(null)
    //         })
    // }


    return (
        <div>
        <Toast ref={toast} />
            <div className="card p-fluid">
                <div className="title1 flex justify-content-between">
                    <h3 className="pt-2">Add Plan</h3>
                    <div className="flex">
                        <div>
                        <Button className="btn" label="Upload" onClick={() => setVisible(true)} />
                        </div>
                        <Button className="btn ml-3" label="Edit" onClick={() => setVisible(true)} />
                    </div>
                </div>
            </div>
            <div className="grid table-demo">
                <div className="col-12">
                    <div className="card leave_table">
                        <DataTable className='' value={records}
                            responsiveLayout="scroll">
                            <Column field="createdAt" header="Date" style={{ minWidth: '200px' }}></Column>
                            <Column field="part_number" header="Part Number" style={{ minWidth: '200px' }} ></Column>
                            <Column field="customer_id.customer_name" header="Client Name" style={{ minWidth: '200px' }} ></Column>
                            <Column field="count" header="Counts" style={{ minWidth: '200px' }} ></Column>
                            <Column body={iconTemplate} style={{ textAlign: 'center' }}></Column>
                        </DataTable>
                        <div className="content my-3">
                            <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon style={{ minWidth: '25%' }} />
                            <Dropdown value={partNo} onChange={(e) => setPartNo(e.value)} options={cities}
                                placeholder="" className="w-full md:w-14rem" style={{ minWidth: '25%' }}  />
                            <Dropdown value={count} onChange={(e) => setCount(e.value)} options={cities} optionLabel="name"
                                placeholder="" className="w-full md:w-14rem" style={{ minWidth: '25%', visibility: "hidden" }}  />
                            <InputText value={count} onChange={(e) => setCount(e.target.value)} style={{ minWidth: '25%' }}  />

                        </div>
                        <div className="Savebtn">
                            <Button label="Save" onClick={addPlanner} /></div>
                    </div>


                </div>
            </div>


        </div>
    )
}
export default Planner