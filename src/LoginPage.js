import React from 'react'
import { Select } from 'antd'
import '../node_modules/antd/dist/antd.min.css';

const { Option } = Select;

const LoginPage = (props) => {
    
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-7 left-side">
                <h3 className='title p-4 fw-bold'>
                    {/* <img src= {require("./images/logo.png")} alt="" />  */}
                    KR4ALL
                </h3>
                <h3 className='welcome-txt text-center mt-5 fw-bold'>
                    Welcome to KR4ALL
                </h3>
                <p className='text-center mt-4'>
                    Get ahead of the curve. Join the next generation of health heroes.
                </p>
                <img src={require("./images/vector-1.png")} alt="" className='login-img rounded mx-auto d-block' />
            </div>
            <div className="col-lg-5 login-side">
                <div className="login-module position-relative">
                    <h4 className='text-center mb-4 fw-bold signIn-txt'>
                    Sign-in to your account
                    </h4>
                    <input type="text" placeholder='Username'/>
                    <input type="text" placeholder='Password'/>
                    <div className="my-select-container">
                        <Select className='antd-select'
                            style={{
                                borderRadius: "8px",
                                width: '20rem',
                            }}
                            placeholder="Select Unit Name"
                            size="large"
                            bordered={false}>
                            <Option value="Unit 1">Unit 1</Option>
                            <Option value="Unit 2">Unit 2</Option>
                            <Option value="Unit 3">Unit 3</Option>
                        </Select>
                    </div>
                    <button className='signIn-btn fw-bold mt-5 text-center' onClick={()=>{props.history.push('/dashboard')}}>Sign In</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage