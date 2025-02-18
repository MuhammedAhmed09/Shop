import { useFormik } from 'formik';
import React, { useState } from 'react'
import { MdCheck, MdErrorOutline } from 'react-icons/md';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { getUserName } from '../../redux/counterSlice';

const Sign = () => {
    const [loading, setLoading] = useState(false);
    const [errorFirebase, setErrorFirebase] = useState("");
    const [successMassege, setSuccessMassege] = useState("");  
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
      initialValues: {
        password: "", 
        email: ""
      },
      validationSchema: Yup.object({
        password: Yup.string().min(6, ["Must be at least 6 charachters"]).required("Required"),
        email: Yup.string().email("Invalid email address").required("Required")
      }),
      onSubmit: (values, {resetForm}) => {
        const {email, password} = values;
        setLoading(true);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user
          
          dispatch(getUserName({
            __id: user.uid,
            userName: user.displayName,
            email: user.email
           }));
          
          setSuccessMassege("Welcome!");
              setLoading(false);
              setTimeout(() => {
                  navigate("/")
              },2000);

        })
        .catch((error) => {
            const errorCode = error.code;
            setLoading(false);
            if(errorCode.includes("auth/user-not-found")){
                setErrorFirebase("No User Found With This Email");
            } else if(errorCode.includes("auth/wrong-password")){
                setErrorFirebase("Wrong Password, please try again")
            } else {
                setErrorFirebase("An Error Accurred, please try again")
            }
            resetForm()
        });
      }
    })
  return (
    <div className='w-full '>
        <form onSubmit={formik.handleSubmit} className='border border-gray-500 sm:w-[500px] w-[80%] mx-auto p-[1rem] rounded py-[60px] mt-[130px]'>
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
            <p className='mb-2 relative mt-[16px]'>
            {formik.touched.password && !formik.errors.password ? (
                <span className='text-green-600 '><MdCheck/></span>
            ) : (
                formik.touched.password && formik.errors.password && (
                    <span className='text-red-600'><MdErrorOutline/></span>
                )
            )}
            </p>
            </div>
            <div className='mt-8'>
                <button type='submit' disabled={loading} className='border cursor-pointer border-blue-500 px-4 py-2 text-white bg-blue-700 font-semibold rounded'>
                    {loading ? ("Signning...") : ("Sign in")}
                </button>
                <h3 className='text-red-600'>{errorFirebase && <p>{errorFirebase}</p>}</h3>
                <h3 className='text-green-600'>{successMassege && <p>{successMassege}</p>}</h3>
            </div>
        </form>
    </div>
  )
}

export default Sign