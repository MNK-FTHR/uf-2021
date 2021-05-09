import React from 'react';
import { Link } from 'react-router-dom';
import New from '../components/New/New'

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      {props.news.slice(0, props.news.length<10? props.news.length/2:5).map(({ id, content }) => (
                <New key={id} id={id} content={content} />
        ))}
      <p><Link to='/news'>Suite des news</Link></p>
    </div>
  )
};

export default Home;