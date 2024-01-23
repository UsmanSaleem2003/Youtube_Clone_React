import React, { useState } from 'react';
import "./Navbar.css";
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import channel_icon from "../../Assets/channel_icon.png"
import profile_icon from "../../Assets/profile_icon.png"
import Categories from "../Categories_Horizontal/Categories";

export default function Navbar({ onSubmissionChange, onSubmissionText }) {

    const [searchbtn, setsearchbtn] = useState(false);

    const [searchtext, setsearchtext] = useState("");

    function searchquery(e) {
        const text = e.target.value;
        setsearchtext(text);
        // console.log(text);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmissionChange(true);
        onSubmissionText(searchtext);
    }


    return (
        <div className='navbar'>
            <div className='navbar-search-bar'>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={searchquery} onClick={() => { setsearchbtn(true) }} placeholder='Search' autoComplete='on' />
                    {/* {searchbtn ? <SearchOutlined className='searchicon' /> : null} */}
                    <SearchOutlined className='searchicon' />

                    {searchtext.trim() === "" ? (
                        <button type='submit' className='searchbar-search-btn' disabled>
                            <SearchOutlined className='search-btn-search-icon' />
                        </button>
                    ) : (
                        <button type='submit' className='searchbar-search-btn'>
                            <SearchOutlined className='search-btn-search-icon' />
                        </button>
                    )}

                </form>
                <div className='voice-search'>
                    <button className='voice-search-btn'><i class="fa fa-microphone"></i></button>
                </div>
            </div>

            <div className='bell'>
                <button className='bell-btn'>
                    <Badge className='bellicon-badge' count="5">
                        <BellOutlined className='bellicon' />
                    </Badge>
                </button>
            </div>

            <div className='channel'>
                <img src={channel_icon} alt='channel_icon' />
            </div>

            <div className='profile'>
                <img className='profile_icon' src={profile_icon} alt='profile_icon' />
            </div>

            <div className='categories'>
                <button className='categorie-all'>All</button>
                <Categories name="Mixes" />
                <Categories name="Music" />
                <Categories name="Bollywood Music" />
                <Categories name="Ghazal" />
                <Categories name="Reverberation" />
                <Categories name="Coolio" />
                <Categories name="Nusrat Fateh Ali Khan" />
                <Categories name="CSS" />
                <Categories name="Indie Music" />
                <Categories name="Python" />
                <Categories name="Reggae" />
                <Categories name="History" />
                <Categories name="Classical Music" />
                <Categories name="Live" />
                <Categories name="Podcasts" />
                <Categories name="News" />
                <Categories name="Pop Music" />
                <Categories name="Recently uploaded" />
                <Categories name="Watched" />
                <Categories name="New to you" />
            </div>
        </div>
    )
}
