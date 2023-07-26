import React ,{ useRef } from "react";
import { Button } from "primereact/button";
import "../assets/css/BOM.css"
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import BOM_Master from "./BOM_Master";
import Select from 'react-select';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

const BOM_Dialog = () => {
    const [visible, setVisible] = useState(false);
    
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ];
    
      const handleOptionChange = (selectedOption) => {
        console.log('Selected Option:', selectedOption);
      };
      const toast = useRef(null);var modal = document.getElementById("myModal");

  
    
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
  
    const handleOutsideClick = (event) => {
      if (event.target === modalRef.current) {
        closeModal();
      }
    };
  
    const modalRef = React.createRef();    
    


    
    return (
        <div>
            <Toast ref={toast} />
            <ConfirmDialog />
            
                    <div className="card p-fluid">
                        <div className="title1 mt-2 flex justify-content-between">
                            <h3 className="leave_title pt-2">BOM Master</h3>
                            <div className="flex">
                                <Button className="btn1" label="Edit" onClick={() => setVisible(true)} />
                            </div>
                        </div>
                    </div>
                        <BOM_Master />

<Dialog header="Edit" visible={visible} style={{ width: "30vw" }} onHide={() => setVisible(false)}>
    <div className="formgrid grid">
        
        <div className="field col-6 ">
            <label htmlFor="name2">Part Number</label>
            </div>
            <div className="field col-6 ">
            <Select options={options} onChange={handleOptionChange} className="w-full " />

            {/* <InputText className="w-full " /> */}
            </div>
        
        
        <div className="field col-6 ">
            <label htmlFor="name2">Quantity Par Per</label>
            </div>
            <div className="field col-6 ">
            <InputText className="w-full " />
            </div>
        
    </div>

    
        
    
    <div className="dialog-btn">
    <button onClick={openModal} className="save_dialog_btn " style={{ minWidth: '3rem' }}>Save</button>


{modalVisible && (
  <div className="modal" ref={modalRef}>
    <div className="modal-content">
    
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <p className="Dialog_para">Are you sure edit this field?</p>
      <div className="Dia_btn">
    <button className="Btn1">Yes</button>
    <button className="Btn1">No</button>
  </div>
    </div>
  </div>
)}

   
    </div>
</Dialog>
                </div>
          
    );
};

export default BOM_Dialog;
