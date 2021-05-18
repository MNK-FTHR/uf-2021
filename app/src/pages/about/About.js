import React from 'react'
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div>
            <a target="_blank" href='https://www.ontheroadagame.fr/entre-voyage-mystere-et-voyage-aventure/'>Site de On The Road</a>
            {props.about.map(({ id, content }) => (
                  <p key={id} id={id}>{content}</p>
                  ))}
            <p><Link to='/'>back</Link></p>
        </div>
    )
}

export default About
