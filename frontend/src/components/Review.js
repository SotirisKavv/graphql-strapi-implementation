import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

function Review({review, full}) {
    return (
        <div className="review-card">
            <div className="rating">{review.rating}</div>
            <h2>{review.title}</h2>
            {review.categories.map(c => <small key={c.id}>#{c.name}</small>)}
            {
                full? 
                    <ReactMarkdown>{review.body}</ReactMarkdown> 
                : 
                    <p>{review.body.substring(0,200)+'...'}</p>
            }
            { !full && <Link to={`/details/${review.id}`}>Read more</Link> }
        </div>
    )
}

export default Review
