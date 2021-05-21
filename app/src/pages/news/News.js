import React from 'react'
import { Link } from 'react-router-dom';
import New from '../../components/New/New'


function News(props) {
    return (
        <div>
            News
            <hr/>
            <p><Link to='/'>back</Link></p>
            {props.news.map(({ id, content }) => (
                <div>
                    <New key={id} id={id} content={content} />
                    <hr/>
                </div>  
            ))}
        </div>
    )
}

export default News
