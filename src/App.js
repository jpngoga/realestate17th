import "@fontsource/montserrat"; // Defaults to weight 400.
import "@fontsource/roboto"; // Defaults to weight 400.

import { Routes, Route, useNavigate } from "react-router-dom";

import Services from "./components/Services";
import { About } from "./screens/About/About";
import { Contact } from "./screens/Contact/Contact";
import { OurProperties } from "./screens/ourProprties/OurProperties";
import { News } from "./screens/News/News";
import { MLS } from "./screens/MLS/MLS";
import { Communities } from "./screens/Communities/Communities";
import { Home } from "./components/Home";
import { Readmore } from "./screens/Readmore/Readmore";
import { Nextpage } from "./screens/News/Nextpage";
import { DashboardLayout } from "./layouts/dashboard";
import { AddBlogs } from "./screens/addBlogs";
import { useDispatch, useSelector } from "react-redux";
import {Login} from '../src/screens/Login/Login'
import { useEffect } from "react";
import { token, login } from "./features/authenticationSlice";



import { Lostpassword } from "./screens/Login/Lostpassword";
import { View } from "./components/View";
import { YourListings } from "./Dashboardpages/YourListings";
import { Mylisting } from "./Dashboardpages/Mylisting";

import BubleChart from "./Dashboardpages/BubleChart";

// import { Navbar } from "./components/Navbar";
import {AddNew} from '../src/Dashboardpages/addNew'

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn, "Login Status");
  // navigate('./dashboard/yourlistings')
  useEffect(() => {
    let tokenValue = localStorage.getItem("token");
    if (tokenValue !== null){
      dispatch(token(tokenValue));
    }
    console.log(tokenValue, "tokenValue");
    // let userData = JSON.parse(localStorage.getItem("userData"));
    if (tokenValue !== null) {
      dispatch(login());
      console.log("nukllllllllll")
    }
  }, []);
  
  console.log(isLoggedIn)

  return (
    <>
      <Routes>
        {isLoggedIn == true ? (
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/dashboard/createBlog" element={<AddBlogs/>} />
            <Route path="/dashboard/AddNew" element={<AddNew/>} />
            <Route path="/dashboard/bublechart" element={<BubleChart/>} />
            <Route path="/dashboard/ourproperties" element={<OurProperties/>} />
            <Route path="/dashboard/news" element={<News/>} />
            {/* <Route path="/dashboard/about" element={<A />} /> */}
            <Route path="/dashboard/" element={<dashboard />} />
            <Route path="/dashboard/mylisting" element={<Mylisting />} />
            <Route path="/dashboard/yourlistings" element={<YourListings />} />
          </Route>
        ) : (
          <>
            {" "}
            <Route path="/" element={<Home />} />
           
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/mls" element={<MLS />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/ourproperties" element={<OurProperties />} />
            {/* <Route path="/homecards" element={<HomeCards />} /> */}
            <Route path="news/readmore" element={<Readmore />} />
            <Route path="news/readmore/page2" element={<Nextpage />} />
            {/* <Route path="about/aboutcards" element={<AboutCards />}></Route> */}
            <Route path="/lostpassword" element={<Lostpassword />}></Route>
            <Route path="/ourproperties/view" element={<View />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
