import React from 'react'
import { Collapse } from 'antd';
import { text } from '../Data'
import "../DoctorQueue/DoctorQueue.css"

const { Panel } = Collapse;

const PastAppointments = () => {
  return (
    <div>
           <div className="pastAppointments p-5 col-lg-9">
          <h6>Past Appointments</h6>
          <Collapse accordion expandIconPosition="end" >
              <Panel header="This is panel header 1" key="1" className="p-2" >
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2" className="p-2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3" className="p-2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 4" key="4" className="p-2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 5" key="5" className="p-2">
                <p>{text}</p>
              </Panel>
          </Collapse>
        </div>
    </div>
  )
}

export default PastAppointments