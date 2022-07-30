import React from 'react'
import '../Appointments/Appointment.css'
import { PlusCircleFilled } from '@ant-design/icons'
import { Input, Select } from 'antd';
import { Table, Tag  } from 'antd';
import { bookedAppointments } from '../Data';

const { Option } = Select;
const { Column } = Table;
const { Search } = Input;

const onSearch = (value) => console.log(value);

const Appointments = () => {
  return (
      <div className='p-4'>
        <div className="heading px-4 pt-3"><h3 className='pt-4'>Appointments</h3>
          <div className="secondLine d-flex justify-content-between">
            <p className=" mt-4">List of booked appointments</p>
            <button className='addBtn-appointments mb-4 py-2 px-4'>Add <PlusCircleFilled style={{ fontSize: '22px', color: '#FC6964', paddingLeft:'8px' }}/></button>
        </div>
        </div> 
          <div className="searchOptions d-flex pt-3 mx-4">
              <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  size="large"
                  style={{
                    width: 300,
                  }}
              />

              <Select className='antd-select mx-2'
                      placeholder="Date"
                      size="large"     
                      > 
                      <Option value="This week">Unit 1</Option>
                      <Option value="Unit 2">Unit 2</Option>
              </Select> 

              <Select className='antd-select mx-2'
                      placeholder="Consultation Type"
                      size="large"
                      >
                      <Option value="Unit 1">Unit 1</Option>
                      <Option value="Unit 2">Unit 2</Option>
              </Select>

              <Select className='antd-select mx-2'
                      placeholder="Status"
                      size="large"
                      >
                      <Option value="Unit 1">Unit 1</Option>
                      <Option value="Unit 2">Unit 2</Option>
              </Select>

              <Select className='antd-select mx-2'
                      placeholder="Invoice"
                      size="large"
                      >
                      <Option value="Unit 1">Unit 1</Option>
                      <Option value="Unit 2">Unit 2</Option>
              </Select>
          </div>
          <Table dataSource={bookedAppointments} className = "m-4 text-capitalize" style={{boxShadow : '1px 5px 5px #e1e2e3'}} pagination={false}>
            <Column title="ORDER ID" dataIndex="Order_id" key="Order_id" align="center"  />
            <Column title="PATIENT" dataIndex="patient" key="patient" style={{color: 'blue'}} />
            <Column title="CONSULTATION" dataIndex="consulation" key="consulation" />
            <Column title="TEAM" dataIndex="team" key="team" align="center"/>
            <Column title="DOCTOR" dataIndex="doctor" key="doctor" align="center"/>
            <Column title="SLOT" dataIndex="slot" key="slot" />
            <Column title="STATUS" dataIndex="status" key="status" align="center"/>
            <Column title="INVOICE" dataIndex="invoice" key="invoice" align="center" 
              render={ (_, { invoice }) => (
                  <>
                    {invoice.map((tag) => {
                      let color = tag === 'paid' ? 'green' : 'volcano';
                      if (tag === 'refunded') {
                        color = '';
                      }

                      return (
                        <Tag color={color} key={tag} style={{borderRadius : '1rem'}} className = "px-3 py-1">
                          {tag.toLowerCase()}
                        </Tag>
                      );
                    })}
                  </>
    )}
    
            ></Column>
            <Column title="ACTION" dataIndex="action" key="action" align="center"/>
        </Table>
      </div>
  )
}

export default Appointments