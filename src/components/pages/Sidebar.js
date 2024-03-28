import { React, useEffect, useState } from 'react'

import axios from 'axios';
import logo from '../.././logo.svg';
import '../.././App.css';
import { CopyToClipboard } from "react-copy-to-clipboard";

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';


import 'primeicons/primeicons.css';
import { InputText } from "primereact/inputtext";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import { TabView, TabPanel } from 'primereact/tabview';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { getAuth, signOut } from "firebase/auth";
import Popup from "../pages/Popup"

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sidebar() {
    return (
        <>

          

           <div >
           <Col sm={1} md={1} className="bg-dark sidebar cnav">
                <Col  className='innercnav' >
                    
              
               
                <Col className="mb-3" >
                  <div className='text-center '>
                <i className="pi pi-home ft-14 pt-4" ></i>
               <span className='d-block ft-14 pb-4'>Home</span> 
               </div>
                </Col>
                <Col  className="mb-3">
                  <div className='text-center s-nav-active'>
                <i className="pi pi-verified ft-14 pt-4" ></i>
               <span className='d-block ft-14 pb-4'>Academia</span> 
               </div>
                </Col>
                <Col  className="mb-3">
                  <div className='text-center'>
                <i className="pi pi-user ft-14 pt-4" ></i>
               <span className='d-block ft-14 pb-4'>Administration</span> 
               </div>
                </Col>
                <Col  className="mb-3">
                  <div className='text-center'>
                <i className="pi pi-credit-card ft-14 pt-4" ></i>
               <span className='d-block ft-14 pb-4'>Payments</span> 
               </div>
                </Col>
                </Col>
                </Col>
                </div>

          
        </>
    );
}

export default Sidebar;
