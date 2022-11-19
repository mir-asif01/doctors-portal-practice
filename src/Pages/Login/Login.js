import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {

    const { userLoginWithEmailPass } = useContext(AuthContext)
    const { register, handleSubmit , formState : {errors} } = useForm();

    const [loginError,setLoginError] = useState('')

    const handleLogin=(data)=>{
        console.log(data)

        userLoginWithEmailPass(data.email,data.password)
        .then(result=>{
            setLoginError('')
            const user = result.user;
            console.log(user)
        })
        .catch(err=>{
            setLoginError(err.message)
        })
    }

    return (
        <div className="h-[500px] flex justify-center items-center">
            <div className="md:w-96 md:p-7 p-2">
                    <h1 className="text-3xl text-center">Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email',{required : 'Email is required'})} type="text" className="input input-bordered w-full max-w-xs" 
                        />
                        {errors.email?.type === 'required' && <p role="alert" className="text-rose-600 font-semibold">email is required</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password',{required : 'Password is required',minLength : 6})} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password?.type === 'required' && <p role="alert" className="text-rose-600 font-semibold">password is required</p>}
                        <label className="label">
                            <span className="label-text">Forgot password?</span>
                        </label>
                    </div>
                    {/* <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" />
                <p>{data}</p> */}
                    <button className="py-2 px-5 bg-slate-800 rounded-md text-white w-full" type="submit" >Login</button>
                </form>
                <p className="text-rose-700 font-semibold italic">{loginError}</p>
                <p>New to Doctors Portal ? <Link to='/signup' className="text-emerald-500">Create new account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full rounded-md py-2 px-3">Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;