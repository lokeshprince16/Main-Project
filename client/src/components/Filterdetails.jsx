import { useContext,useState } from 'react'
import { Agecontext } from '../App'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { examdata } from '../../data/db'
import React from 'react';
const Filterdetails = () => {

    const{data} = useContext(Agecontext)
    console.log(data)
    const filtered = examdata.filter(i => i.minage <= parseInt(data.age) );

  
    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (rowId) => {
      if (expandedRow === rowId) {
        setExpandedRow(null);
      } else {
        setExpandedRow(rowId);
      }
      
    };

    const renderRowDetails = (b) => {
      return (
        <TableRow>
          <TableCell colSpan={Object.keys(b).length + 1}>
            {Object.keys(b).map((key) => (
              <div key={key} className='mb-1'>
                <span className="font-semibold">{key}:</span> {b[key]}
              </div>
            ))}
          </TableCell>
        </TableRow>
      );
    };

    
   
  return ( 
  <div className="filter">
    <TableContainer component={Paper}>
      <Table  className="min-w-full divide-y divide-gray-200">
        <TableHead>
          <TableRow>
            <TableCell className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</TableCell>
            <TableCell className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</TableCell>
            <TableCell className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</TableCell>
            <TableCell className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {filtered.map(b => (
            <React.Fragment key={b.id}>
                <TableRow className="cursor-pointer hover:bg-gray-100" onClick={() => handleRowClick(b.id)}>
              <TableCell className="px-6 py-4 whitespace-nowrap">{b.id}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">{b.ename}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">{b.minage}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Details</Button>
              </TableCell>
            </TableRow>
            {expandedRow === b.id && renderRowDetails(b)}
         </React.Fragment>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  </div>
   );
}
 
export default Filterdetails;