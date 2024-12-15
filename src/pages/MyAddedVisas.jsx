import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyAddedVisaCard from "../components/MyAddedVisaCard";
import Modal2 from "../components/Modal2";

const MyAddedVisas = () => {
  const {user} = useContext(AuthContext)
  const [visa, setVisa] = useState([])
  const [singleVisa, setSingleVisa] = useState({})
  const [isOpen, setIsOpen] = useState(false);
  const email = user?.email;
  useEffect(()=>{
    fetch(`https://assignment-10-server-tau-nine.vercel.app/allVisas/email/${email}`)
    .then(res=>res.json())
    .then(data=>{
      setVisa(data);
    })
  },[email])

  const handleUpdate = (data) => {
    setSingleVisa(data)
    setIsOpen(true);
  }

  return (
    <div className="my-10">
    <div className="space-y-4">
      {
        visa.map(vis=> <MyAddedVisaCard 
          key={vis._id}
          visa={visa}
          setVisa={setVisa}
          handleUpdate={handleUpdate}
          vis={vis}></MyAddedVisaCard>)
      }
    </div>
    <Modal2 visa={singleVisa} isOpen={isOpen} setIsOpen={setIsOpen} singleVisa={visa} setVisa={setVisa}></Modal2>
    </div>
  );
};

export default MyAddedVisas;
