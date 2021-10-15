import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Review from '../components/Review';

const CATEGORY = gql`
    query GetCategory($id: ID!) {
        category(id: $id) {
            name,
            reviews {
                id,
                title,
                rating,
                categories {
                    id,
                    name
                },
                body
            }
        }
    }
`;


function Category({match}) {
    const { loading, error, data } = useQuery(CATEGORY, {
        variables: {id: match.params.id}
    });

    if (loading) return <p>Loading Category...</p>
    if (error) return <p>Error: {error}</p> 

    const { category } = data;
    const { reviews } = category;
    // console.log(data);

    return (
        <div>
            <h2>{category.name}</h2>
            {reviews.map(r => (
                <Review key={r.id} review={r} full={false} />
            ))}
        </div>
    )
}

export default Category
