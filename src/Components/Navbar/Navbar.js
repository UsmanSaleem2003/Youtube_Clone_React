import React, { useState } from 'react';
import "./Navbar.css";
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import channel_icon from "../../Assets/channel_icon.png"
import profile_icon from "../../Assets/profile_icon.png"

export default function Navbar() {

    const [searchbtn, setsearchbtn] = useState("false");


    return (
        <div className='navbar'>

            <div className='navbar-search-bar'>
                <form>
                    <input type='text' onClick={() => { setsearchbtn(true) }} placeholder='Search' autoComplete='on' />
                    {searchbtn ? <SearchOutlined className='searchicon' /> : null}
                    <button className='searchbar-search-btn'><SearchOutlined className='search-btn-search-icon' /></button>
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

            {/* <div className='categories'>
                <button>All</button>
            </div> */}
        </div>
    )
}
