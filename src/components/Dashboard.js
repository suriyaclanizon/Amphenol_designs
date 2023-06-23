import React, { useEffect, useState } from 'react';

import dash1 from "../images/dash1.png"
import dash2 from "../images/dash2.png"
import dash3 from "../images/dash3.png"

import { InputText } from 'primereact/inputtext';
import "../assets/css/dashboard.css"
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from 'axios';
import constants from '../constants/constants';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const setTraineesList = useStoreActions((actions) => actions.tabModel.setTraineesList);
    const traineesList = useStoreState((state) => state.tabModel.traineesList);
    const setGameScoreStatus = useStoreActions((actions) => actions.tabModel.setGameScoreStatus);
    const gameScoreStatus = useStoreState((state) => state.tabModel.gameScoreStatus);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(constants.URL.ALL_TRAINEES_LIST)
            .then((resp) => {
                setTraineesList(resp.data.results);
            })
            .catch((e) => console.error(e))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(constants.URL.Trainee_Game_Status)
            .then((resp) => {
                setGameScoreStatus(resp.data.results);
            })
            .catch((e) => console.error(e))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const uniqueEmployees = {};

    gameScoreStatus?.forEach((employee) => {
    const { user_id, level, status } = employee;
    const empId = user_id?.employee_ID;

    if (level == "Level 6" && status == "Pass") {
        uniqueEmployees[empId] = employee;
    }
    });
    const filteredEmployeeRecords = Object.values(uniqueEmployees);
    console.log(filteredEmployeeRecords?.length);

    return (
        <>
            <div className='flex md:flex-row flex-column justify-content-between align-items-center lg:mt-5 mb-3'>
                <div className='dash-hello-text'><span className='dash-hello-text-bold'>Dashboard</span></div>
            </div>
            <div className="grid">
            <div className="main">
            <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative">
                <img src={dash1} className='w-full' />
                <div className='absolute top-0  card-content'>
                    <div className="cardcon">
                    <h2 className="head1">Zone 1</h2>
                    <p>09 Jun, 2023</p>
                    <h4 className="head2">3256</h4>
                    </div>
                    <div className="cardDown">
                    <div className="cardLeft">
                    <h3>5000</h3>
                    <p>Target No</p>
                </div>
                <div className="cardRight">
                <h3>5000</h3>
                    <p>QA Rejected</p>
                </div>
                </div>
                </div>
                
            </div>
            <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative">
                <img src={dash2} className='w-full' />
                <div className='absolute top-0  card-content'>
                    <div className="cardcon">
                    <h2 className="head1">Zone 2</h2>
                    <p>09 Jun, 2023</p>
                    <h4 className="head2">3256</h4>
                    </div>
                    <div className="cardDown">
                    <div className="cardLeft">
                    <h3>5000</h3>
                    <p>Target No</p>
                </div>
                <div className="cardRight">
                <h3>5000</h3>
                    <p>QA Rejected</p>
                </div>
                </div>
                </div>
            </div>
            
            <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative ">
                <img src={dash3} className='w-full' />
                <div className='absolute top-0  card-content'>
                    <div className="cardcon">
                    <h2 className="head1">Zone 3</h2>
                    <p>09 Jun, 2023</p>
                    <h4 className="head2">3256</h4>
                    </div>
                    <div className="cardDown">
                    <div className="cardLeft">
                    <h3>5000</h3>
                    <p>Target No</p>
                </div>
                <div className="cardRight">
                <h3>5000</h3>
                    <p>QA Rejected</p>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
        
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return (prevProps.location.pathname === nextProps.location.pathname) && (prevProps.colorMode === nextProps.colorMode);
};

export default React.memo(Dashboard, comparisonFn);
