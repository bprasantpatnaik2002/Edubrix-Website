import React from 'react'
import './App.css'
import { Routes, Route } from "react-router";

import Navbar from './Components/NavBar/Navbar'
import Home from './Components/Home/Home'
import Contact from './Components/Footer/Contact'
import About from './Components/About/About'
import PreDeparture from './Components/PreDeparture/PreDeparture';
import French from './Components/Prerequisites/Languages/French';
import German from './Components/Prerequisites/Languages/German';
import Lang from './Components/Prerequisites/Languages/Lang';
import Toefl from './Components/Prerequisites/CompetitiveExams/Toefl';
import ExamsToGive from './Components/Prerequisites/CompetitiveExams/ExamsToGive';
import Sat from './Components/Prerequisites/CompetitiveExams/Sat';
import Pte from './Components/Prerequisites/CompetitiveExams/Pte';
import Ielts from './Components/Prerequisites/CompetitiveExams/Ielts';
import Gmat from './Components/Prerequisites/CompetitiveExams/Gmat';
import Gre from './Components/Prerequisites/CompetitiveExams/Gre';
import Destination from './Components/Counselling/Destination/Destination';
import Stream from './Components/Counselling/Stream/Stream';
import Header from './Components/Common/Header';
import Mba from './Components/Education/Mba';
import PostGraduate from './Components/Education/PostGraduate';
import UnderGraduate from './Components/Education/UnderGraduate';
import UpcomingBatches from './Components/WhatsNew.jsx/UpcomingBatches';
import NewsUpdate from './Components/WhatsNew.jsx/NewsUpdate';
import Blogs from './Components/WhatsNew.jsx/Blogs';
import Discounts from './Components/WhatsNew.jsx/Discounts';
import EdLoan from './Components/EdLoans/EdLoan';
import Login from './Components/Admin/Login';


function App() {
  

  return (
   <>
    <Navbar/>
    <Header/>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="predeparture" element={<PreDeparture />} />
      <Route path="educational-loan" element={<EdLoan />} />
      <Route
                    path="/prereq/competitive/gre"
                    element={
                        <>
                            <ExamsToGive />
                            <Gre />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/gmat"
                    element={
                        <>
                            <ExamsToGive />
                            <Gmat />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/ielts"
                    element={
                        <>
                            <ExamsToGive />
                            <Ielts />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/pte"
                    element={
                        <>
                            <ExamsToGive />
                            <Pte />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/sat"
                    element={
                        <>
                            <ExamsToGive />
                            <Sat />
                        </>
                    }
                />
                <Route
                    path="/prereq/competitive/toefl"
                    element={
                        <>
                            <ExamsToGive />
                            <Toefl />
                        </>
                    }
                />

                {/* Languages */}
                <Route path="/prereq/languages" element={<Lang />} />
                <Route
                    path="/prereq/languages/german"
                    element={
                        <>
                            <Lang />
                            <German />
                        </>
                    }
                />
                <Route
                    path="/prereq/languages/french"
                    element={
                        <>
                            <Lang />
                            <French />
                        </>
                    }
                />
                <Route
                    path="/counselling/study-destination"
                    element={
                        <>
                            <Destination/>
                        </>
                    }
                />
                <Route
                    path="/counselling/stream-selection"
                    element={
                        <>
                            <Stream/>
                        </>
                    }
                />
                <Route
                    path="/education/mba"
                    element={
                        <>
                            <Mba/>
                        </>
                    }
                />
                <Route
                    path="/education/post-graduate"
                    element={
                        <>
                            <PostGraduate/>
                        </>
                    }
                />
                <Route
                    path="/education/undergraduate"
                    element={
                        <>
                            <UnderGraduate/>
                        </>
                    }
                />
                <Route
                    path="/new/upcoming-batches"
                    element={
                        <>
                            <UpcomingBatches/>
                        </>
                    }
                />
                <Route
                    path="/new/news&update"
                    element={
                        <>
                            <NewsUpdate/>
                        </>
                    }
                />
                <Route
                    path="/new/blogs"
                    element={
                        <>
                            <Blogs/>
                        </>
                    }
                />
                <Route
                    path="/new/discount"
                    element={
                        <>
                            <Discounts/>
                        </>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <>
                            <Login/>
                        </>
                    }
                />
    </Routes>
    <a  id="whatsapp" className='whatsapp' href='https://api.whatsapp.com/send/?phone=919930454686&text&type=phone_number&app_absent=0' target='_blank'><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
    <Contact/>
   </>
  )
}

export default App
