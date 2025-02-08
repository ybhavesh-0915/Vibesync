import React from 'react'
import logo from "../Images/logo.png"
import user from "../Images/user.png"
import img7 from "../Images/img7.jpg"
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
          <div className="user-song-lang-header">
            <span>Song Language</span>
            <button type="button" className="update-song-lang-btn">Update</button>
          </div>
          <div className="user-selected-lang">
            <span>English</span>
            <span>Hindi</span>
            <span>Marathi</span>
          </div>
        </div>

        <div className="user-fav-artist">
          <div className="user-fav-artist-header">
            <span>Favoutite Artist</span>
            <button type="button" className="update-fav-artist-btn">Update</button>
          </div>
          <div className="user-selected-artist">
            <div className="selected-artist">
              <img src={img7} alt="artist" />
              <span>Rahat Fateh Ali Khan</span>
            </div>

            <div className="selected-artist">
              <img src={img7} alt="artist" />
              <span>Rahat Fateh Ali Khan</span>
            </div>

            <div className="selected-artist">
              <img src={img7} alt="artist" />
              <span>Rahat Fateh Ali</span>
            </div>

            <div className="selected-artist">
              <img src={img7} alt="artist" />
              <span>Rahat Fateh Ali Khan</span>
            </div>
          </div>
        </div>

        <div className="about-site">
          <div className="about-site-header">About Us</div>
          <div className="about-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut illo a, aspernatur nesciunt deserunt, natus perspiciatis sit modi officiis laudantium delectus veritatis, officia fugiat numquam tenetur laborum! Hic, quas nostrum.
          </div>
        </div>

        <div className="space"></div>
      </section >
    </>
  )
}

export default User
