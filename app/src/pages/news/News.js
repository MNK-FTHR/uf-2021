import React from 'react'
import { Link } from 'react-router-dom';
import New from '../../components/New/New'


function News(props) {
    return (
        <div>
            News
            <p><Link to='/'>back</Link></p>
            {props.news.map(({ id, content }) => (
                <New key={id} id={id} content={content} />
            ))}
        </div>
    )
}

export default News
