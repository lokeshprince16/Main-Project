import { filledInputClasses } from "@mui/material";
import { examdata } from "../../data/db"
import { useParams } from "react-router-dom";

const  Examdetails = () => {
  const{id} = useParams();
  const data = examdata.find(data => data.id === parseInt(id))
  const fildata =data.map((d)=>(<div key={d.id}>{d.ename}</div>))
                    

    
    return(
      <div className="examdetails">

      {fildata && <article>
        {fildata.id}
        </article>}
      </div>
    )
}

export default Examdetails
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 