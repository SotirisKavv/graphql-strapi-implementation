import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const CATEGORIES = gql`
    query GetCategories {
        categories {
            name,
            id
        }
    }
`;

function SiteHeader() {

    const { loading, error, data } = useQuery(CATEGORIES);

    if (loading) return <p>Loading Categories...</p>
    if (error) return <p>Error: {error}</p> 

    return (
        <div className="site-header">
            <Link to="/"><h1>Soteur Reviews</h1></Link>
            <nav className="categories">
                <span>Filter reviews by Category:</span>
                {data.categories.map(c => (
                    <Link key={c.id} to={`/category/${c.id}`}>
                        {c.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default SiteHeader
