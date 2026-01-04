import React from 'react';
import Banner from '../Banner/Banner';
import WorkCards from '../WorkCards/WorkCards';
import Brands from '../Brands/Brands';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import OurServices from '../OurServices/OurServices';
import Support from '../Support/Support';
import CustomerSatisfaction from '../CustomerSatisfaction/CustomerSatisfaction';
import Reviews from '../Reviews/Reviews';


const ourService = fetch('/services.json').then(res => res.json());
const reviewsData = fetch('reviews.json').then(res => res.json());


const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <WorkCards></WorkCards>
            <OurServices ourService={ourService}></OurServices>
            <Brands></Brands>
            <Support></Support>
            <CustomerSatisfaction></CustomerSatisfaction>
            <Reviews reviewsData={reviewsData}></Reviews>
            <QuestionAnswer></QuestionAnswer>
        </div>
    );
};

export default Home;