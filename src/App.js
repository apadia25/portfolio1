import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading } from "./redux/rootSlice";

function App() {
  // const [showLoding,setShowLoading]=useState(false); 
  const dispatch = useDispatch();
  const { loading, portfolioData } = useSelector((state) => state.root);

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      //console.log(response.data);
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());

    } catch (error) {
      dispatch(HideLoading());
      console.log(error);
    }
  }

  // //api call
  // useEffect(() => {
  //   getPortfolioData();
  // }, []);

  // //to crosscheck data weather  data perfectly inserted into reducer or not 
  // useEffect(() => {
  //   console.log(portfolioData);
  // }, [portfolioData])

useEffect(() => {
  if(!portfolioData){
    getPortfolioData();
  }
},[portfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


/*The App component sets up the main structure of the application, including routing and state management.
It fetches portfolio data from an API when the component mounts and stores it in the Redux state.
It conditionally renders a loader component based on the loading state from the Redux store.
It uses React Router to define application routes, with a single route that renders the Home component.
Overall, this setup provides a structured approach to managing state, handling asynchronous operations, and navigating between different parts of the application.*/