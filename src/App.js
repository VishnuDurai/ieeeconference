import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, OrganizingCommittee, AdvisoryCommittee, SteeringCommittee, Registration, Author, Venue, Tourism, Hotel, Contact, CallforPaper, Speakers, AboutUs} from './pages'
import NewNavBar from './components/NewNavBar'
export default function App() {
  return(
    <Router>
      {/* <NavBar /> */}
      <NewNavBar />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/committee/organizing' Component={OrganizingCommittee}></Route>
        <Route path='/committee/steering' Component={SteeringCommittee}></Route>
        <Route path='/committee/advisory' Component={AdvisoryCommittee}></Route>
        <Route path='/register' Component={Registration}></Route>
        <Route path='/author' Component={Author}></Route>
        <Route path='/venue' Component={Venue}></Route>
        <Route path='/venue/tourism' Component={Tourism}></Route>
        <Route path='/venue/hotels' Component={Hotel}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/call' Component={CallforPaper}></Route>
        <Route path='/speakers' Component={Speakers}></Route>
        <Route path='/about' Component={AboutUs}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}