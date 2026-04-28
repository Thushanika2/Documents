// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import CourseList from "./Courselist";
// import Course from "./Course";
// import Navbar from "./Navbar";

// import Footer from "./Footer";
// import Dwarkdhish from "./assets/Dwarkdhish.jpg";

function App() {
  return (
    <>
    <CourseList/>
      {/* <Course
        name="HTML"
        price="RS.2000"
        image={Dwarkdhish}
        rating={5}
        show={true}
      />
      <Course
        name="CSS"
        price="RS.5000"
        image={Dwarkdhish}
        rating={5}
        show={true}
      />
      <Course
        name="JS"
        price="RS.10000"
        image={Dwarkdhish}
        rating={4}
        show={true}
      /> */}
    </>
  );
}

export default App;
