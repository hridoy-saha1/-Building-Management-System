import React from 'react';
import Banner from '../Component/Banner';
import AboutBuilding from '../Component/AboutBuilding';
import Coupon from '../Component/Coupon';
import LocationSection from '../Component/LocationSection';
import RoomTabs from '../Component/RoomTabs';
import Feature from '../Component/Feature';

const Home = () => {
    return (
        <>
         <Banner></Banner>
         <Feature></Feature>
         <RoomTabs></RoomTabs>
       <AboutBuilding></AboutBuilding>
       <Coupon></Coupon>
       <LocationSection></LocationSection>        
        </>
      
       
    );
};

export default Home;