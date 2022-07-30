import React from 'react'
import { Select } from 'antd';
import "./AddBranch.css"

const { Option } = Select;

const AddBranch = () => {
  return (
    <>
    <div className='container addBranchContainer pt-5'>
    <h3 className='fw-bold'>Add Branch</h3>
        <div className="row my-5">
            <h6>Unit Details</h6>
            <div className="sameLine d-flex">
            <div className="my-select-container ">
                <Select className='antd-select-statusCard'
                        placeholder="SUnit Organization"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
              <div className="my-select-container ms-4">
                <Select className='antd-select-statusCard'
                        placeholder="Branch Name"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
            </div>
        </div>
        <div className="row my-5">
            <h6>Branch Address</h6>
            <div className="sameLine d-flex">
              <div className="my-select-container">
                <Select className='antd-select-statusCard'
                        placeholder="Addresss Line 1"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
              <div className="my-select-container ms-4">
                <Select className='antd-select-statusCard'
                        placeholder="Addresss Line 2"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
              <div className="my-select-container ms-4">
                <Select className='antd-select-statusCard'
                        placeholder="Postal Code"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
            </div>
            <div className="sameLine d-flex mt-3">
              <div className="my-select-container">
                <Select className='antd-select-statusCard'
                        placeholder="City"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
              <div className="my-select-container ms-4">
                <Select className='antd-select-statusCard'
                        placeholder="State"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
              <div className="my-select-container ms-4">
                <Select className='antd-select-statusCard'
                        placeholder="Country"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
            </div>
        </div>
        <div className="row my-5">
            <h6>Branch Admin</h6>
            <div className="sameLine d-flex">
              <div className="my-select-container">
                <Select className='antd-select-statusCard'
                        placeholder="Name"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
              <div className="my-select-container ms-4">
                <Select className='antd-select-statusCard'
                        placeholder="Mobile Number "
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
            <div className="my-select-container ms-4">
                <Select className='antd-select-statusCard'
                        placeholder="Email"
                        size="large"
                        bordered={false}
                        style={{ width: 250 }}
                >
                    <Option value="Unit 1">All</Option>
                    <Option value="Unit 2">Unit 2</Option>
                </Select>
            </div>
            </div>
        </div>
       
    </div>
    <div className="buttons p-3 me-5">
            <button className='cancelBtn me-3 fw-bold'>Cancel</button>
            <button className='addBranchBtn fw-bold'>Create Branch</button>
    </div>
    </>
  )
}

export default AddBranch