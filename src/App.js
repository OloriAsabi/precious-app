import { Header, Navbar } from "./components";
import React, {useEffect, useState} from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import axios from "axios";

const url = "https://app.mavin.finance/api/profile/2201946"


export const getData = () => {
  try {
    const data = axios.get(url)
    return data
  } catch (error) {
    console.log(error)  
  }
}

// const getDataId = (id) => {
//   try {
//     const req = axios.get(url + '/' + id, {
//       responseType: 'json'
//   });

//   console.log("Id:", req);
//   return req;
//   } catch (error) {
//     console.log(error)
//   }
// }

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData()
    .then((data) => {
      console.log(data);
      setData(data.data)
    })
  }, [])
  

  return (
    <BrowserRouter>
    <Navbar data={data}/>
    <Routes>
      <Route exact  path="/" element={<Header data={data} />} />
     </Routes>
  </BrowserRouter>
  );
}

export default App;
