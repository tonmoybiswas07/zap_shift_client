import React from 'react';
import Banner from '../Banner/Banner';
import WorkCards from '../WorkCards/WorkCards';
import Brands from '../Brands/Brands';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';


const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <WorkCards></WorkCards>
            <Brands></Brands>
            <QuestionAnswer></QuestionAnswer>
        </div>
    );
};

export default Home;