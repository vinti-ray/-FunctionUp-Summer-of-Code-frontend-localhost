import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Sidebar from './sideBar';
import DataTable from './DataTable';
import "./sidebar.css"
import MyNavbar from './HomeNav';
import {Card } from "react-bootstrap";

function HomePage() {
  let token=localStorage.getItem("token")
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/login')
      window.location.reload()
    }
    return () => {};
  },[])

  return (
    <div>
    <div className='sidebar'> 
    <Sidebar/>
  </div>
    <div className="main-content">
      
      <Card style={{ height: "800px" }}>
      <MyNavbar/>
      {/* <NavLink exact to="/abc" >
             <Button type="submit"  className="buttonOne" >Add Invoice</Button> 
             </NavLink> */}
      {/* <div className='sidebar'>
        <Sidebar/>
      </div> */}
            <div >
              <div className='datatable'>
              <DataTable/>
              </div>
        
          </div>
          </Card>
          </div>
          </div>
  );
}

export default HomePage;
