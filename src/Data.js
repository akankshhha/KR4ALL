import { MoreOutlined } from '@ant-design/icons'

const appointmentDetails = [{
    date : 'Jul 13, 2022',
    time : '9:00A.M.',
    communicationType: 'video',
    icon: '!',
    consultationType: 'General consultation',
    doctorName: 'Dr. Jacob George',
    appointmentStatus: 'completed'
},
{
    date : 'Jul 13, 2022',
    time : '9:00A.M.',
    communicationType: 'video',
    consultationType: 'General consultation',
    doctorName: 'Dr. Jacob George',
    appointmentStatus: 'completed'
},
{
    date : 'Jul 13, 2022',
    time : '9:00A.M.',
    communicationType: 'video',
    consultationType: 'General consultation',
    doctorName: 'Dr. Jacob George',
    appointmentStatus: 'completed'
},
{
    date : 'Jul 13, 2022',
    time : '9:00A.M.',
    communicationType: 'video',
    consultationType: 'General consultation',
    doctorName: 'Dr. Jacob George',
    appointmentStatus: 'completed'
},
{
    date : 'Jul 13, 2022',
    time : '9:00A.M.',
    communicationType: 'video',
    consultationType: 'General consultation',
    doctorName: 'Dr. Jacob George',
    appointmentStatus: 'completed'
},
]
const bookedAppointments = [
    {
      key: '1',
      Order_id: '2422562',
      patient: 'Risha Mahin',
      consulation: 'First Consultation',
      team: '',
      doctor: 'Anil Kumar',
      slot: 'Jul 3, 2021',
      'status':'cancelled',
      invoice: ['refunded'],
      action:  <MoreOutlined />
  
    },
    {
      key: '2',
      Order_id: '2429657',
      patient: 'Riju K',
      consulation: 'Risha Mahin',
      team: 'Medical Camp',
      doctor: 'Greg Ferguson',
      slot: 'Jul 3, 2021',
      'status':'Booked',
      invoice: ['paid'],
      action: <MoreOutlined />
  
    },
    {
      key: '3',
      Order_id: '2429657',
      patient: 'Prajeesh',
      consulation: 'Anytime Consult',
      team: '',
      doctor: 'Pankaj Dhir',
      slot: 'Jul 3, 2021',
      'status':'cancelled',
      invoice: ['paid'],
      action: <MoreOutlined />
  
    },
    {
      key: '4',
      Order_id: '2421751',
      patient: 'Nikita Gandhi',
      consulation: 'First Consultation',
      team: 'Medical Camp',
      doctor: 'Sujata Mohan',
      slot: 'Jul 3, 2021',
      'status':'No Show',
      invoice: ['unpaid'],
      action: <MoreOutlined />
  
    },
    {
      key: '5',
      Order_id: '2422455',
      patient: 'Darshan Singh',
      consulation: 'Second Opinion',
      team: '',
      doctor: 'Ram Dayanand',
      slot: 'Jul 3, 2021',
      'status':'cancelled',
      invoice: ['unpaid'],
      action: <MoreOutlined />
  
    },
    {
      key: '6',
      Order_id: '2421751',
      patient: 'Risha Mahin',
      consulation: 'First Consultation',
      team: '',
      doctor: 'Prakash Jhanti',
      slot: 'Jul 3, 2021',
      'status':'cancelled',
      invoice: ['paid'],
      action: <MoreOutlined />
  
    }
  ]

  const text = `lorem ipsum text`;

const profile = {
    'name'  : 'Risha Mahin',
    id : 926789,
    age : 32,
    gender : 'female',
    bloodGroup : 'B+',
    phone : 8907645376
}

const userInfo = {
  username : 'Ravi Khanna',
  userType : 'Super Admin'
}
const myGraphData = [
  {
    category : 'Online Visit',
    date : '26 Aug',
    value : 45
  },
  {
    category : 'Anytime Consult',
    date : '27 Aug',
    value : 21
  },
  {
    category : 'In-person Visit',
    date : '28 Aug',
    value : 0
  },
  {
    category : 'Anytime Consult',
    date : '29 Aug',
    value : 34
  },
  {
    category : 'In-person Visit',
    date : '30 Aug',
    value :  40
  },
  {
    category : 'Online Visit',
    date : '30 Aug',
    value : 19
  },
];

export {text, appointmentDetails, bookedAppointments, profile, userInfo, myGraphData}