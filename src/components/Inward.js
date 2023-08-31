import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import constants from '../constants/constants';
import "../assets/css/BOM.css"
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

const Inward = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState();
    const [visible, setVisible] = useState(false);
    const [citemno, setCitemno] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const toast = useRef(null);


    useEffect(() => {
        getInwardData()
    }, []);

    const getInwardData = () => {
        setIsLoading(true);
        axios
            .get(constants.URL.INWARD)
            .then((resp) => {
                setRecords(resp?.data?.results);
            })
            .catch((e) => console.error(e))
            .finally(() => {
                setIsLoading(false);
            });
    }
    
    const handleAdd = () =>{
        const payload = {
            store_citemno: citemno,
            in_ward_quantity: quantity
        }
        setIsLoading(true);
        axios.post(constants.URL.INWARD, payload)
            .then((resp) => {
                // console.log(resp.data.results);
                toast.current.show({ severity: "success", summary: "Success", detail: "Added Successfully" });
                getInwardData()
            }).catch((e) => {
                toast.current.show({ severity: "error", summary: "Failure", detail: e?.response?.data?.message });
                console.error(e);
            }).finally(() => {
                setIsLoading(false);
                setVisible(false)
                setCitemno(null)
                setQuantity(null)
            })
    }

    const formatDate = (value) => {
        var date = new Date(value);
        return date?.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.createdAt);
    }

  return (
    <div>
        <div className="grid table-demo">
    <Toast ref={toast} />
        <div className="col-12">
                <div className="card leave_table">
                    <Button className="btn" label="Add" onClick={() => setVisible(true)} />
                
                    <DataTable className='' value={records}
                         responsiveLayout="scroll">
                        <Column field="createdAt" header="Inward Date" body={dateBodyTemplate} style={{ minWidth: '200px' }} ></Column>
                        <Column field="citemno_id.part_number" header="Part Number" style={{ minWidth: '200px' }}></Column>
                        <Column field="citemno_id.item_description" header="Description" style={{ minWidth: '200px' }} ></Column>
                        <Column field="citemno_id.UOM" header="UOM" style={{ minWidth: '200px' }} ></Column>
                        <Column field="in_ward_quantity" header="Quantity" style={{ minWidth: '200px' }} ></Column>         
                    </DataTable>
            <Dialog header="Inward Add" visible={visible} style={{ width: "30vw" }} onHide={() => setVisible(false)}>
                <div className="formgrid grid">
                    <div className="field col-6 ">
                        <label htmlFor="name2">Citemno</label>
                    </div>
                    <div className="field col-6 ">
                        <InputText value={citemno} onChange={(e)=> setCitemno(e.target.value)} className="w-full " />
                    </div>

                    <div className="field col-6 ">
                        <label htmlFor="name2">Quantity</label>
                    </div>
                    <div className="field col-6 ">
                        <InputText className="w-full" value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
                    </div>
                </div>

                <div className="dialog-btn">
                    <button onClick={handleAdd} className="save_dialog_btn " style={{ minWidth: '3rem' }}>Save</button>
                </div>
            </Dialog>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}
export default Inward