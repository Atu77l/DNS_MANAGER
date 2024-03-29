import React from 'react'
import AddRecord from './AddRecord'
import RecordList from './RecordList'
import Navbar from '../Navbar'
import Footer from '../Footer'
import IntegrateCsv from './IntegrateCsv'
import GraphChart from './GraphChart'
import Filter from './Filter'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Filter/>
        <AddRecord/>
        <div className='text-black text-xl flex text-center justify-center'>OR</div>
        <IntegrateCsv/>
        <RecordList/>
        <GraphChart/>
        <div className='fixed bottom-0 w-full'><Footer/></div>
    </div>

  )
}

export default Dashboard

// {
//   "domain": "example.com",
//   "records": [
//     {
//       "id": 1,
//       "type": "A",
//       "name": "example.com",
//       "value": "192.0.2.1"
//     },
//     {
//       "id": 2,
//       "type": "CNAME",
//       "name": "www.example.com",
//       "value": "example.com"
//     },
//     {
//       "id": 3,
//       "type": "MX",
//       "name": "example.com",
//       "priority": 10,
//       "value": "mail.example.com"
//     },
//     {
//       "id": 4,
//       "type": "A",
//       "name": "subdomain.example.com",
//       "value": "192.0.2.2"
//     },
//     {
//       "id": 5,
//       "type": "TXT",
//       "name": "example.com",
//       "value": "v=spf1 mx -all"
//     },
//     {
//       "id": 6,
//       "type": "A",
//       "name": "mail.example.com",
//       "value": "192.0.2.3"
//     },
//     {
//       "id": 7,
//       "type": "NS",
//       "name": "example.com",
//       "value": "ns1.example.com"
//     },
//     {
//       "id": 8,
//       "type": "AAAA",
//       "name": "example.com",
//       "value": "2001:db8::1"
//     },
//     {
//       "id": 9,
//       "type": "SRV",
//       "name": "_sip._udp.example.com",
//       "priority": 10,
//       "weight": 5,
//       "port": 5060,
//       "target": "sipserver.example.com"
//     },
//     {
//       "id": 10,
//       "type": "CNAME",
//       "name": "mail.example.com",
//       "value": "ghs.google.com"
//     }
//   ]
// }
