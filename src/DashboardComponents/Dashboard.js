import React, { useState } from 'react'
import '../DashboardComponents/Dashboard.css'
import { Link, Route } from "react-router-dom"
import {

    LayoutFilled,
    UsergroupAddOutlined,
    CalendarOutlined,
  } from '@ant-design/icons'
import { Layout, Menu  } from 'antd'
import DashboardDefault from './DashboardDefault'
import Appointments from '../Appointments/Appointments'
import DoctorQueue from "../DoctorQueue/DoctorQueue"
import AddBranch from './AddBranch'
const { Content, Sider } = Layout

const Dashboard = () => {

  const[active, setActive] = useState("firstComponent")
  const [collapsed, setCollapsed] = useState(true);
  return (
      <div>
      <Layout
        style={{
          minHeight: '100vh',
          backgroundColor: '#203765'
        }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
              style={{ backgroundColor: '#203765'
               }}>
               <img src={require('../images/productLogo.png')} className = "p-4"/> 
               
          <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline" 
                style={{
                marginTop :  155,
                backgroundColor: '#203765',
                }}
                >
                 
                <Menu.Item key="1" onClick={() => setActive("firstComponent")}>
                    
                <LayoutFilled/>
                    <span>Dashboard</span>
                    
                    <Link to="/dashboard"> </Link>
                </Menu.Item>

                <Menu.Item key="2" onClick={() => setActive("secondComponent")}>
                    <UsergroupAddOutlined/>
                    <span>Doctor Queue</span>
//                     <Link to="/queue"></Link>
                </Menu.Item>

                <Menu.Item key="3"  onClick={() => setActive("thirdComponent")}>
                    <CalendarOutlined />
                    <span>Appointments</span>
//                     <Link to="/appointments"></Link>
                </Menu.Item>   

                <img src="" style={{marginTop : '15rem'}} /> 
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content  style={{  backgroundColor : '#f8f8f8'}}>      
           
            {active === "firstComponent" && <DashboardDefault setActive={setActive}/>}
            {active === "secondComponent" && <Appointments />}
            {active === "thirdComponent" && <DoctorQueue />}
            {active === "fourthComponent" && <AddBranch />}
          
//             <Route path="/dashboard/configuration/addBranch" component={AddBranch} ></Route>
          
          </Content>
        </Layout>
      </Layout>
  </div>
  
  )
}

export default Dashboard


