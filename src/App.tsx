import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Home} from "./compent/home";
import { Shop } from './compent/Shop';

function App(props:any,states:any) {

    const [ shop_id, setshop_id ] = useState(0)
  let navigate = useNavigate();




  useEffect(()=>{
    navigate("/home")
  },[])

  return (
    <>
        <Routes>
            <Route path={"/home"} element={<Home set_shop_id={setshop_id} navigate={navigate}/>} />
            <Route path={"/shop"} element={<Shop shop_id={shop_id}/>} />
        </Routes>
    </>
  );
}

export default App;
