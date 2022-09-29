import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About"; 
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Home from "./Home";
import BucketList from "./BucketList";
import Visited from "./Visited";



function App() {
    const [page, setPage] = useState("/")
    const [cities, setCities] = useState([])

   useEffect(() => {
       fetch('http://localhost:3000/cities')
       .then(response => response.json())
       .then(cities => setCities(cities)) 
   }, [])

  
   
  return (
    <BrowserRouter>
      <NavBar onChangePage={setPage}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/bucketlist">
          <BucketList cities={cities}/>
        </Route>
        <Route path="/visited">
          <Visited cities={cities}/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;