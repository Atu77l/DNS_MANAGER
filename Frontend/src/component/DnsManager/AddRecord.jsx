import React, { useState } from 'react';
import { ADD_RECORD } from './../../constant/Constant'
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from 'react-toastify';

const DNSRecordForm = ({ onSubmit }) => {
  const [recordType, setRecordType] = useState('');
  const [recordValue, setRecordValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { type: recordType, value: recordValue };
    console.log(data, 'data');
    const config = { method: 'post', maxBodyLength: Infinity, url: ADD_RECORD, headers: { 'Content-Type': 'application/json' }, data: data };
    axios.request(config)
      .then((response) => {
        const result = response?.data?.data;
        console.log("result at insert", result);
        setWait(false)

        setRecordType('');
        setRecordValue('');
        navigate('/list');
      }
      )
      .catch((error) => {
        toast(error.response.data.message)
        setWait(false);
        return;
      });

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Record Type:
        <select value={recordType} onChange={(e) => setRecordType(e.target.value)}>
          <option value="">Select Record Type</option>
          <option value="A">A (Address) Record</option>
          <option value="AAAA">AAAA (IPv6 Address) Record</option>
          <option value="CNAME">CNAME (Canonical Name) Record</option>
          <option value="MX">MX (Mail Exchange) Record</option>
          <option value="NS">NS (Name Server) Record</option>
          <option value="PTR">PTR (Pointer) Record</option>
          <option value="SOA">SOA (Start of Authority) Record</option>
          <option value="SRV">SRV (Service) Record</option>
          <option value="TXT">TXT (Text) Record</option>
          <option value="DNSSEC">DNSSEC</option>
        </select>
      </label>
      <label>
        Record Value:
        <input type="text" value={recordValue} onChange={(e) => setRecordValue(e.target.value)} />
      </label>
      <button type="submit">Add Record</button>
    </form>
  );
};

export default DNSRecordForm