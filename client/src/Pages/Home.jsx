import {useMemo} from 'react'
import * as React from 'react'
import {useTable} from 'react-table'
// import { examdata } from '../../data/db'
import fakeData from '../../data/MOCK_DATA (1).json'
import { Coloumn } from '../components/Coloumn'

const Home = () => {
  const coloumns = useMemo(()=>Coloumn,[])
  const data = useMemo(()=>fakeData,[])
  const tableInstance = useTable({coloumns,data})
  const {getTableBodyProps,getTableProps,headerGroups,rows,prepareRow} = tableInstance
  console.log(fakeData)


  return(
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
  
}


export default Home;
