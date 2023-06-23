import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from 'axios';
import constants from '../constants/constants';
import back from "../images/next-forward-right.png"
import traineePhoto from "../images/user-img.png"
import { Dialog } from "primereact/dialog";
import "../assets/css/BOM.css"

const WTP = () => {
    const [records, setRecords] = useState();

    const data = [
        
        {PartNumber: "656159400A", Description: "Cable", Quantity: "10000"},
        {PartNumber: "31020311X017", Description: "Grommet",Quantity: "20000" },
        
        
    ];

    useEffect(() => {
        setRecords(data);
    }, []);
  return (
    <div>
        <div className="grid table-demo">
        <div className="col-12">
                <div className="card leave_table">
                    <DataTable className='' value={records}
                         responsiveLayout="scroll">
                        <Column field="PartNumber" header="Part Number" style={{ minWidth: '200px' }}></Column>
                        <Column field="Description" header="Citemno" style={{ minWidth: '200px' }} ></Column>
                        <Column field="Quantity" header="Quantity" style={{ minWidth: '200px' }} ></Column>
                        
                    </DataTable>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}
export default WTP