import Image from "next/image";
import Sidebar from "../../components/Sidebar.jsx";
import InitTable from "../../components/Initiave_table.jsx";


export default function Home() {
  return (
    <div> 
      <div className="container" style={{display:"flex",justifyContent:"space-between"}}> 
        <Sidebar/>
        <InitTable/>
        <Sidebar/>
      </div>
    </div>
   )
  
}
