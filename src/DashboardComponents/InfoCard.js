import React from 'react'
import '../DashboardComponents/Dashboard.css'
import { PlusCircleFilled, QuestionCircleFilled } from '@ant-design/icons'

const InfoCard = (props) => {
  return ( 
    <div className={props.mainClassName}>
    <div className="d-flex justify-content-between cardHeader">
      <h6 className=" d-flex text-uppercase p-4 cardHeading">{props.cardHeading}</h6><QuestionCircleFilled style={{ paddingLeft: '4rem', fontSize: '20px' }} className="my-4 px-4"/></div>
        <div className={props.className}>
          <img src="" alt="" />
          <p>{props.message}</p>
        </div>
        <div className="d-flex">
          <button className='mb-3 mx-3 border-0 addBtn'>{props.btn}</button>
          <p className='mb-0 addBtn'>{props.btnText}</p>
        </div>
    </div>
  )
}

export default InfoCard