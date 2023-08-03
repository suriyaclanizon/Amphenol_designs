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
            mobile_number: data.mobile_number,
            password: data.password
        }
        setIsLoading(true);
        axios.post(constants.URL.SIGNIN, payload)
            .then((resp) => {
                // console.log(resp.data.results);
                goto("/app/defaultnav")
            }).catch((e) => {
                toast.current.show({ severity: "error", summary: "Failure", detail: e?.response?.data?.message });
                console.error(e);
            }).finally(() => {
                setIsLoading(false);
            })

    }
    const goto = (to) => {
        history.replace(to);
    }

    return (
        <div className="container">
            <Toast ref={toast} />
            <div className="top flex align-items-center">
                <div className="top_left">
                    <img src={amphe} alt="logo" className="logo pt-5 mt-4" />
                    <h1 className="heading1">Production Monitoring System</h1>
                </div>
                <div className="top_right">
                    <div className="form-wrapper lg:w-8 " >
                        <form onSubmit={handleSubmit(onSubmit)} className="error_msg">
                            <h4 className="l-heading">Welcome</h4>
                            <div>
                                <div className="field">
                                    <label htmlFor="mobile_number" className="block text-900  mb-2">Mobile Number</label>
                                    <InputText id="mobile_number" type="text" className="w-full mb-3"
                                        defaultValue={""}
                                        {...register("mobile_number", {
                                            required: true,
                                        })}
                                    />
                                    {errors?.mobile_number?.type === "required" && <p className="p-error">This field is required</p>}
                                </div>

                                <div className="field">
                                    <label htmlFor="password" className="block text-900  mb-2">Password</label>
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
                                <div className="mt-4">
                                    <Button label="LOGIN" className="w-full login_button" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom flex justify-content-center">
                <img src={banner} alt="car-img" className="car" />
            </div>
        </div>
    );
};

export default Login;
