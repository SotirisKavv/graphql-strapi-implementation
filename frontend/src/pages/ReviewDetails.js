import React from 'react';
import Review from '../components/Review';
import { useQuery, gql } from '@apollo/client';
// import useFetch from '../hooks/useFetch';

const REVIEW = gql`
    query GetReview($id: ID!) {
        review(id: $id) {
            title,
            body,
            categories {
                id,
                name
            },
            rating
        }
    }
`;

function ReviewDetails({match}) {
    
    // const {loading, error, data} = useFetch(`http://localhost:1337/reviews/${match.params.id}`);
    const {loading, error, data} = useQuery(REVIEW, {
        variables: {
            id: match.params.id
        }
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p> 

    return <Review review={data.review} full={true} />
}

export default ReviewDetails
