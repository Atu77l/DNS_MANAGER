import React from 'react';
import { CSVReader } from 'react-csv';
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from 'react-toastify';

const BulkUploadComponent = ({ onFileUpload }) => {
  const handleFileUpload = (data) => {
    // Process the uploaded CSV data
    onFileUpload(data);
  };

  return (
    <div>
      <h2>Bulk Upload</h2>
      <CSVReader onFileLoaded={handleFileUpload} />
    </div>
  );
};

export default BulkUploadComponent;
