import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./Components/Cards/Cards";
import Filter from "./Components/Filter/Filter";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import Navbar from "./Components/Filter/Components/Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./Components/Cards/CardDetails";
function App(){
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}
const Home=()=> {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [status,setStatus]=useState("");
  let { info, results } = fetchedData;
  let [gender,setGender]=useState("");
  let [species,setSpecies]=useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (

    <div className="App">
    <h1 className="text-center mb-4">Characters</h1>
    
   
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="Container">
        <div className="row">
         
            <Filter setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber} setSpecies={setSpecies} />
          
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info}pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
