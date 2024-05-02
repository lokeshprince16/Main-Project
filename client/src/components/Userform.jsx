import React,{ useState,useContext } from 'react'
import photo1 from '../Images/SSC.jpeg'
import photo2 from '../Images/TNPSC.jpg'
import photo3 from '../Images/UPSC.jpeg'
import bgimage from '../Images/bg.webp'
import bgimage2 from '../Images/Designer.png'
import bgimage4 from '../Images/Designer4.png'
import bgimage3 from '../Images/Designer 3.png'
import{ExternalLink} from 'react-external-link'
import { Agecontext } from '../App'
import { useNavigate } from 'react-router-dom'



const Userform = () => {
   const{setdata} = useContext(Agecontext)
   const[name,setName] = useState('')
   const [sex, setSex] = useState('')
   const [age, setAge] = useState('');
   const [education, setEducation] = useState('');
  
   console.log(name,sex,age,education)
   const navigate = useNavigate()

   
   
   
   
   const handleSubmit = async(e) => {
      e.preventDefault()
      await setdata({ name,sex,age,education });
      setName('');
      setSex('');
      setAge('');
      setEducation('');
      navigate('/filter')

      
      
      
      
    }
  
   

   const style = {backgroundImage:`url("${bgimage4}")`,
            // height: "100vh",
            // marginTop: "-70px",
            // fontSize: "50px",
             backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
         }

    const images = [
        {id:1,img:photo1,title:"SSC",link:'https://ssc.nic.in/'},
        {id:2,img:photo2,title:"TNPSC",link:'https://www.tnpsc.gov.in/'},
        {id:3,img:photo3,title:"UPSC",link:'https://upsc.gov.in/'}
    ]

  return (
    <div style={style} >

   {/* <!-- component --> */}
    <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

    {/* <!-- ====== Contact Section Start --> */}
    <section className=" py-20 lg:py-[120px]  ">
       <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
             <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                <div className="max-w-[570px] mb-12 lg:mb-0">,
                    <span className="container content-start justify-items-start">
                        <div className="recipe-list">
                                {images.map((images) => (
                                    <div key={images.id}> 
                                        <div className='rounded  bg-white min-w-72 mb-5  max-w-sm  md:ml-36 md:max-w-md lg:ml-72 lg:max-w-3xl overflow-hidden shadow-lg'>
                                          <img className='w-full h-[260px] transition-all  z-20  ease-in-out' src={images.img} />
                                        <div className='px-6 py-4'>
                                        <ExternalLink href={images.link} >
                                        <h2 className='text-violet-500  text-center font-bold'>{images.title}</h2>
                                        </ExternalLink>
                                        </div>
                                        </div>
                                    
                           </div>         
                            ))}
                        </div>
                     </span>
                </div>
             </div>
             <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="bg-transparent  relative rounded-lg p-8 sm:p-12 shadow-lg">
                   <form onSubmit={handleSubmit} className='form border-sky-900'>
                      <div className="mb-6">
                        <label className='text-blue-700 text-2xl'>Name</label>
                         <input
                            type="text"
                            placeholder="Your Name..."
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            />
                      </div>
                      <div className="mb-6">
                      <label  className='text-blue-700 text-2xl'>Gender</label>
                         <select
                            type="string"
                            placeholder="Enter Your Sex"
                            value={sex}
                            onChange={(e)=>setSex(e.target.value)}
                            
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            >
                           <option value=" ">Select</option>
                           <option value="Male">Male</option>
                           <option value="Female">Female</option>

                            </select>
                      </div>
                      <div className="mb-6">
                      <label className='text-blue-700 text-2xl'>Age</label>
                         <select
                            type="number"
                            placeholder="How old are U"
                            id='age'
                            value={age}
                            onChange={(e)=>setAge(e.target.value)}
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            >
                             <option value=' '>Select</option>
                             <option value='18' >Above-18</option>
                             <option value='21' >Above-21</option>
                            </select>
                      </div>
                      <div className="mb-6">
                      <label className='text-blue-700 text-2xl'>Educational Qualification</label>
                         <select
                            rows="6"
                            placeholder="Highest Education qualification ..."
                            value={education}
                            onChange={(e)=>setEducation(e.target.value)}
                            id='education'
                            className="
                            w-full
                            rounded
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[f0f0f0]
                            resize-none
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            >
                              <option value=" ">Select</option>
                              <option value="SSLC">SSLC</option>
                              <option value="UG degree in any recognized University">B.A</option>
                              <option value="UG degree in any recognized University">B.Sc</option>
                              <option value="UG degree in any recognized University">B.COM</option>
                              <option value="UG degree in any recognized University">BCA</option>
                              <option value="UG degree in any recognized University">B.E</option>
                              <option value="UG degree in any recognized University">B.TECH</option>
                              <option value="UG degree in any recognized University">OTHER UG COURSES</option>
                              <option value="UG degree in any recognized University">SSLC</option>
                              <option value="UG degree in any recognized University">SSLC</option>
                              <option value="SSLC">SSLC</option>
                              <option value="PG">PG</option>
                            </select>
                      </div>
                      <div>
                         <button
                            type="submit"
                            className="
                            w-full
                            text-white
                            bg-green-500
                            bg-primary
                            rounded
                            border border-primary
                            p-3
                            transition
                            hover:bg-opacity-90
                            "
                            >
                           Search  Opportunities🧐
                         </button>
                      </div>
                   </form>
                   <div>
                      <span className="absolute -top-10 -right-9 z-[-1]">
                         <svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                               d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                               fill="#3056D3"
                               />
                         </svg>
                      </span>
                   </div>
                </div>
             </div>
          </div>
       </div>

    </section>
   
   </div>
  )
}

export default Userform;