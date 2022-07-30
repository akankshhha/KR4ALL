import React from 'react'
import ConsultationHistory from '../DashboardComponents/ConsultationHistory';
import StatusCard from '../DashboardComponents/StatusCard';
import InfoCard from '../DashboardComponents/InfoCard';
import ConfigurationCard from '../DashboardComponents/ConfigurationCard';
import Header from "../Header/Header";
import { PlusCircleFilled } from '@ant-design/icons'



const DashboardDefault = ({setActive}) => {
  return (
    <>
    <Header />
    <div className="container d-flex ">
        <div className="col-lg-8">
            <StatusCard />
            <ConsultationHistory />
            <div className="row1 informationCards d-flex ">
              <InfoCard 
               message="No department added yet."
                cardHeading = "Department composition"
                btnText = "add new department"
               btn = {<PlusCircleFilled style={{ fontSize: '22px', color: '#FC6964' }}/>} 
               className = "contentCard"
               mainClassName= "infoCard m-4"
               >


               </InfoCard>
              <InfoCard 
                message="No speciality added yet."
                cardHeading = "Speciality composition"
                btnText = "add new speciality"
                btn = {<PlusCircleFilled style={{ fontSize: '22px', color: '#FC6964' }}/>} 
                className = "contentCard"
                mainClassName= "infoCard m-4"></InfoCard>         
            </div>
            <div className="row2 informationCards d-flex">
              <InfoCard message="services"
                  cardHeading = "Services used"
                  btnText = "add new service"
                  btn = {<PlusCircleFilled style={{ fontSize: '22px', color: '#FC6964' }}/>} 
                  className = "contentCard"
                  mainClassName= "infoCard m-4"></InfoCard>
              <InfoCard message="services"
                   cardHeading = "Common symptoms"
                   className = "contentCard"
                   mainClassName= "infoCard m-4"
              />     

            </div>
        </div>
        <div className="col-lg-4 cardConfig">
          <ConfigurationCard setActive = {setActive}/>
        </div>
    </div>
    </>
  )
}

export default DashboardDefault