import { useFormik } from 'formik';
import React, { useState } from 'react'
import { MdCheck, MdErrorOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const Regester = () => {

    const [loading, setLoading] = useState(false);
    const [errorFirebase, setErrorFirebase] = useState("");
    const [successMassege, setSuccessMassege] = useState("");
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "", 
            email: "",
            password: "",
            rePassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().max(16, ["Must be 16 charachters or less"]).required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(6, ["Must be at least 6 charachters"]).required("Required"),
            rePassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required("Required")
        }),
        onSubmit: (valuse, {resetForm}) => {
            const{name, email, password} = valuse;
            setLoading(true);

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);

                updateProfile(auth.currentUser, {
                    displayName: name
                });
                
                setSuccessMassege("Account created successfully!");

                setTimeout(() => {
                    navigate("/sign")
                }, 2000);

              })
              .catch((error) => {
                const errorCode = error.code;
                setLoading(false);
                
                if(errorCode.includes("auth/email-already-in-use")){
                    setErrorFirebase("Email Already In Use!");
                };
                resetForm();
            });
        }

    })
    return (
    <div className='w-full'>
        <form onSubmit={formik.handleSubmit} className='border border-gray-500 sm:w-[500px] w-[80%] p-[1rem] mx-auto rounded mt-7'>
            <p className='font-bold text-2xl'>Create a new account</p>
            <p className='text-gray-500'>It's quick and easy.</p>
                  <hr className='my-6 text-[#3333]' />
            <div className='w-full h-[50px] flex font-semibold my-3'>
                <input 
                className='w-full h-full p-4 outline-offset-1 border rounded mr-1 border-gray-400'
                type="text" 
                name='name' 
                autoComplete='on'
                value={formik.values.name}
                placeholder='Enter your name'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                />
                <p className=' relative mt-[16px]'>
                    {formik.touched.name && formik.errors.name ? (
                        <span className='text-red-600'><MdErrorOutline/></span>
                        ) : (
                        formik.touched.name && !formik.errors.name && (
                            <span className=' text-green-600'><MdCheck/></span>
                        )
                    )}
                </p>
            </div>
            <div className='w-full h-[50px] flex font-semibold my-3'>
                <input 
                className='w-full h-full p-4 outline-offset-1 border rounded mr-1 border-gray-400'
                type="text" 
                name='email' 
                autoComplete='on'
                value={formik.values.email}
                placeholder='Enter your email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                />
                <p className=' relative mt-[16px]'>
                    {formik.touched.email && formik.errors.email ? (
                        <span className='text-red-600'><MdErrorOutline/></span>
                        ) : (
                        formik.touched.email && !formik.errors.email && (
                            <span className=' text-green-600'><MdCheck/></span>
                        )
                    )}
                </p>
            </div>
            <div className='w-full h-[50px] flex font-semibold my-3'>
                <input 
                className='w-full h-full p-4 outline-offset-1 border rounded mr-1 border-gray-400'
                type="text" 
                name='password' 
                autoComplete='on'
                value={formik.values.password}
                placeholder='Enter your password'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                />
                <p className=' relative mt-[16px]'>
                    {formik.touched.password && formik.errors.password ? (
                        <span className='text-red-600'><MdErrorOutline/></span>
                        ) : (
                        formik.touched.password && !formik.errors.password && (
                            <span className=' text-green-600'><MdCheck/></span>
                        )
                    )}
                </p>
            </div>
            
            <div className='w-full h-[50px] flex font-semibold my-3'>
                <input 
                className='w-full h-full p-4 outline-offset-1 border rounded mr-1 border-gray-400'
                type="text" 
                name='rePassword' 
                autoComplete='on'
                value={formik.values.rePassword}
                placeholder='Enter your Re-Password'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                />
                <p className=' relative mt-[16px]'>
                    {formik.touched.rePassword && formik.errors.rePassword ? (
                        <span className='text-red-600'><MdErrorOutline/></span>
                        ) : (
                        formik.touched.rePassword && !formik.errors.rePassword && (
                            <span className=' text-green-600'><MdCheck/></span>
                        )
                    )}
                </p>
            </div>
            <button type='submit' disabled={loading} className='border cursor-pointer border-blue-500 px-4 py-2 text-white bg-blue-700 font-semibold rounded'>
                {loading? (<p>Proccessing...</p>) : (<>Regester Account</>)}
            </button>
                    <hr className='my-6 text-[#3333]'/>
            <div>
              <Link to="/sign" className='border cursor-pointer border-green-500 px-4 py-2 text-white bg-green-600 hover:bg-green-500 font-semibold rounded'>
                Already have an account?
              </Link>
            </div>
            <h3 className='text-red-600 mt-3'>{errorFirebase && <p>{errorFirebase}</p>}</h3>
            <h3 className='text-green-600 mt-3'>{successMassege && <p>{successMassege}</p>}</h3>
        </form>  
    </div>
  )
}

export default Regester