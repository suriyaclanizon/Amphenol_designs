import React, { useEffect } from "react";
import { useState } from "react";
import { TabMenu } from 'primereact/tabmenu';
import { Route, useHistory } from "react-router-dom";
import Store from "./Store";
import WTP from "./WTP";
import Inward from "./Inward";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Button } from "primereact/button";

const Master = () => { 
    const history = useHistory();

    // const [activeIndex, setActiveIndex] = useState(0);
    const setActiveIndex = useStoreActions((actions) => actions.tabModel.setActiveIndex);
    const activeIndex = useStoreState((actions) => actions.tabModel.activeIndex);

    // useEffect(() => {
    //     setActiveIndex(0)
    //     history.push('/allTrainee')
    // }, []);


    const items = [
        { label: 'Store' },
        { label: 'WTP' },
        { label: 'Inward' },
        // { label: 'All Trainee', command: () => history.push('/app/allTrainee') },
    ];

    return (
        <>
         {/* <div className="card">
        <Button className="btn" label="Edit"  /> */}
       
            <div className="Trainee-wrapper lg:mt-4">
                <div className="flex justify-content-between card">
                    
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                        <Button className="btn" label="Add" />
                </div>
                {/* <Route exact path="/app/allTrainee" component={AllTrainee}></Route>
                <Route path="/app/allTrainee/addtrainee" component={AddTrainee}></Route> */}
                {activeIndex === 0 && <Store />}
                {activeIndex === 1 && <WTP />}
                {activeIndex === 2 && <Inward />}
            </div>
            
        </>
    )
}
export default Master;