import { useContext } from 'react'
import { Agecontext } from '../App'
import { examdata } from '../../data/db'
import { ExternalLink } from 'react-external-link'
const Filterdetails = () => {
    const{data} = useContext(Agecontext)
    console.log(data)
    const filtered = examdata.filter(i => i.minage === parseInt(data.age) );
    
   
  return ( 
  <div className="filter">
  
    <h2>Display Data</h2>
    <h1 className='text-[purple] '>Welcome {data.name},</h1>
     {/* <p>{data.name}</p>
     <p>{data.age}</p> */}
     {/* <p>{data.sex}</p> */}
     {/* <p>{data.education}</p> */}
{/*      
      {filtered.map((d)=>(
      <ul key={d.id}>
        <li className='mb-3'>{d.ename}</li>      
        <li className='mb-3'>{d.minage}</li>
        <li className='mb-3'>{d.minedu}</li>
        <li className='mb-3'>{d.ExamFee}</li>
        <li className='mb-3'>{d.physique}</li>
        <li className='mb-3'>{d.posts}</li>
        <li className='mb-3'>{d.ename}</li>
        <li className='mb-3'>{d.seletionprocess}</li>
        <li className='mb-3'>{d.approxsalary}</li>
        <li className='mb-3'>{d.link}</li>
      </ul>
))} */}


       <table className=' border-solid border-[1px] mr-3 content-center border-green-300'  >
          <thead >
            <th>Exam Name</th>
            <th>Minimum Age</th>
            <th>Educational qualification</th>
            <th>link</th>
          </thead>
          {filtered.map((d)=>(
          <tbody>
            <tr>
              <td className=' text-2xl text-ellipsis'>{d.ename}</td>
              <td>{d.minage}</td>
              <td>{d.minedu}</td>
             
              <ExternalLink href={d.link}>
              <td className='text-red-500 hover:text-blue-500' >{d.link}</td>
              </ExternalLink>
            </tr>
          </tbody>
          ))}
        </table>
    



    
  </div>
   );
}
 
export default Filterdetails;