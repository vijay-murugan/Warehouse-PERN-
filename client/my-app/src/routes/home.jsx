import React from 'react'
import Header from '../components/Header'
import InputTruck from '../components/Input_truck'
import TruckList from '../components/truck_list'
import EditTruck from '../components/EditTruck'

const Home = () => {
    return(
        <div>
           <Header/>
           <InputTruck/>
           <TruckList/>
           
        </div>
    );
};

export default Home