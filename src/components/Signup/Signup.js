import { React, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import '../../login.css';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { Chart } from 'react-charts'
import { Dropdown } from 'primereact/dropdown';
import { Slider } from "primereact/slider";
import { Badge } from 'primereact/badge';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Message } from 'primereact/message';
import { Divider } from 'primereact/divider';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import logo from '../../nut.png'
import GoogleSignIn from '../Google/GoogleSigin'



export default function Signup() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();



  async function loadbanner() {
    await axios.get(`${process.env.REACT_APP_BANNER_API}`)
      .then((data) => {
        localStorage.setItem("banner", data.data[0].Img);
        console.log(data)

      })
  }
  useEffect(() => {
    const username = localStorage.getItem('username')
    const userimage = localStorage.getItem('userimg')
    loadbanner()
    if (username == undefined || username == "") {
      navigate("/");
    } else {
      navigate("/home");
    }
   




  }, [])
 
  return (
    <>
    <Row className='h-100vh'>
        <Col xs={6} className=''>
        <div className='col-8 bg-color-custom-log h-100vh'>
          <h2 className='dna-text'>Your Learner DNA.</h2>
          <img className='dna-img' src={logo}></img>
          </div>
        </Col>
        <Col xs={6}>
        <Container className="mt-5 log-form">
          <div className='col-9'>
      <h2 className='text-center'>Sign up</h2>
      <p className='text-center'>Let’s create a free  account to grow with your peers.  </p>
      <Form >
        <Form.Group controlId="Email">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            placeholder="an email you will actively use"
            className='email-input'
          />
        </Form.Group>
        <Stack direction="horizontal" gap={3} className=''>
        <Form.Check aria-label="option 1" />
        <Form.Label className='mt-2 ft-size-c-13'>By signing up, I agree to Dossiernexus's <a><span className='readmore-color'>Privacy Statement</span></a> and <a><span className='readmore-color'>Terms of Service.</span></a></Form.Label>
       </Stack>
        

        <Button className="mt-3 w-100"variant="dark" type="submit">
          Create Account
        </Button>
        <div>
          <p className='text-center mt-2'>Already have an account?<a><span className='readmore-color'>Sign in</span> </a></p>
        </div>
        <div class="or-container"><div class="line-separator"></div> <div class="or-label">or</div><div class="line-separator"></div></div>

        <Stack direction="horizontal" gap={4} className='mt-4'>
                               <GoogleSignIn></GoogleSignIn>
                                  <Button  className=' mt-1 fb-icon'><img className='smg-image' src='https://www.clipartmax.com/png/full/99-999690_facebook-logo-circle-facebook-icon-for-email-signature.png'></img></Button>
                                  <Button variant='secondary' className=' mt-1 g-sign'><img className='smg-image' src='https://www.pngmart.com/files/4/Microsoft-Logo-PNG-HD.png'></img> </Button>
                                  <Button  variant='dark' className=' mt-1 fb-icon'><img className='smg-image' src='http://pngimg.com/uploads/apple_logo/apple_logo_PNG19690.png'></img></Button>

                                
                                </Stack>
      </Form>
      </div>
    </Container>
        </Col>
      </Row>

    </>
  );
}