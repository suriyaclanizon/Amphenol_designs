import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

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
        <div className="grid table-demo m-0">
        <div className="card w-full">
            <div className="BOM-card">
            <DataTable value={records} >
                <Column field="PartNumber" header="Part Number"></Column>
                <Column field="Citemno" header="Citemno" ></Column>
                <Column field="ItemDescription" header="Item Description" ></Column>
                <Column field="Quantity" header="Quantity Par Per" ></Column>
            </DataTable>
            </div>
        </div>
        </div>
    );
}
export default BOM_Master  