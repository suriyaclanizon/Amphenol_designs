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
            <div className='flex md:flex-row flex-column justify-content-between align-items-center lg:mt-5 mb-3 heading'>
                <div className='dash-hello-text'><span className='dash-hello-text-bold'>Dashboard</span></div>
            </div>
            <div className="grid">
                <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative card p-0 m-2">
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
                    <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative">

                        <div className='card-content1'>

                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">Sanden Vikas</h4>
                                    <p className="para1">2884-0850V</p>
                                    <p>San - 01</p>
                                </div>
                                <div className="cardRight">
                                    <h3>315</h3>
                                    <p>450</p>
                                </div>
                            </div>
                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">Tata Ficosa</h4>
                                    <p>06040301X028</p>
                                    <p>Vistra & Nexon line</p>
                                </div>
                                <div className="cardRight">
                                    <h4>315</h4>
                                    <p>450</p>
                                </div>
                            </div>
                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">Rane TRW Steering  Systems Ltd</h4>
                                    <p>34299215B</p>
                                    <p>FCA Line</p>
                                </div>
                                <div className="cardRight">
                                    <h3>315</h3>
                                    <p>450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative card p-0 m-2">
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
                    <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative">

                        <div className='absolute top-0  card-content1'>

                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">AUTOLIV INDIA PVT LTD</h4>
                                    <p>658872000B</p>
                                    <p>YTA LH line</p>
                                </div>
                                <div className="cardRight">
                                    <h3>315</h3>
                                    <p>450</p>
                                </div>
                            </div>
                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">Valeo-India</h4>
                                    <p>L353547</p>
                                    <p>SK216 Valeo</p>
                                </div>
                                <div className="cardRight">
                                    <h4>315</h4>
                                    <p>450</p>
                                </div>
                            </div>
                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">Joysonsafety</h4>
                                    <p>1169193-AB</p>
                                    <p>Joy-01</p>
                                </div>
                                <div className="cardRight">
                                    <h3>315</h3>
                                    <p>450</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative card p-0 m-2">
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
                    <div className="col-12 sm:col-6 md:col-4 xl:col-3 relative">

                        <div className='absolute top-0  card-content1'>

                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">Rane TRW Steering Systems Ltd</h4>
                                    <p>2884-0850V</p>
                                    <p>FCA Line</p>
                                </div>
                                <div className="cardRight">
                                    <h3>315</h3>
                                    <p>450</p>
                                </div>
                            </div>
                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">Varroc</h4>
                                    <p>06040301X028</p>
                                    <p>Varr - 02</p>
                                </div>
                                <div className="cardRight">
                                    <h4>315</h4>
                                    <p>450</p>
                                </div>
                            </div>
                            <div className="cardDown">
                                <div className="cardLeft">
                                    <h4 className="head3">Valeo-India</h4>
                                    <p>L359116</p>
                                    <p>SK216 Valeo</p>
                                </div>
                                <div className="cardRight">
                                    <h3>315</h3>
                                    <p>450</p>
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
