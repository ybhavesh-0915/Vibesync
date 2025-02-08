import React from 'react'
import "../CSS/Footer.css"
import Slider from '@mui/material/Slider';
import img7 from "../Images/img7.jpg"
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-buttons">
                    <button type="button" className="footer-btn active-btn">
                        <i className="ri-music-fill"></i><span>Home</span>
                    </button>
                    <button type="button" className="footer-btn">
                        <i className="ri-search-line"></i><span>Search</span>
                    </button>
                    <button type="button" className="footer-btn">
                        <i className="ri-play-list-line"></i><span>PlayList</span>
                    </button>
                    <button type="button" className="footer-btn">
                        <i className="ri-user-3-line"></i><span>You</span>
                    </button>
                </div>
                <div className="footer-music-player">
                    <div className="footer-music-info">
                        <img src={img7} alt="cover" />
                        <div>
                            <div className="player-song-title">Chammak Chalo</div>
                            <div className="player-artist-name">Bhavesh, Bhupender</div>
                        </div>
                        <input type="checkbox" className="footer-loop" />

                    </div>
                    <Slider
                        className="footer-slider"
                        aria-label="time-indicator"
                        size="small"
                        min={0}
                        step={1}
                        sx={(t) => ({
                            padding: 0,
                            color: 'rgb(30, 215, 96)',
                            height: 3,
                            '& .MuiSlider-thumb': {
                                width: 8,
                                height: 8,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px ${'rgba(30, 215, 96, 0.28)'}`,
                                },
                                '&.Mui-active': {
                                    width: 15,
                                    height: 15,
                                    color: 'rgb(30, 215, 96)',
                                },
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.3,
                                color: 'rgba(255, 255, 255,0.5)',
                            }
                        })}
                    />
                    <div className="footer-player-controls">
                        <input type="checkbox" className="footer-like" />
                        <div className="footer-music-ctrls">
                            <button type="button" className="footer-backward-btn"><i className="ri-skip-back-fill"></i></button>
                            <button type="button" className="footer-playpause-btn"><i className="ri-pause-large-fill"></i></button>
                            <button type="button" className="footer-forward-btn"><i className="ri-skip-forward-fill"></i></button>
                        </div>
                        <button type="button" className="footer-playlist-add-btn btn"><i className="ri-play-list-add-line"></i></button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
