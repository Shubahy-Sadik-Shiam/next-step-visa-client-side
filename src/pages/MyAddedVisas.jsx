import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyAddedVisaCard from "../components/MyAddedVisaCard";

const MyAddedVisas = () => {
  const {user} = useContext(AuthContext)
  const [visa, setVisa] = useState([])
  const email = user?.email;
  useEffect(()=>{
    fetch(`http://localhost:4000/allVisas/email/${email}`)
    .then(res=>res.json())
    .then(data=>{
      setVisa(data);
    })
  },[email])

  return (
    <div className="space-y-4">
      {
        visa.map(vis=> <MyAddedVisaCard 
          key={vis._id}
          vis={vis}></MyAddedVisaCard>)
      }
    </div>
  );
};

export default MyAddedVisas;
