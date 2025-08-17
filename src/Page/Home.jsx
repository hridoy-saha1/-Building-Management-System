import React from 'react';
import Banner from '../Component/Banner';
import AboutBuilding from '../Component/AboutBuilding';
import Coupon from '../Component/Coupon';
import LocationSection from '../Component/LocationSection';
import RoomTabs from '../Component/RoomTabs';
import Feature from '../Component/Feature';
import HighlightsNearby from '../Component/HighlightsNearby';
import ScheduleVisit from '../Component/ScheduleVisit';

const Home = () => {
    return (
        <>
         <Banner></Banner>
         <Feature></Feature>
         <RoomTabs></RoomTabs>
         <HighlightsNearby></HighlightsNearby>
       <AboutBuilding></AboutBuilding>
       <Coupon></Coupon>
       <ScheduleVisit></ScheduleVisit>
       <LocationSection></LocationSection>        
        </>
      
       
    );
};

export default Home;