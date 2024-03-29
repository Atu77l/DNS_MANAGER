import React,{useState,useEffect} from "react";
import {DELETE_RECORD, GET_RECORD, UPDATE_RECORD} from './../../constant/Constant'
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from 'react-toastify';


const DNSRecordList = ({ records, onDelete }) => {
    const [recordList,setRecordList]=useState([]);
    const [wait,setWait]=useState(false);

    const getRecord = (e) => {
        e.preventDefault();
        const config = { method: 'get', maxBodyLength: Infinity, url: GET_RECORD, headers: { 'Content-Type': 'application/json' }, data: data };
        axios.request(config)
          .then((response) => {
            const result = response?.data?.data;
            console.log("result at insert", result);
            setWait(false)
            setRecordList(result)
          })
          .catch((error) => {
            toast(error.response.data.message)
            setWait(false);
            return;
          });
      };
    const deleteRecord=(id)=>{
        e.preventDefault();
        const config = { method: 'get', maxBodyLength: Infinity, url: `${DELETE_RECORD}/${id}`, headers: { 'Content-Type': 'application/json' }, data: data };
        axios.request(config)
          .then((response) => {
            const result = response?.data?.data;
            console.log("result at insert", result);
            setWait(false)
            setRecordList(result)
          })
          .catch((error) => {
            toast(error.response.data.message)
            setWait(false);
            return;
          });
    }
    const updateRecord=(id)=>{
        e.preventDefault();
        const config = { method: 'get', maxBodyLength: Infinity, url: `${UPDATE_RECORD}/${id}`, headers: { 'Content-Type': 'application/json' }, data: data };
        axios.request(config)
          .then((response) => {
            const result = response?.data?.data;
            console.log("result at insert", result);
            setWait(false)
            setRecordList(result)
          })
          .catch((error) => {
            toast(error.response.data.message)
            setWait(false);
            return;
          });
    }
    return (
      <ul>
        {recordList.map((record) => (
          <li key={record.id}>
            {record.type}: {record.value}
            <button onClick={() => deleteRecord(record.id)}>Delete</button>
            <button onClick={() => updateRecord(record.id)}>Update</button>
          </li>
        ))}
      </ul>
    );
  };

  export default DNSRecordList