import React,{useState} from 'react';
import {Box} from '@mui/system';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Home = () => {
    const [bodyPart,setBodyPart]=useState('all')
    const [exercises,setExercises]=useState([]);
    //console.log(bodyPart);
  return (
    <Box>
      <Navbar/>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
      <Exercises
       setExercises={setExercises}
       bodyPart={bodyPart}
       exercises={exercises}
      />
      <Footer/>
      </Box>
  )
}

export default Home
