import React from 'react';
import dash1 from "../images/dash1.png"
import dash2 from "../images/dash2.png"
import dash3 from "../images/dash3.png"
import "../assets/css/dashboard.css"

const Dashboard = () => {
    return (
        <>
            <div className='mb-3 card'>
                <h4 className='mb-0 font-bold'>Dashboard</h4>
            </div>
            <div className="grid">
                <div className="col-12 md:col-6 lg:col-4 xl:col-3">
                    <div className='bg-white ds-border'>
                        <div className='relative'>
                            <img src={dash1} className='w-full' />
                            <div className='absolute dash-color-card'>
                                <div className="dash-card-content">
                                    <h2 className="head1">Zone 1</h2>
                                    <p>09 Jun, 2023</p>
                                    <h4 className="head2">3256</h4>
                                </div>
                                <div className="dash-card-inner">
                                    <div className="dash-card-left">
                                        <h3 className="head5">5000</h3>
                                        <p>Target No</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head5">32</h3>
                                        <p>QA Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className='p-2 pt-1'>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">Sanden Vikas</h4>
                                        <p className="para1">2884-0850V</p>
                                        <p>San - 01</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head4">315</h3>
                                        <p>450</p>
                                    </div>
                                </div>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">Tata Ficosa</h4>
                                        <p>06040301X028</p>
                                        <p>Vistra & Nexon line</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h4 className="head4">315</h4>
                                        <p>450</p>
                                    </div>
                                </div>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">Rane TRW Steering  Systems Ltd</h4>
                                        <p>34299215B</p>
                                        <p>FCA Line</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head4">315</h3>
                                        <p>450</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 md:col-6 lg:col-4 xl:col-3">
                    <div className='bg-white ds-border'>
                        <div className='relative'>
                            <img src={dash2} className='w-full' />
                            <div className='absolute dash-color-card'>
                                <div className="dash-card-content">
                                    <h2 className="head1">Zone 2</h2>
                                    <p>09 Jun, 2023</p>
                                    <h4 className="head2">3256</h4>
                                </div>
                                <div className="dash-card-inner">
                                    <div className="dash-card-left">
                                        <h3 className="head5">7000</h3>
                                        <p>Target No</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head5">54</h3>
                                        <p>QA Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" relative">
                            <div className='p-2 pt-1'>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">AUTOLIV INDIA PVT LTD</h4>
                                        <p>658872000B</p>
                                        <p>YTA LH line</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head4">315</h3>
                                        <p>450</p>
                                    </div>
                                </div>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">Valeo-India</h4>
                                        <p>L353547</p>
                                        <p>SK216 Valeo</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h4 className="head4">315</h4>
                                        <p>450</p>
                                    </div>
                                </div>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">Joysonsafety</h4>
                                        <p>1169193-AB</p>
                                        <p>Joy-01</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head4">315</h3>
                                        <p>450</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 md:col-6 lg:col-4 xl:col-3">
                    <div className='bg-white ds-border'>
                        <div className='relative'>
                            <img src={dash3} className='w-full' />
                            <div className='absolute dash-color-card'>
                                <div className="dash-card-content">
                                    <h2 className="head1">Zone 3</h2>
                                    <p>09 Jun, 2023</p>
                                    <h4 className="head2">3256</h4>
                                </div>
                                <div className="dash-card-inner">
                                    <div className="dash-card-left">
                                        <h3 className="head5">8500</h3>
                                        <p>Target No</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head5">48</h3>
                                        <p>QA Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className='p-2 pt-1'>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">Rane TRW Steering Systems Ltd</h4>
                                        <p>2884-0850V</p>
                                        <p>FCA Line</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head4">315</h3>
                                        <p>450</p>
                                    </div>
                                </div>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">Varroc</h4>
                                        <p>06040301X028</p>
                                        <p>Varr - 02</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head4">600</h3>
                                        <p>450</p>
                                    </div>
                                </div>
                                <div className="dash-card-content1">
                                    <div className="dash-card-left">
                                        <h4 className="head3">Valeo-India</h4>
                                        <p>L359116</p>
                                        <p>SK216 Valeo</p>
                                    </div>
                                    <div className="dash-card-right">
                                        <h3 className="head4">700</h3>
                                        <p>450</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Dashboard;