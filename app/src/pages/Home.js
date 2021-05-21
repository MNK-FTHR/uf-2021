import React from 'react';
import { Link } from 'react-router-dom';
import New from '../components/New/New'

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>News</h2>
        <hr/>
        {props.news.slice(0, props.news.length<10? props.news.length/2:5).map(({ id, content }) => (
            <div>
              <New key={id} id={id} content={content} />
              <hr/>
            </div>   
        ))}
        <p><Link to='/news'>Suite des news</Link></p>
      </div>
      <div>
        <h2>About</h2>
        {props.about.slice(0, props.about.length/2).map(({ id, content }) => (
                  <p key={id} id={id}>{content}</p>
          ))}
        <p><Link to='/about'>Description complète</Link></p>
      </div>
    </div>
  )
};

export default Home;