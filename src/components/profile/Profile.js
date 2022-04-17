import { useState,useEffect } from "react"
import Image from './image.jpg'
import './Profile.css'

const Profile = () => {

    const [fullName,setFullName]=useState('ismail');
    const [bio,setBio]=useState('odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati');
    const [imgSrc,setImgSrc]=useState(Image);
    const [profession,setProfession]=useState('Full Stack developer');
    const[timer,setTimer]=useState(0);
    //useEffect hook
    useEffect(() => {
        const interval= setInterval(() =>{
            setTimer(timer+1);
        },1000)
        return () => clearInterval(interval)
    },[timer])

  return (
    <div className="container">
        <div className="image-container">
        <img src={imgSrc} alt="profile"></img>
        </div>
        <div className="bot-container">    
        <h3>{fullName}</h3>
        <h4>{profession}</h4>
        <p>{bio}</p>
        <h2>{timer}</h2>
        </div>   
        
        
    </div>
  )
}

export default Profile