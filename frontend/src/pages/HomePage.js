import React from 'react'
import { useQuery, gql } from '@apollo/client';
// import useFetch from '../hooks/useFetch'

import Review from '../components/Review';

const REVIEWS = gql`
    query GetReviews {
        reviews {
            title,
            rating,
            id,
            categories {
                id,
                name
            },
            body
        }
    }
`;

export default function HomePage() {
    // const { loading, error, data } = useFetch("http://localhost:1337/reviews");
    const { loading, error, data } = useQuery(REVIEWS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p> 

    return (
        <div>
            {data.reviews.map(d => (
                <Review review={d} full={false} key={d.id} />
            ))}
        </div>
    )
}
