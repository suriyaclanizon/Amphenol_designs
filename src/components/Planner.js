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
    const [date, setDate] = useState(null);
    const [partNo, setPartNo] = useState(null);
    const [count, setCount] = useState();
    const [selectedRow, setSelectedRow] = useState(null);
    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = (submit) => {
        console.log(submit);
        toastBC.current.clear();
        submit && show();
    };
    
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Deleted, Successfully' });
    };

    const cities = ["31020311X017", "656159400A"
    ];

    const iconTemplate = (rowData) => (
        <i className="pi pi-trash" style={{ fontSize: '1.5rem', color: 'green' }} onClick={()=> confirm(rowData)} ></i>
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
console.log(selectedRow);
    const addPlanner = () => {
        if(!selectedRow){
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
                setSelectedRow(null)
                setPartNo()
                setCount()
                setDate()
            })
        } else {
            const payload = {
                part_number: partNo,
                count: count,
                planner_date: date,
            }
            console.log(payload);
            setIsLoading(true);
            axios.patch(constants.URL.PLANNER+"/"+selectedRow?._id, payload)
                .then((resp) => {
                    // console.log(resp.data.results);
                    getPlanner()
                }).catch((e) => {
                    toast.current.show({ severity: "error", summary: "Failure", detail: e?.response?.data?.message });
                    console.error(e);
                }).finally(() => {
                    setIsLoading(false);
                    setSelectedRow(null)
                    setPartNo()
                    setCount()
                    setDate()
                })

        }
    }

    const handleUpdate = () =>{
        setCount(selectedRow?.count)
        setPartNo(selectedRow?.part_number)
        setDate(selectedRow?.createdAt)
    }

    const handleDelete = () =>{
        setIsLoading(true);
        axios.delete(constants.URL.PLANNER+"/"+selectedRow?._id)
            .then((resp) => {
                // console.log(resp.data.results);
                toastBC.current.clear();
                show();
                getPlanner()
            }).catch((e) => {
                toast.current.show({ severity: "error", summary: "Failure", detail: e?.response?.data?.message });
                console.error(e);
            }).finally(() => {
                setIsLoading(false);
                setSelectedRow(null)
            })
    }

    const formatDate = (value) => {
        let date = new Date(value)
        return date?.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData?.createdAt);
    };

    const footerDateTemplate = () => {
        return <Calendar value={date} onChange={(e) => setDate(e.value)} />
    };

    const footerPartNoTemplate = () => {
        return <Dropdown value={partNo} onChange={(e) => setPartNo(e.value)} options={cities} placeholder="" className="w-full md:w-14rem"  />
    };

    const footerCountTemplate = () => {
        return <InputText value={count} onChange={(e) => setCount(e.target.value)}  />
    };

    const confirm = () => {
        toastBC.current.show({
            severity: 'warn',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column md:flex-row align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <div className="font-bold text-xl my-3">Are you sure Delete this row?</div>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={handleDelete} type="button" label="Yes" className="p-button-warning w-6rem ml-2" />
                        <Button onClick={(e) => clear(false)} type="button" label="No" className="p-button-outlined p-button-warning w-6rem ml-2" />
                    </div>
                </div>
            )
        });
    };

    return (
        <div>
        <Toast ref={toast} />
            <Toast ref={toastBC} position="top-center" className='w-auto' />
            <div className="card p-fluid">
                <div className="flex justify-content-between align-items-center">
                    <h3 className="mb-0">Add Plan</h3>
                    <div className="flex">
                        <div>
                        <Button className="btn" label="Upload" />
                        </div>
                        <Button className="btn ml-3" label="Edit" disabled={!selectedRow} onClick={handleUpdate} />
                    </div>
                </div>
            </div>
            <div className="grid table-demo">
                <div className="col-12">
                    <div className="card leave_table">
                        <DataTable className='' value={records} selectionMode="single" selection={selectedRow} onSelectionChange={(e) => setSelectedRow(e.value)} responsiveLayout="scroll">
                            <Column field="createdAt" header="Date" footer={footerDateTemplate} style={{ minWidth: '200px' }} body={dateBodyTemplate}></Column>
                            <Column field="part_number" header="Part Number" footer={footerPartNoTemplate} style={{ minWidth: '200px' }} ></Column>
                            <Column field="customer_id.customer_name" header="Client Name" style={{ minWidth: '200px' }} ></Column>
                            <Column field="count" header="Counts" footer={footerCountTemplate} style={{ minWidth: '200px' }} ></Column>
                            <Column body={iconTemplate} style={{ textAlign: 'center' }}></Column>
                        </DataTable>
                        <div className="Savebtn mt-3">
                            <Button label="Save" onClick={addPlanner} /></div>
                    </div>


                </div>
            </div>


        </div>
    )
}
export default Planner