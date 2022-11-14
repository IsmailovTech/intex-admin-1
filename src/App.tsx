
// import React, { useState } from 'react'
// import './Assets/main.css'
// import FormInput from './BaseComponents/FormInput/FormInput'
// import MButton from './BaseComponents/MButton/MButton'
// import MFilter from './BaseComponents/MFilter/MFilter'
// import MLabel from './BaseComponents/MLabel/MLabel'
// import { FormikConsumer, useFormik } from 'formik'
// import * as Yup from 'yup'

// const initialValues = {
//   username: '',
// }

// const onSubmit = (values: any, { resetForm }: any) => {
//   console.log(values)
//   resetForm({ values: '' })
// }

// const validationSchema = Yup.object({
//   username: Yup.string()
//     .required('Username is required, at least 3 characters')
//     .min(3, 'Minimal 3 characters')
//     .max(20, 'Maximum 20 characters'),
// })

// function App() {
//   // const formik = useFormik({
//   //   initialValues,
//   //   onSubmit,
//   //   validationSchema,
//   // })

//   // return (
//   //   <>
//   //     <form
//   //       onSubmit={(e) => {
//   //         formik.handleSubmit(e)
//   //         formik.values = initialValues
//   //       }}
//   //       className="w-96"
//   //     >
//   //       <FormInput
//   //         required
//   //         type="text"
//   //         id="username"
//   //         placeholder="Введите ваше имя"
//   //         {...formik.getFieldProps('username')}
//   //       />

//   //       {formik.touched.username && formik.errors.username ? (
//   //         <span className="text-red-600 text-xs absolute -bottom-1 sm:bottom-1 left-2">
//   //           {formik.errors.username}
//   //         </span>
//   //       ) : null}

//   //       <FormInput
//   //         required
//   //         type="email"
//   //         id="username"
//   //         placeholder="Вxzccz"
//   //         {...formik.getFieldProps('username')}
//   //       />

//   //       <MButton BType="filter" type="submit">
//   //         Click
//   //       </MButton>
//   //     </form>


import React from 'react';
import {Routes, Route} from "react-router-dom"
import SiteBar from './components/Sitebar/SiteBar';
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import Catergory from "./Pages/Category/Category"
import Atribut from "./Pages/Atribut/Atribut"
import Order from "./Pages/Order/Order"
import CallBack from "./Pages/CallBack/CallBack"
import Settings from "./Pages/Settings/Settings"
import "./Assets/main.css"

function App() {

  return (
    <>
      <div className='flex'>
        <SiteBar />
        <div className='w-full'>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category' element={<Catergory/>}/>
            <Route path='/atribut' element={<Atribut/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/callBack' element={<CallBack/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
