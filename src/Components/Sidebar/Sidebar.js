import React from 'react';
import "./Sidebar.css";
import { BarsOutlined, RightOutlined } from '@ant-design/icons';
import youtube_logo from "../../Assets/youtube_logo.jpg";
import youtube_shorts_logo from "../../Assets/youtube-shorts-logo.png";
import youtube_subscriptions_logo from "../../Assets/youtube-subscription-logo.png";
import youtube_home_logo from "../../Assets/youtube-home-logo.png";
import your_channel from "../../Assets/your-channel.png";
import history_logo from "../../Assets/history-logo.png";
import watch_later_logo from "../../Assets/watch_later.png";
import your_videos_logo from "../../Assets/your_videos.png";
import trending_logo from "../../Assets/trending_logo.png";
import music_logo from "../../Assets/music_logo.png";
import gaming_logo from "../../Assets/gaming_logo.png";
import news_logo from "../../Assets/news_logo.png";
import sports_logo from "../../Assets/sports_logo.png";
import settings_logo from "../../Assets/settings_logo.png";
import report_history_logo from "../../Assets/report_history_logo.png";
import help_logo from "../../Assets/help_logo.png";
import feedback_logo from "../../Assets/feedback_logo.png";




export default function Sidebar() {

    const currentYear = new Date().getFullYear();

    return (
        <div className='sidebar'>
            <div className='sidebar-left-corner'>
                <BarsOutlined className='bars' />
                <img className='youtube_logo' src={youtube_logo} alt='youtube_logo' />
            </div>

            <div className='sidebar-categories'>
                <div className='sidebar-categories-home'>
                    <img className='sidebar-categories-home-icon' src={youtube_home_logo} alt='youtube_home_logo' />
                    <p>Home</p>
                </div>
                <div className='sidebar-categories-shorts'>
                    <img className='sidebar-categories-shorts-icon' src={youtube_shorts_logo} alt='youtube_shorts_logo' />
                    <p>Shorts</p>
                </div>
                <div className='sidebar-categories-subscriptions'>
                    <img className='sidebar-categories-subscriptions-icon' src={youtube_subscriptions_logo} alt='subscriptions_logo' />
                    <p>Subscriptions</p>
                </div>
            </div>

            <hr />

            <div className='you-categories'>
                <div className='you-categories-you'>
                    <h4>You <span> <RightOutlined className='right-arrow' /></span></h4>
                </div>
                <div className='you-categories-your-channel'>
                    <img className='your-channel' src={your_channel} alt='your-channel' />
                    <p>Your Channel</p>
                </div>
                <div className='you-categories-history-logo'>
                    <img className='sidebar-categories-history_logo' src={history_logo} alt='history-logo' />
                    <p>History</p>
                </div>
                <div className='you-categories-your-videos'>
                    <img className='sidebar-categories-your_videos_logo' src={your_videos_logo} alt='your_videos_logo' />
                    <p>Your Videos</p>
                </div>
                <div className='you-categories-watch-later'>
                    <img className='sidebar-categories-watch_later_logo' src={watch_later_logo} alt='watch_later_logo' />
                    <p>Watch Later</p>
                </div>
            </div>

            <hr />

            <div className='explore-categories'>
                <div className='explore-categories-explore'>
                    <h4>Explore</h4>
                </div>
                <div className='explore-categories-trending'>
                    <img className='your-channel' src={trending_logo} alt='trending_logo' />
                    <p>Trending</p>
                </div>
                <div className='explore-categories-music'>
                    <img className='sidebar-categories-music_logo' src={music_logo} alt='music_logo' />
                    <p>Music</p>
                </div>
                <div className='explore-categories-gaming'>
                    <img className='sidebar-categories-your_gaming_logo' src={gaming_logo} alt='gaming_logo' />
                    <p>Gaming</p>
                </div>
                <div className='explore-categories-news'>
                    <img className='sidebar-categories-news_logo' src={news_logo} alt='news_logo' />
                    <p>News</p>
                </div>
                <div className='explore-categories-sports'>
                    <img className='sidebar-categories-sports_logo' src={sports_logo} alt='sports_logo' />
                    <p>Sports</p>
                </div>
            </div>

            <hr />

            <div className='last-categories'>
                <div className='last-categories-settings'>
                    <img className='settings_logo' src={settings_logo} alt='settings_logo' />
                    <p>Settings</p>
                </div>
                <div className='last-categories-report-history'>
                    <img className='sidebar-categories-report_history_logo' src={report_history_logo} alt='report_history_logo' />
                    <p>Report History</p>
                </div>
                <div className='last-categories-help'>
                    <img className='sidebar-categories-help_logo' src={help_logo} alt='help_logo' />
                    <p>Help</p>
                </div>
                <div className='last-categories-feedback'>
                    <img className='sidebar-categories-feedback_logo' src={feedback_logo} alt='feedback_logo' />
                    <p>Send Feedback</p>
                </div>
            </div>

            <hr />

            <div className='last-texts'>
                <div className='firstpart'>
                    <span>About </span>
                    <span>Press </span>
                    <span>Copyright </span>

                    <br />

                    <span>Contact us </span>
                    <span>Creaters </span>

                    <br />

                    <span>Advertise </span>
                    <span>Developers </span>
                </div>

                <div className='secondpart'>
                    <span>Terms </span>
                    <span>Privacy </span>
                    <span>Policy & Safety </span>

                    <br />

                    <span>How youtube works </span>

                    <br />

                    <span>Test new features </span>
                </div>

            </div>
            <div className='copyright'>
                © {currentYear} Google LLC
            </div>
        </div>
    )
}
