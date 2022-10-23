import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../news/news/News';

const Home = () => {
    const cateNews = useLoaderData();
    // console.log(cateNews)
    return (
        <div>
            {
                cateNews.map(news => <News key={news._id} news={news} />)
            }
        </div>
    );
};

export default Home;