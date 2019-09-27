import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/styles/App.scss';
//import apiConnection from '../hooks/apiConnection';
import ListItem from '../components/ListItem';
import ListItemDetail from '../components/ListItemDetail';

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=dc5fe752&s=Batman&plot=full';

const App = () => {
  //const connection = apiConnection(url);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideos(data.Search));
  }, []);
  console.log(videos);
  return (
    <>
      <ListItem>
        {videos.map((item) => <ListItemDetail key={item.imdbID} {...item} />,)}
      </ListItem>
    </>
  )
 ;};

export default App;
