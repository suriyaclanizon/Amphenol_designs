import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import constants from '../constants/constants';
import axios from 'axios';
import { Button } from "primereact/button";
import "../assets/css/BOM.css"
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';

const BOM_Master = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState();
    const [selectedRow, setSelectedRow] = useState(null);
    const [partNo, setPartNo] = useState(null);
    const [quantity, setQuantity] = useState(null);

    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = (submit) => {
        console.log(submit);
        toastBC.current.clear();
        submit && show();
    };

    const handleUpdate = () =>{
        const payload = {
            part_number: partNo || selectedRow?.part_number,
            qty_par_per: quantity || selectedRow?.qty_par_per
        }
        setIsLoading(true);
        axios.patch(constants.URL.BOM_MASTER+"/"+selectedRow?._id, payload)
            .then((resp) => {
                // console.log(resp.data.results);
                toastBC.current.clear();
                show();
                getBomMasterData()
            }).catch((e) => {
                toast.current.show({ severity: "error", summary: "Failure", detail: e?.response?.data?.message });
                console.error(e);
            }).finally(() => {
                setIsLoading(false);
                setVisible(false)
                setSelectedRow(null)
            })
    }

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Updated, Successfully' });
    };

    const confirm = () => {
        // console.log(partNo, quantity, selectedRow);
        toastBC.current.show({
            severity: 'warn',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column md:flex-row align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <div className="font-bold text-xl my-3">Are you sure edit this field?</div>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={handleUpdate} type="button" label="Yes" className="p-button-warning w-6rem ml-2" />
                        <Button onClick={(e) => clear(false)} type="button" label="No" className="p-button-outlined p-button-warning w-6rem ml-2" />
                    </div>
                </div>
            )
        });
    };

    const data = [
        { PartNumber: "656159400A", Citemno: "ST 731079-3", ItemDescription: "Terminal Female 187 Series", Quantity: "1" },
        { PartNumber: "656159400A", Citemno: "ACCBFLA1C0P3BLU", ItemDescription: "Cable 0.35Sq. mm FLRY-A as per", Quantity: "0.253" },
        { PartNumber: "31020311X017", Citemno: "A60901770", ItemDescription: "Connector 3Pole Female Natural", Quantity: "1" },
        { PartNumber: "31020311X017", Citemno: "A60901770", ItemDescription: "0.35Sq. MM FLRY-B Cable Grey", Quantity: "0.541" },
        { PartNumber: "27-71-366-1-0", Citemno: "ACPLS00005", ItemDescription: "Interface cap", Quantity: "1" },
        { PartNumber: "27-71-366-1-0", Citemno: "7-1452665-1-AS", ItemDescription: "MCON 1.2 LL REC SWS SN", Quantity: "1" },
    ];

    useEffect(() => {
        getBomMasterData()
    }, []);

    const getBomMasterData = () =>{
        setIsLoading(true);
        axios
            .get(constants.URL.BOM_MASTER)
            .then((resp) => {
                setRecords(resp.data.results);
            })
            .catch((e) => console.error(e))
            .finally(() => {
                setIsLoading(false);
            });
    }

    const [visible, setVisible] = useState(false);

    const options = ['656159400A', '656159400A', '31020311X017'];

    return (
        <div>
            <Toast ref={toast} />
            <Toast ref={toastBC} position="top-center" className='w-auto' />

            <div className="card p-2 px-4 flex justify-content-between align-items-center">
                <h4 className='mb-0 font-bold'>BOM Master</h4>
                <div className="my-1">
                    <Button className="btn" label="Edit" disabled={!selectedRow} onClick={() => setVisible(true)} />
                </div>
            </div>
            <div className="card w-full">
                <div className="BOM-card">
                    <DataTable value={records} selectionMode="single" selection={selectedRow} onSelectionChange={(e) => setSelectedRow(e.value)}>
                        <Column field="part_number" header="Part Number"></Column>
                        <Column field="citemno" header="Citemno" ></Column>
                        <Column field="item_description" header="Item Description" ></Column>
                        <Column field="qty_par_per" header="Quantity Par Per" ></Column>
                    </DataTable>
                </div>
            </div>
            <Dialog header="Edit" visible={visible} style={{ width: "30vw" }} onHide={() => setVisible(false)}>
                <div className="formgrid grid">
                    <div className="field col-6 ">
                        <label htmlFor="name2">Part Number</label>
                    </div>
                    <div className="field col-6 ">
                        <Dropdown options={options} value={partNo} onChange={(e)=> setPartNo(e.value)} className="w-full " />
                    </div>

                    <div className="field col-6 ">
                        <label htmlFor="name2">Quantity Par Per</label>
                    </div>
                    <div className="field col-6 ">
                        <InputText className="w-full" value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
                    </div>
                </div>

                <div className="dialog-btn">
                    <button onClick={confirm} className="save_dialog_btn " style={{ minWidth: '3rem' }}>Save</button>
                </div>
            </Dialog>
        </div>
    );
}
export default BOM_Master  