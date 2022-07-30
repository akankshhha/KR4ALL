import React from 'react'
import '../DashboardComponents/Dashboard.css'
import { PlusCircleFilled, DropboxCircleFilled, FileAddFilled, SettingFilled } from '@ant-design/icons'

const ConfigurationCard = ({setActive}) => {
  return (
   
    <div className='configurationCard m-4 p-4'>

        <div className="addLogo p-3 m-2 text-center">
            <span ><FileAddFilled style={{ fontSize: '25px', color: '#d4d6d6' }}/></span>
            <p className='pt-3 '>Add logo</p>
        </div>

        <div className="d-flex my-4">
          <span className='mb-3 mx-2 border-0'><SettingFilled style={{ fontSize: '22px', color: '#5f88d2' }}/></span>
          <p className='mb-0 m-1 text-uppercase fw-bolder'>Configuration</p>
        </div>

        <div className="row mx-2 my-4 p-2">
            <div className='col'><h6>Users</h6><h3>0</h3></div>
            <div className='col'><h6>1 Admin</h6></div>
        </div>

        <div className="d-flex">
          <button className='mb-3 mx-2 border-0 addBtn'><PlusCircleFilled style={{ fontSize: '22px', color: '#FC6964' }}/></button>
          <p className='mb-0 m-1 addBtn'>Add doctor</p>
        </div>
       
        <div className="d-flex">
          <button className='mb-3 mx-2 border-0 addBtn'><PlusCircleFilled style={{ fontSize: '22px', color: '#FC6964' }}/></button>
          <p className='mb-0 m-1 addBtn'>Add staff</p>
        </div>
        
        <div className='mx-2 my-4 p-2'><h6>Units</h6><h3>0</h3></div>

        <div className="d-flex my-4">
          <button className='mb-3 mx-2 border-0 addBtn'  onClick={() => setActive("fourthComponent")}><PlusCircleFilled style={{ fontSize: '22px', color: '#FC6964' }}/></button>
          <p className='mb-0 m-1 addBtn'>Add unit</p>
        </div>

        <div className="activity">
          <h5 className='activityTxt text-uppercase'>Activity</h5>
          <div className="row d-flex">
         <div className='col-lg-3 px-4'><DropboxCircleFilled style={{ fontSize: '30px', color: '#d4d6d6' }}/></div> 
         <div className="col-lg-9"> <h6>Application Update  <span className='notificationTime fw-600 px-2'>Just now</span>  </h6><p className='notificationTxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique.</p></div>
          </div>
        </div>
    </div>
  )
}

export default ConfigurationCard