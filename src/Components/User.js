import React from 'react'
import logo from "../Images/logo.png"
import user from "../Images/user.png"
import img6 from "../Images/img7.jpg"
import "../CSS/User.css"

const User = () => {
  return (
    <>
      <section className="user">
        <div className="user-header">
          <div className="web-title">
            <img className="web-logo" src={logo} alt="website logo" />VibeSync
          </div>
          <button type="button" className="logout-btn">Log out</button>
        </div>
        
        <section className="user-profile-section">
          <div className="user-profile">
            <div className="user-profile-img">
              <input type="file" name="userImg" id="user-img" accept="image/*" />
              <img src={user} alt="user-img" />
              <label htmlFor="user-img" className="upload-btn"><i className="ri-upload-2-line"></i></label>
            </div>
            <div className="user-basic-info">
              <div className="user-name">Name: bhavesh yadav</div>
              <span className="hr"></span>
              <div className="user-email">Email Id: bhavesh@gmail.com</div>
            </div>
          </div>

          <div className="user-song-lang">
            
          </div>
        </section>
      </section>
    </>
  )
}

export default User
