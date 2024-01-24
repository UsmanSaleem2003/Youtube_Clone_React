import React, { useState, useEffect } from 'react';
import "./SearchVideo.css";

export default function SearchVideo(props) {

    const [searchedTXT, setsearchedTXT] = useState(null);

    function timeSincePublished(publishedAt) {
        const now = new Date();
        const publishedDate = new Date(publishedAt);
        const timeDiff = now - publishedDate;

        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return days === 1 ? `${days} day ago` : `${days} days ago`;
        } else if (hours > 0) {
            return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
        } else if (minutes > 0) {
            return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
        } else {
            return seconds <= 1 ? `${seconds} second ago` : `${seconds} seconds ago`;
        }
    }

    useEffect(() => {
        const fetch_Searched_Data = async () => {
            try {
                const response_of_searched_keyword = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY]&maxResults=15&type=video&part=snippet&q=${props.text}`
                );

                if (!response_of_searched_keyword.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response_of_searched_keyword.json();
                setsearchedTXT(data);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching searched data:', error);
            }
        };

        fetch_Searched_Data();
    }, [props.text]);





    return (
        <div className='search-list'>
            {searchedTXT && searchedTXT.items.map((item) => (
                <div className='search-item' key={item.id.videoId}>
                    <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} className='searched-video-link' target='_blank'>
                        <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} className='video-thumbnail-search' />
                        <div className='video-all-info'>
                            <div className="video-info">
                                <div className="video-title-div">
                                    <h2 className='video-title-search'>{item.snippet.title}</h2>
                                </div>
                                {item.snippet.publishedAt && (
                                    <p className="publishedat-search"><span className='time-clock'>⌚</span>{timeSincePublished(item.snippet.publishedAt)}</p>
                                )}
                            </div>
                            <br />
                            <h4 className="channel_name-search">Channel : {item.snippet.channelTitle}</h4>
                            <p className="description">{(item.snippet.description)}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

