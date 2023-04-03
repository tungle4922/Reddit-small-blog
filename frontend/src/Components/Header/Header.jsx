import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./header.css";
import { useState } from "react";

const Header = (props) => {
  const {setEdit} = props 
  // const user =  useSelector((state) => state.user)
  const [profileInfo, setProfileInfo] = useState([{}]);

  const handleEdit = () => {
    setEdit(true)
  }

  //Get profile info from database
  useEffect(()=> {
    const getProductInfo = async () => {
      try {
        const res = await axios.get('http://localhost:8080/profile')
        setProfileInfo(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getProductInfo()
  }, [])

  return (
    <header
      style={{
        backgroundColor: `${profileInfo[0].themeColor}`,
        backgroundImage:
          `linear-gradient(180deg,${profileInfo[0].themeColor} 2%, ${profileInfo[0].themeColor}, 65%, #181818 100%`,
      }}
    >
      <div className="info-container">
        <div className="info-edit" onClick={handleEdit}>Edit</div>
        <img
          src={profileInfo[0].avaUrl}
          alt=""
          className="info-ava"
        />
        <div className="info-username">{profileInfo[0].name}</div>
        <div className="info-age">{profileInfo[0].age}</div>
        <div className="info-about">{profileInfo[0].about}</div>
      </div>
    </header>
  );
};

export default Header;
