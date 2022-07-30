import React from 'react'
import { Select } from 'antd'
import '/node_modules/antd/dist/antd.min.css';
import '../DashboardComponents/Dashboard.css'

const { Option } = Select;

const StatusCard = () => {
  return (
    <div className='mainContainer d-block'>
        <div className="options d-flex justify-content-between p-4 justify-content-center">
            <img src={require("../images/Paper.png")} alt="" className='fileIcon' />
            <div><h6>Total Earnings</h6> <h3>₹0</h3></div> 
            <div><h6>Transactions</h6><h3>0</h3></div>
            <div className="my-select-container">
                <Select className='antd-select-statusCard'
                        placeholder="Select Unit Name"
                        size="large"
                        bordered={false}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
            <div className="my-select-container">
                <Select className='antd-select-statusCard'
                        placeholder="Time Duration"
                        size="large"
                        bordered={false}
                >
                    <Option value="Unit 1">Unit 1</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
        </div>
        <div className="displayInfoCard d-flex justify-content-around py-5 px-5 justify-content-center">
            <div className="d-block pl-4"><h6>Consultations</h6> <h3>0</h3></div> 
            <div className="d-block"><h6>Pharmacy Orders</h6> <h3>0</h3></div> 
            <div className="d-block"><h6>Lab Orders</h6> <h3>0</h3></div> 
            <div className="d-block"><h6>Patient Registrations</h6> <h3>0</h3></div> 
        </div>
    </div>
  )
}

export default StatusCard