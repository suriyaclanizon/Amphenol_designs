import React from "react";
import { TabMenu } from 'primereact/tabmenu';
import Store from "./Store";
import WTP from "./WTP";
import Inward from "./Inward";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Button } from "primereact/button";

const Master = () => { 
    const setActiveIndex = useStoreActions((actions) => actions.tabModel.setActiveIndex);
    const activeIndex = useStoreState((actions) => actions.tabModel.activeIndex);

    const items = [
        { label: 'Store' },
        { label: 'WTP' },
        { label: 'Inward' },
    ];

    return (
        <>
            <div className="Trainee-wrapper">
                <div className="flex justify-content-between card p-2 px-4">
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                    <Button className="btn" label="Add" />
                </div>
                {activeIndex === 0 && <Store />}
                {activeIndex === 1 && <WTP />}
                {activeIndex === 2 && <Inward />}
            </div>
            
        </>
    )
}
export default Master;