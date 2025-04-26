'use client'
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import Social_Login from '../Components/Shared/socialLogin';

const Login = () => {

    const searchParams = useSearchParams()
    const path = searchParams.get('redirect')
    const router = useRouter()
    
    const handleLogin = async(event)=>{
        event.preventDefault()
        const form = event.target 

        const email = form.email.value;
        const password = form.password.value;
        const resp = await signIn('credentials',{
            email,
            password,
            redirect : true,
            callbackUrl: path ? path : '/',
        })
        form.reset()
        if(resp.status === 200){
           router.push('/')
        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 md:w-1/2">
                    <Image src='/assets/images/login/login.svg' height={640} width={600} alt='login image'></Image>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-10">Login</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label mt-2">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Give your Email"
                                    className="input input-bordered text-center"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label mt-2">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Give your Password"
                                    className="input input-bordered text-center"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6 text-center">
                                <input
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                        </form>
                        <p className="my-4 text-center">
                            New to Cars Doctor?{" "}
                            <Link
                                href='SignUp'
                                className="link-hover text-orange-600 font-semibold"
                            >
                                Sign up
                            </Link>
                        </p>
                        <Social_Login></Social_Login>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;