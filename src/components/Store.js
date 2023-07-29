import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "../assets/css/BOM.css"

const Store = () => {
    const [records, setRecords] = useState();

    const data = [
        {PartNumber: "656159400A", Description: "Cable", Quantity: "10000"},
        {PartNumber: "31020311X017", Description: "Grommet",Quantity: "20000" },
        {PartNumber: "31020311X017", Description: "Band Cable",Quantity: "50000" },
        {PartNumber: "656159400A", Description: "Grommet",Quantity :"40000" },
    ];

    useEffect(() => {
        setRecords(data);
    }, []);

  return (
    <div>
        <div className="grid table-demo">
        <div className="col-12">
                <div className="card leave_table">
                    <DataTable className='' value={records} responsiveLayout="scroll">
                        <Column field="PartNumber" header="Part Number" style={{ minWidth: '200px' }}></Column>
                        <Column field="Description" header="Description" style={{ minWidth: '200px' }} ></Column>
                        <Column field="Quantity" header="Quantity" style={{ minWidth: '200px' }} ></Column> 
                    </DataTable>
                </div>
            </div>
        </div>
      
      
    </div>
  )
}
export default Store