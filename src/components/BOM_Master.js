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

const BOM_Master = () => {
    const [records, setRecords] = useState();

    const data = [
        {PartNumber: "656159400A", Citemno: "ST 731079-3",ItemDescription :"Terminal Female 187 Series",Quantity:"1" },
        {PartNumber: "656159400A", Citemno: "ACCBFLA1C0P3BLU", ItemDescription: "Cable 0.35Sq. mm FLRY-A as per",Quantity:"0.253"},
        {PartNumber: "31020311X017", Citemno: "A60901770",ItemDescription: "Connector 3Pole Female Natural" ,Quantity:"1"},
        {PartNumber: "31020311X017", Citemno: "A60901770",ItemDescription: "0.35Sq. MM FLRY-B Cable Grey" ,Quantity:"0.541"},
        {PartNumber: "27-71-366-1-0", Citemno: "ACPLS00005",ItemDescription: "Interface cap" ,Quantity:"1"},
        {PartNumber: "27-71-366-1-0", Citemno: "7-1452665-1-AS",ItemDescription: "MCON 1.2 LL REC SWS SN" ,Quantity:"1"},

        
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
                        <Column field="Citemno" header="Citemno" style={{ minWidth: '200px' }} ></Column>
                        <Column field="ItemDescription" header="Item Description" style={{ minWidth: '200px' }} ></Column>
                        <Column field="Quantity " header="Quantity mmm" style={{ minWidth: '200px' }} ></Column>
                    </DataTable>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}
export default BOM_Master