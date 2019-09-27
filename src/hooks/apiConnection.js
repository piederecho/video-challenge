import { useState, useEffect } from 'react';

const apiConnection = (url) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  console.log(videos);
  return videos;
};

export default apiConnection;
