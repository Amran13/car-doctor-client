import React from 'react';
import Banner from '../Banner/Banner';
import About from '../../About/About/About';
import SectionHeading from '../../../Shared/SectionHeading';
import Services from '../../Services/Services/Services';

const Home = () => {
    const sectionName = `Section`
    const sectionHeading = `Our Section Area`
    const sectionPara =    `the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <SectionHeading heading={sectionHeading} name={sectionName} para={sectionPara} ></SectionHeading>
            <Services></Services>
        </div>
    );
};

export default Home;