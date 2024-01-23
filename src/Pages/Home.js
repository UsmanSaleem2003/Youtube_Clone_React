import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {

    const [playlistData, setPlaylistData] = useState(null);

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
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=90&playlistId=UU-rP-oFlxQGpSLYHBlhIWkg&key=AIzaSyDbD7MvZD4FESVfh-xloRD4VNWNBdj5vgo'
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPlaylistData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="video-grid">
            {playlistData &&
                playlistData.items.map((element) => (
                    <div className="video-item" key={element.id}>
                        <a href={`https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}`} className="video-link" target="_blank">
                            <img src={element.snippet.thumbnails.maxres.url} alt={element.snippet.title} className="video-thumbnail" />
                            <div className="video-info">
                                <div className="video-title">
                                    {element.snippet.title}
                                    <span className="dots">...</span>
                                </div>
                            </div>
                            <p className="channel_name">{element.snippet.channelTitle}</p>
                            {element.snippet.publishedAt && (
                                <p className="publishedat">{timeSincePublished(element.snippet.publishedAt)}</p>
                            )}
                        </a>
                    </div>
                ))}
        </div>
    );
}
