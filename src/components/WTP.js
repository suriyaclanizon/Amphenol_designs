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
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState();

    const data = [    
        {PartNumber: "656159400A", Description: "Cable", Quantity: "10000"},
        {PartNumber: "31020311X017", Description: "Grommet",Quantity: "20000" },  
    ];

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(constants.URL.WIP)
            .then((resp) => {
                // var data = resp?.data?.results?.filter((item)=>{
                //     return item?.wip_quantity
                // })
                // console.log(resp?.data?.results);
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
                        <Column field="citemno_id.part_number" header="Part Number" style={{ minWidth: '200px' }}></Column>
                        <Column field="store_citemno" header="Citemno" style={{ minWidth: '200px' }} ></Column>
                        <Column field="wip_quantity" header="Quantity" style={{ minWidth: '200px' }} ></Column>
                        
                    </DataTable>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}
export default WTP