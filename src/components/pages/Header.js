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

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { BsArrowLeft } from "react-icons/bs";
import { ArrowRight, ArrowLeft, Search, Bell } from 'react-bootstrap-icons';
// import { Row } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Header() {

  const [bannerdata, setbannerdata] = useState('')
  const [username, setusername] = useState('')
  const [userimage, setuserimage] = useState('')



  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    const banner = localStorage.getItem('banner')
    const username = localStorage.getItem('username')
    const userimage = localStorage.getItem('userimg')
    setbannerdata(banner)
    setusername(username)
    setuserimage(userimage)

  },[])
  const signout = () => {
    signOut(auth).then(() => {
      localStorage.setItem("username", "");
      localStorage.setItem("userimg", "");
      navigate("/");

    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <>
      <Navbar expand="lg" className='bg-head'>
        <Container className='ml-10-p'>

          <Stack direction="horizontal" gap={3} className='pad-l-5'>
            <i className="pi pi-angle-left" style={{ fontSize: '1rem' }}></i>
            <i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>


            <div></div>
            <i className="pi pi-search" style={{ fontSize: '1rem' }}></i>
            <Row>
              <FormControl type="text" placeholder="Search for courses, skills, certifications and peers" className="border-0 bg-transparent s-input-h mr-sm-2" />
            </Row>
          </Stack>
          <Stack direction="horizontal" gap={3} className='pad-l-5'>

            <i className="pi pi-bell" style={{ fontSize: '1rem' }}></i>
            <i className="pi pi-power-off" style={{ fontSize: '1rem' }} onClick={signout}></i>
            <img className="rounded-circle shadow-4-strong r-img" alt="avatar2" src={userimage} />

          </Stack>



        </Container>
      </Navbar>
      <hr className='m-0'></hr>

      <Breadcrumb className='mt-2'>
        <Breadcrumb.Item href="#">
          <i className="pi pi-verified" style={{ fontSize: '1rem' }}></i>

        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          courses
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Branding 101</Breadcrumb.Item>
      </Breadcrumb>
      <div className='frame-14801'>
        <img src={bannerdata} class="rectangle-2577" alt="..."></img>
      </div>

    </>
  );
}

export default Header;
