import React, { useState } from 'react'
import { UserOutlined, VideoCameraFilled, PhoneFilled } from '@ant-design/icons';
import { Avatar } from 'antd';
import {Link} from 'react-router-dom'
import PastAppointments from './PastAppointments';
import { profile } from '../Data'
import "../DoctorQueue/DoctorQueue.css"
import Files from './Files';

const DoctorQueue = () => {
  const[active, setActive] = useState("pastAppointments")
  return (
    <>
     <div className="headingSection d-flex justify-content-between p-2">
        <div className="col-lg-6 d-flex mt-3 ps-4">
          <div className="col-lg-1">
           <img src={require("../images/profilePic.png") } alt="" />
          </div>
          <div className="col-lg-11 d-block profileInfo">
            <h5 className=''>{profile.name}</h5> 
            <div className="d-flex">
              <p className='px-1'>{profile.id}  </p>
              <p className="ps-4 pe-1">{profile.age} •   </p>
              <p className="px-1">{profile.gender} •   </p>
              <p className="px-1">{profile.bloodGroup}</p>
              <p className='px-5'><span className='px-2'> <PhoneFilled style={{fontSize : '22px'}}/></span>{profile.phone}</p>           
            </div>         
          </div>
        </div>       
        <div className="col-lg-6 d-flex justify-content-end linkSection pt-5">
          <Link className='link' onClick={() => setActive("pastAppointments")}><p>Appointments</p></Link>
          <Link className=' link' onClick={() => setActive("files")}><p>Files</p></Link>
          <Link className='link'><p>Details</p></Link>
        </div>  
      </div>
     
      {active === "pastAppointments" && <PastAppointments />}
      {active === "files" && <Files />}
      {active === "thirdComponent" && <DoctorQueue />}

    </>

  
   
  )
}
export default DoctorQueue