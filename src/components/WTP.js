import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import constants from '../constants/constants';
import { Dialog } from "primereact/dialog";
import "../assets/css/BOM.css"
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const WTP = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [records, setRecords] = useState();
    const [citemno, setCitemno] = useState(null);
    const [quantity, setQuantity] = useState(null);

    const toast = useRef(null);

    useEffect(() => {
        getWIP()
    }, []);

    const getWIP = () => {
        setIsLoading(true);
        axios
            .get(constants.URL.WIP)
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
            wip_quantity: quantity
        }
        setIsLoading(true);
        axios.post(constants.URL.WIP, payload)
            .then((resp) => {
                // console.log(resp.data.results);
                toast.current.show({ severity: "success", summary: "Success", detail: "Added Successfully" });
                getWIP()
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

  return (
    <div>
    <Toast ref={toast} />
        <div className="grid table-demo">
        <div className="col-12">
                <div className="card leave_table relative">
                    <div className='IS-WIP-add-btn'>
                        <Button className="btn" label="Add" onClick={() => setVisible(true)} />
                    </div>
                    <DataTable className='' value={records}
                         responsiveLayout="scroll">
                        <Column field="citemno_id.part_number" header="Part Number" style={{ minWidth: '200px' }}></Column>
                        <Column field="store_citemno" header="Citemno" style={{ minWidth: '200px' }} ></Column>
                        <Column field="wip_quantity" header="Quantity" style={{ minWidth: '200px' }} ></Column>
                        
                    </DataTable>
            <Dialog header="WTP Add" visible={visible} style={{ width: "30vw" }} onHide={() => setVisible(false)}>
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
export default WTP