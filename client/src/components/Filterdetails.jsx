import { useContext,useState } from 'react'
import { Agecontext } from '../App'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { examdata } from '../../data/db'
import React from 'react';
import { Link } from 'react-router-dom';
const Filterdetails = () => {
  const style ={
    color:"gray"
  }
  const styles ={
    color:"white"
  }
    const{data} = useContext(Agecontext)
    console.log(data)
    const filtered = examdata.filter(i => i.minage <= parseInt(data.age) );
    const [expandedRow, setExpandedRow] = useState(null);
    const excludedrow =['id'];
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
            <div className="p-2 bg-gray-200 grid grid-cols-2 gap-4 divide-y-2 overflow-x-auto">
            {Object.keys(b).map((key) => (
              !excludedrow.includes(key) &&(
              <React.Fragment key={key} className='mb-1 '>
                <span className="font-[poppins] text-green-600 text-md uppercase  ] " >
                  {key}:
                </span> 
                <span className='rounded font-[playfai Display] ' >
                  {b[key]}
                </span>
                </React.Fragment>
              )
            ))}
            </div>
          </TableCell>
        </TableRow>
      );
    };

    
   
  return ( 
  <div className="filter">
    <TableContainer component={Paper}>
      <Table  className="min-w-full divide-y divide-gray-200">
        <TableHead >
          <TableRow className='text-white'>
            <TableCell style={styles} className="px-6 py-3 text-white bg-gray-500 text-left text-xs font-medium  uppercase tracking-wider">ID</TableCell>
            <TableCell style={styles} className="px-6 py-3 text-white bg-gray-500 text-left text-xs font-medium  uppercase tracking-wider">Name</TableCell>
            <TableCell style={styles} className="px-6 py-3 text-white bg-gray-500 text-left text-xs font-medium  uppercase tracking-wider">Minimum Age</TableCell>
            <TableCell style={styles} className="px-6 py-3 text-white bg-gray-500 text-left text-xs font-medium  uppercase tracking-wider">Visit Site ✈️</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {filtered.map((b,index) => (
            <React.Fragment key={b.id}>
                <TableRow className={`cursor-pointer ${index % 2 === 0 ? 'bg-emerald-200' : 'bg-emerald-100'} hover:bg-red-100`} onClick={() => handleRowClick(b.id)}>
              <TableCell  style={style} className="px-6 py-4 text-white whitespace-nowrap">{b.id}</TableCell>
              <TableCell  style={style} className="px-6 py-4 text-white whitespace-nowrap">{b.ename}</TableCell>
              <TableCell  style={style}className="px-6 py-4 text-white whitespace-nowrap">{b.minage}</TableCell>
              <TableCell  style={style} className="px-6 py-4 whitespace-nowrap">
                <Link to ={b.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Link</Link>
                {/* <Button className="bg-violet-500 hover:bg-blue-700 text-violet font-bold py-2 px-4 rounded" >Details</Button> */}
              </TableCell>
            </TableRow>
            {expandedRow === b.id && renderRowDetails(b)}
         </React.Fragment>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>


    <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sevillana&display=swap" rel="stylesheet"></link>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sevillana&display=swap" rel="stylesheet"></link>
  </div>
   );
}
 
export default Filterdetails;