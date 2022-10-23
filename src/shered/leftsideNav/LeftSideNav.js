import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const LeftSideNav = () => {
    const [category, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h3>All Category</h3>
            <div>
                {
                    category.map(category => <p key={category.id}><Link
                        to={`/category/${category.id}`}>{category.name}</Link> </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav; <h3>Left side nav</h3>