import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useHistory } from "react-router-dom";
import amphe from "../images/amphenol-1.png"
import banner from "../images/banner.png"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import constants from "../constants/constants";
import axios from "axios";
import { Toast } from "primereact/toast";
import { useStoreActions, useStoreState } from "easy-peasy";

const Login = () => {
    let history = useHistory();
    const toast = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register, handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();
    const setIsAuthenticated = useStoreActions((actions) => actions.tabModel.setIsAuthenticated);

    const onSubmit = (data) => {
        const payload = {
            user_name: data.userEmail,
            password: data.password
        }
        goto("/app")
        setIsLoading(true);
        
    }
    const goto = (to) => {
        history.replace(to);
    }
    
    return (
        <div className="flex login-wrapper flex-column lg:flex-row">
        <Toast ref={toast} />
            <div className="lg:col-6 col-12 flex flex-column align-items-center justify-content-center">
                <img src={amphe} alt="logo" className="logo pt-5 mt-4" />
                <h1>Production Monitoring System</h1>
                <div className="w-full lg:flex hidden justify-content-center" ><img src={banner} alt="car-img" className="car" /></div>
            </div>
            <div className="lg:flex justify-content-center align-items-center lg:col-6 col-12">
                <div className="form-wrapper lg:w-7">
                    <form onSubmit={handleSubmit(onSubmit)} className="error_msg">
                        <h4 className="l-heading">Welcome</h4>
                        <div>
                            <div className="field">
                                <label htmlFor="email" className="block text-900 font-medium mb-2">User Name</label>
                                <InputText id="email" type="text" className="w-full mb-3"
                                    defaultValue={""}
                                    {...register("userEmail", {
                                        required: true,
                                    })}
                                />
                                {errors?.userEmail?.type === "required" && <p className="p-error">This field is required</p>}
                            </div>

                            <div className="field">
                                <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                                <div className="relative">
                                    <InputText id="password" type={showPassword ? "text" : "password"} className="w-full mb-3"
                                        defaultValue={""}
                                        {...register("password", {
                                            required: true
                                        })}
                                    />
                                    <span className="absolute eye-icon-position cursor-pointer" onClick={togglePasswordVisibility}>
                                        {showPassword ? (
                                            <i className="pi pi-eye-slash" style={{ color: '#708090', fontSize: "16px" }}></i>
                                        ) : (
                                            <i className="pi pi-eye" style={{ color: '#708090', fontSize: "16px" }}></i>
                                        )}
                                    </span>
                                </div>

                                {errors?.password?.type === "required" && <p className="p-error">This field is required</p>}
                            </div>
                            {/* <div className="l-forget-text text-right mb-3">Forget Password?</div> */}
                            <div className="mt-4">
                                <Button label="LOGIN" className="w-full" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
