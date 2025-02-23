import React, { useState } from 'react';

const Movie: React.FC = () => {
    const [query, setQuery] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const fetchVideo = async () => {
        try {
            const response = await fetch(`https://api.sora.com/search?query=${query}`);
            const data = await response.json();
            setVideoUrl(data.videoUrl);
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleInputChange} />
            <button onClick={fetchVideo}>Search</button>
            {videoUrl && (
                <div>
                    <video width="600" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
};

export default Movie;