import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import constants from '../constants/constants';
import axios from 'axios';

const BOM_Master = () => {
    const [isLoading, setIsLoading] = useState(false);
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
    }, []);

    return (
        <div className="grid table-demo m-0">
        <div className="card w-full">
            <div className="BOM-card">
            <DataTable value={records} >
                <Column field="part_number" header="Part Number"></Column>
                <Column field="citemno" header="Citemno" ></Column>
                <Column field="item_description" header="Item Description" ></Column>
                <Column field="qty_par_per" header="Quantity Par Per" ></Column>
            </DataTable>
            </div>
        </div>
        </div>
    );
}
export default BOM_Master  