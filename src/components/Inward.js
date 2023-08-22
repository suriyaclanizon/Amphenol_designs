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
import { Button } from "primereact/button";

const Inward = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState();

    const data = [
        {InwardDate:"10 Jun, 2023",PartNumber: "656159400A", Description: "Cable", UOM:"MTR",Quantity: "10000"},
        {InwardDate:"11 Jun, 2023",PartNumber: "31020311X017", Description: "Grommet", UOM:"MTR",Quantity: "20000" },
        {InwardDate:"12 Jun, 2023",PartNumber: "31020311X017", Description: "Band Cable", UOM:"MTR",Quantity: "50000" }, 
    ];

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(constants.URL.INWARD)
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
    }, []);

  return (
    <div>
       
        
        <div className="grid table-demo">
        <div className="col-12">
                <div className="card leave_table">
                
                    <DataTable className='' value={records}
                         responsiveLayout="scroll">
                        <Column field="createdAt" header="Inward Date" style={{ minWidth: '200px' }} ></Column>
                        <Column field="citemno_id.part_number" header="Part Number" style={{ minWidth: '200px' }}></Column>
                        <Column field="citemno_id.item_description" header="Description" style={{ minWidth: '200px' }} ></Column>
                        <Column field="citemno_id.UOM" header="UOM" style={{ minWidth: '200px' }} ></Column>
                        <Column field="in_ward_quantity" header="Quantity" style={{ minWidth: '200px' }} ></Column>         
                    </DataTable>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}
export default Inward