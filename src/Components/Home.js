import React from 'react'
import "../CSS/Home.css"
import logo from "../Images/logo.png"
import img5 from "../Images/img5.jpeg"
const Home = () => {
    return (
        <>
            <section className="home">
                <div className="home-header">
                    <div className="web-title">
                        <img className="web-logo" src={logo} alt="website logo" />VibeSync
                    </div>
                    <div className="home-buttons">
                        <button type="button" className="music-btn active-btn">Musics</button>
                        <button type="button" className="podcast-btn">Podcasts</button>
                    </div>
                </div>
                <section className="music-section">
                    <div className="music-wrapper">
                        <h1 className="slider-heading">Trending Now</h1>
                        <div className="music-slider">
                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>
                        </div>
                    </div>

                    <div className="music-wrapper">
                        <h1 className="slider-heading">Recommended for you</h1>
                        <div className="music-slider">
                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>
                        </div>
                    </div>

                    <div className="music-wrapper">
                        <h1 className="slider-heading">For You</h1>
                        <div className="music-slider">
                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>
                        </div>
                    </div>

                    <div className="music-wrapper">
                        <h1 className="slider-heading">Based on recent</h1>
                        <div className="music-slider">
                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>
                        </div>
                    </div>

                    <div className="music-wrapper">
                        <h1 className="slider-heading">More of what you like</h1>
                        <div className="music-slider">
                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>

                            <div className="music-card">
                                <img className="music-cover" src={img5} alt="Already Know" loading="lazy" />
                                <div className="music-title" title="Title of song">Already Know</div>
                                <div className="music-artist" title="Artist">Folivi, Bhavesh, Bhupender, Bhavika</div>
                            </div>
                        </div>
                    </div>

                    <div className="artist-wrapper">
                        <h1>Your Favourite Artists</h1>
                        <div className="artist-slider">
                            <div className="artist-card">
                                <div className="artist-cover-img">
                                    <img src={img5} alt="artist-image" />
                                </div>
                                <div className="artist-name">Rahat Fateh Ali Khan</div>
                            </div>

                            <div className="artist-card">
                                <div className="artist-cover-img">
                                    <img src={img5} alt="artist-image" />
                                </div>
                                <div className="artist-name">Arjit Singh</div>
                            </div>

                            <div className="artist-card">
                                <div className="artist-cover-img">
                                    <img src={img5} alt="artist-image" />
                                </div>
                                <div className="artist-name">Arjit Singh</div>
                            </div>

                            <div className="artist-card">
                                <div className="artist-cover-img">
                                    <img src={img5} alt="artist-image" />
                                </div>
                                <div className="artist-name">Arjit Singh</div>
                            </div>

                            <div className="artist-card">
                                <div className="artist-cover-img">
                                    <img src={img5} alt="artist-image" />
                                </div>
                                <div className="artist-name">Arjit Singh</div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="space"></div>
            </section>
        </>
    )
}

export default Home
