import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "../assets/css/BOM.css"
import axios from 'axios';
import constants from '../constants/constants';

const Store = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [records, setRecords] = useState();

    const data = [
        {PartNumber: "656159400A", Description: "Cable", Quantity: "10000"},
        {PartNumber: "31020311X017", Description: "Grommet",Quantity: "20000" },
        {PartNumber: "31020311X017", Description: "Band Cable",Quantity: "50000" },
        {PartNumber: "656159400A", Description: "Grommet",Quantity :"40000" },
    ];

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(constants.URL.STORE)
            .then((resp) => {
                // const uniqueDescription = [];
                // resp?.data?.results?.map((item) => {
                //     var findItem = uniqueDescription.find((x) => x.description === item.description);
                //     if (!findItem) uniqueDescription.push(item);
                // });
                // console.log(uniqueDescription);
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
                    <DataTable className='' value={records} responsiveLayout="scroll">
                        <Column field="part_number" header="Part Number" style={{ minWidth: '200px' }}></Column>
                        <Column field="item_description" header="Description" style={{ minWidth: '200px' }} ></Column>
                        <Column field="store_quantity" header="Quantity" style={{ minWidth: '200px' }} ></Column> 
                    </DataTable>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}
export default Store