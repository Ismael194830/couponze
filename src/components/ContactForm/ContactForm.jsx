import React from 'react'
import'./ContactForm.css'

export default function ContactForm() {
  return (
    
    <form className='Conatact_form'>
        <h2>اتصل بنا </h2>
           
        <div className="Name_input">
            <label htmlFor="">الاسم<span>*</span></label>
            <input type="text" placeholder='First'/>
            <input type="text"   placeholder='Last'/>
        </div>
        <label htmlFor="">البريد الالكتروني <span>*</span></label>
        <div className='email'>
            <input type="text" />
        </div>
        <label htmlFor="">التعليق أو الرسالة</label>
       <div>
          <textarea name="" id=""></textarea>
       </div>


      
    </form>
  )
}
