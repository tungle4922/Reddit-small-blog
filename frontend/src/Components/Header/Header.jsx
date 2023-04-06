import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./header.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const Header = (props) => {
  const { setEdit } = props;
  // const user =  useSelector((state) => state.user)
  const [isLoading, setisLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState([
    {
      name: "Your name...",
      age: "Age...",
      about: "About you...",
      avaUrl: "https://i.redd.it/ksmb0m02ppy51.png",
      themeColor: "#0000ff",
    },
  ]);

  const handleEdit = () => {
    setEdit(true);
  };

  //Get profile info from database
  useEffect(() => {
    const getProductInfo = async () => {
      try {
        // const res = await axios.get('http://localhost:8080/profile')
        const res = await axios.get(
          "https://reddit-small-blog-backend.vercel.app/profile"
        );
        setProfileInfo(res.data);
        setisLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProductInfo();
  }, []);

  return (
    <>
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}

      <header
        style={{
          backgroundColor: `${profileInfo[0].themeColor}`,
          backgroundImage: `linear-gradient(180deg,${profileInfo[0].themeColor} 2%, ${profileInfo[0].themeColor}, 65%, #181818 100%`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img src={profileInfo[0].avaUrl} alt="" className="info-ava" />
          <div className="info-username">{profileInfo[0].name}</div>
          <div className="info-age">{profileInfo[0].age}</div>
          <div className="info-about">{profileInfo[0].about}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
