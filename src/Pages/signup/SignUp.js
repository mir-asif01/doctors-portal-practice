import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const {createUser,updateUserName} = useContext(AuthContext)

    const { register, handleSubmit , formState : {errors} } = useForm();


    const handleLogin=(data)=>{
        console.log(data)

        createUser(data.email,data.password)
        .then(result=>{
            updateUserName(data.name)
            .then(()=>console.log('name updated'))
            .catch((err)=>console.log(err))
            const user = result.user
            console.log(user)
        })
        .catch(err=>console.log(err))
    }


    return (
        <div className="h-[500px] flex justify-center items-center">
        <div className="md:w-96 md:p-7 p-2">
                <h1 className="text-3xl text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register('name',{required : 'Name is required'})} type="text" className="input input-bordered w-full max-w-xs" 
                    />
                    {errors.name?.type === 'required' && <p role="alert" className="text-rose-600 font-semibold">Name is required</p>}
                </div>
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
                <button className="py-2 px-5 bg-slate-800 rounded-md text-white w-full" type='submit'>Sign Up</button>
            </form>
            <p>Already have an account ? <Link to='/login' className="text-emerald-500">Login</Link></p>
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full rounded-md py-2 px-3">Continue With Google</button>
        </div>
    </div>
    );
};

export default SignUp;