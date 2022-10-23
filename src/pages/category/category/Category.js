import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../../news/news/News';

const Category = () => {
    const cateNews = useLoaderData();
    console.log(cateNews[0])
    return (
        <div>
            <h5>THis is category file</h5>
            {
                cateNews.map(news => <News key={news._id} news={news} />)
            }
        </div>
    );
};

export default Category;