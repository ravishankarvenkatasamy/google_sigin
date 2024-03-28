import { React, useEffect, useMemo, useRef, useState } from 'react'

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

// import { Accordion, AccordionTab } from 'primereact/accordion';
import { getAuth, signOut } from "firebase/auth";
import Popup from "../pages/Popup"

import Sidebar from "./Sidebar"
import Header from "./Header"
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
import Readmore from './Readmore';
import { Divider } from 'primereact/divider';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
// import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';

import Breadcrumb from 'react-bootstrap/Breadcrumb';



// const customStyles = {
//   content: {
//     top: '50%',
//     left: '100%',
//     right: '10%',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

function Home() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(50);
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 4, text: 'Item 4' },
    // { id: 5, text: 'Item 5' },
    // { id: 6, text: 'Item 6' },
    // { id: 7, text: 'Item 7' },
    // { id: 8, text: 'Item 8' },
  ]);
  const target = useRef(null);
  const cities = [
    { name: 'Last 7 days', code: 'NY' },
    { name: 'Last 14 days', code: 'RM' },
    { name: 'Last 30 days', code: 'LDN' },
    { name: 'Last 60 days', code: 'IST' },
    { name: 'Last 90 days', code: 'PRS' }
  ];
  const sort = [
    { name: 'Latest', code: 'Latest' },
    { name: 'Oldest', code: 'Oldest' },
  ];
  const status = [
    { name: 'active', code: 'active' },
    { name: 'Inactive', code: 'Inactive' },
  ];



  const datal = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  const navigate = useNavigate();
  const auth = getAuth();
  const longText = "Clients are looking for you right now. But how will they find you? Two words- meaningful differentiation. Learn the strategies to position your business in a way like no other and attract more qualified leads at a higher price premium.";
  const [data, setdata] = useState([])
  const [subdata, setsubdata] = useState([])
  const [content, setcontent] = useState([])
  const [bannerdata, setbannerdata] = useState('')
  const [username, setusername] = useState('')
  const [userimage, setuserimage] = useState('')
  const [copied, setCopied] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sortvalue, setsortvalue] = useState('Oldest');



  useEffect(() => {
    const banner = localStorage.getItem('banner')
    const username = localStorage.getItem('username')
    const userimage = localStorage.getItem('userimg')
    if (username == undefined || username == "") {
      navigate("/");
    }

    setbannerdata(banner)
    setusername(username)
    setuserimage(userimage)
    getdata()


  }, [])
  //   function openModal() {
  //     setIsOpen(true);
  //   }
  //   function closeModal() {
  //     setIsOpen(false);
  //   }
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  async function getdata() {
    await axios.get(`${process.env.REACT_APP_BATCHES_API}`)
      .then((data) => {
        setdata(data.data)
        console.log(data)
        axios.get(`${process.env.REACT_APP_COURSE_CONTENT_API}`)
          .then((data) => {
            setsubdata(data.data)
            setcontent(data.data[0])
            console.log(data)


          })
      })
  }
  const sorting = (e) => {
    setsortvalue(e.code)
    if (e.code == 'Latest') {
      const sortedItems = [...data].sort((a, b) => a.Edited - b.Edited);
      setdata(sortedItems)
    } else {
      const sortedItems = [...data].sort((a, b) => b.Edited - a.Edited);
      setdata(sortedItems)
    }
  }

  const signout = () => {
    signOut(auth).then(() => {
      localStorage.setItem("username", "");
      localStorage.setItem("userimg", "");
      navigate("/");

    }).catch((error) => {
      console.log(error)
    });
  }

  const onClick = ({ target: { innerHTML } }) => {
    console.log(`Clicked on "${innerHTML}"!`);
    toast.success('Copied', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const otherCopy = () => setCopied(true);

  return (
    <>
      <ToastContainer></ToastContainer>
      <div>

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


        {/* <Header /> */}



      </div>
      <div>

        <div>
          <Container className='mx-ct'>

            <Row className='mt-5 mb-5 '>
              <Col><h3>Branding 101</h3></Col>
              <Col className='txt-align-right'><Button variant="light" className='dot-border-c'>...</Button>{' '}<Button className='float-right new-batch'> <i className="pi pi-plus" ></i>New Batch</Button>{' '}</Col>
            </Row>

            <Container>
              <TabView>
                <TabPanel header="Overview">
                  <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><h4>Course Performance</h4></Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col>
                            <div className="">
                              <Dropdown options={cities} optionLabel="name"
                                showClear placeholder="Last 7 Days" className="w-full md:w-14rem l-p-dropdown" />
                            </div>
                            <div className='mt-4'>

                              <Row>
                                <Col className='mb-4'>
                                  <p>Batches</p>
                                  <h5>12</h5>
                                </Col>
                                <Col>
                                  <p>Course Revenue</p>
                                  <Badge value="Coming Soon" severity="Coming Soon" className='bad-ge'></Badge>
                                </Col>
                              </Row>

                              <Row>
                                <Col>
                                  <p>Learners</p>
                                  <h5>460</h5>
                                </Col>
                                <Col>
                                  <p>Certifications issued</p>
                                  <h5>212</h5>
                                </Col>
                              </Row>
                            </div>
                          </Col>


                          <Col>
                            <h5>New Learners</h5>
                            <Row>
                              <Col>
                                <h5>320</h5>
                                <Stack direction="horizontal">
                                  <Slider value={value} onChange={(e) => setValue(e.value)} orientation="horizontal" className="h-14rem range-w-l " />
                                  <span className='margi-spa '>Online</span>
                                </Stack>
                              </Col>
                              <Col>
                                <h5>140</h5>
                                <Stack direction="horizontal">
                                  <Slider value={value} onChange={(e) => setValue(e.value)} orientation="horizontal" className="h-14rem range-w-l" />
                                  <span className='margi-spa'>Offline</span>

                                </Stack>
                              </Col>
                              <Col>
                                <h5>0</h5>
                                <div className="flex justify-content-center">
                                  <Stack direction="horizontal">
                                    <Slider value={value} onChange={(e) => setValue(e.value)} orientation="horizontal" className="h-14rem range-w-l" />
                                    <span className='margi-spa'>Hybrid</span>

                                  </Stack>

                                </div>

                              </Col>
                              {/* <Col></Col> */}
                            </Row>
                            {/* </Stack> */}
                            <br></br>
                            <div
                              style={{
                                width: '100%',
                                height: '70%'
                              }}
                            >
                              <Chart data={datal} axes={axes} />

                            </div>
                          </Col>

                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                  <Row className='mt-5'>
                    <Col xs={8}>

                      <h4>Batches (12)</h4>
                      <Row className='mb-3'>
                        <Col>
                          <div className="">
                            <Dropdown options={cities} optionLabel="name"
                              showClear placeholder="Ongoing (02)" className="w-full md:w-14rem l-p-dropdown" />
                          </div>
                        </Col>
                        <Col className='txt-align-right'>
                          <div className="">

                            <span className=''>sort:</span>
                            <Dropdown options={sort} optionLabel="name" value={sortvalue} onChange={(e) => sorting(e.value)}
                              showClear placeholder={sortvalue} className="w-full md:w-14rem l-p-dropdown" />

                          </div>
                        </Col>
                      </Row>
                      <Row>
                        {data.map((item, index) => {
                          return (
                            <Col xs={6} className='mb-5'>
                              <Card >
                                <Card.Img variant="top" src={item.Img} />
                                <Card.Body>
                                  <Card.Title>{item.Batch}</Card.Title>
                                  <Row>

                                    <Col>
                                      <Badge value="Hybrid" severity="" className='bad-ge-success'></Badge>
                                      <i className="pi pi-circle-fill dot-c" ></i>
                                      <span className='ml-lc-c'>Edited {item.Edited} Days ago</span>
                                    </Col>
                                  </Row>

                                  <Row>
                                    <Col className='mt-3 mb-3'>
                                      <Stack direction="horizontal">
                                        <Slider value={value} onChange={(e) => setValue(e.value)} orientation="horizontal" className="h-14rem w-100" />

                                      </Stack>
                                    </Col>

                                  </Row>
                                  <Row>
                                    <Col >
                                      <span>Ends</span>
                                      <span className='d-block card-one-e'>{item.End} </span>
                                    </Col>
                                    <Col >
                                      <span>Learners</span>
                                      <span className='d-block card-one-e'>{item.Learners}</span>
                                    </Col>
                                    <Col >
                                      <span>Revenue</span>
                                      <Badge value="Coming Soon" severity="Coming Soon" className='bad-ge'></Badge>
                                    </Col>

                                  </Row>

                                </Card.Body>
                              </Card>

                            </Col>
                          )
                        })}



                      </Row>
                    </Col>


                    <Col xs={4}>
                      <Card >
                        <Card.Body>
                          <Stack direction="horizontal" className='mb-4'>
                            <Card.Title>Branding 101</Card.Title>
                            <div className="c-stack-active">
                              <Dropdown options={status} optionLabel="name"
                                showClear placeholder="active" className="w-full md:w-14rem l-gren-bg-dropdown" />
                            </div>
                          </Stack>
                          <Row>
                            <Row>
                              <h6>Course Code:</h6>
                            </Row>
                            <Col>
                              <InputGroup className="mb-3">

                                <Form.Control
                                  placeholder="dnac-1zy-hzm"
                                  aria-label="dnac-1zy-hzm"
                                  aria-describedby="basic-addon1"
                                  className='copy-input-g'
                                  disabled
                                />
                                <CopyToClipboard
                                  onCopy={otherCopy}
                                  options={{ message: "copied!" }}
                                  text="dnac-1zy-hzm"
                                >
                                  <InputGroup.Text id="basic-addon1" onClick={onClick}><i className='pi pi-file copy-input-g'></i></InputGroup.Text>
                                </CopyToClipboard>
                              </InputGroup>
                            </Col>
                            <Row>
                              <h6>Invite Link:</h6>
                              <p>Share this link with prospective learners who you want to join this course.</p>

                              <Col>
                                <InputGroup className="mb-3">

                                  <Form.Control
                                    placeholder="course.dossiernexus.com/dnac-1zy-hzm"
                                    aria-label="course.dossiernexus.com/dnac-1zy-hzm"
                                    aria-describedby="basic-addon1"
                                    className='copy-input-g'
                                    disabled
                                  />
                                  <CopyToClipboard
                                    onCopy={otherCopy}
                                    options={{ message: "copied!" }}
                                    text="course.dossiernexus.com/dnac-1zy-hzm"
                                  >
                                    <InputGroup.Text id="basic-addon1" onClick={onClick}><i className='pi pi-file copy-input-g'></i></InputGroup.Text>
                                  </CopyToClipboard>
                                </InputGroup>

                              </Col>
                            </Row>

                            <Col>
                              <Message text="Learners who use this meeting link must be approved before they can join." />
                            </Col>
                          </Row>



                        </Card.Body>
                      </Card>
                      <Col className='mt-3'>


                        <h6>About</h6>

                        <Readmore text={longText}></Readmore>

                      </Col>
                      <Divider></Divider>
                      <Stack direction="horizontal" className='mb-4 align-item-re'>

                        <p>Requirements:</p>
                        <span className='ml-14-p'>Absolutely no experience is required. We start with the Basics!</span>
                      </Stack>
                      <Stack direction="horizontal" className='mb-4 align-item-re'>

                        <p>Level:</p>
                        <span className='ml-14-p'>12th grade</span>
                      </Stack>
                      <Stack direction="horizontal" className='mb-4 align-item-re'>

                        <p>Skills acquired:</p>

                        <Col className='d-webkit-t'>
                          {items.map((item, index) => (

                            <>
                              <div>
                                <Button className='custom-close-btn' onClick={() => removeItem(item.id)}>{item.text}<i className="pi pi pi-times dot-c" ></i></Button>
                              </div>
                            </>

                          ))}
                        </Col>

                      </Stack>
                      <Divider></Divider>
                      <Col>
                        <h6>Free Starter Plan Overview</h6>
                        <br></br>
                        <Stack direction="horizontal" gap={3} className='mb-4 '>
                          <i className="pi pi-heart-fill" style={{ fontSize: '1.5rem' }}></i>
                          <span className='ml-5'>3 of 3 modules used</span>

                        </Stack>
                        <Stack direction="horizontal" gap={3} className='mb-4 '>
                          <i className="pi pi-heart-fill" style={{ fontSize: '1.5rem' }}></i>
                          <span className='ml-5'>1 of 1 batches used</span>

                        </Stack>
                        <Stack direction="horizontal" gap={3} className='mb-4 '>
                          <i className="pi pi-heart-fill" style={{ fontSize: '1.5rem' }}></i>
                          <span className='ml-5'>250MB of 2GB used</span>

                        </Stack>
                        <Stack direction="horizontal" gap={3} className='mb-4 '>
                          <i className="pi pi-heart-fill" style={{ fontSize: '1.5rem' }}></i>
                          <span className='ml-5'>Content libraries (Instituion plan only)
                          </span>

                        </Stack>

                      </Col>
                      <Divider></Divider>

                      <p><span className='readmore-color'>Upgrade your instituion </span>for unlimited modules, batches, files, and customizable content libraries for your whole institution.</p>

                    </Col>

                  </Row>
                </TabPanel>
                <TabPanel header="Content" >
                  <Row className='mb-3'>
                    <Col>
                      <h4>Modules (05)</h4>
                    </Col>
                    <Col className='txt-align-right'>
                      <div className="">

                        <Button className='float-right new-batch plus-module-btn'> <i className="pi pi-plus pr-c-10" ></i>New Module</Button>{' '}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {subdata.map((item, index) => {
                      return (
                        <>
                          <Col xs={3} className='mb-5'>
                            <Card >
                              <Card.Img variant="top" src={item.Moduleurl} />
                              <Card.Body>
                                <Card.Title>{item.Module}</Card.Title>
                                <Row>

                                  <Col>
                                    <span className='medal-back'>
                                      <i className="pi pi-bookmark" ></i>
                                    </span>

                                    <span> {item.Courses} courses</span>
                                    <i className="pi pi-circle-fill dot-m" ></i>
                                    <span className='ml-lc-c'>Edited {item.Edited} Days ago</span>
                                  </Col>
                                </Row>




                              </Card.Body>
                            </Card>


                          </Col>
                          {index == subdata.length - 1 ?
                            <Col xs={3} className='mb-5'>
                              <Card className='h-100 module-bg-card'>
                                <Card.Body>

                                  <Col>
                                    <span className='new-module-add-btn'>  <i className="pi pi-plus" ></i> New module</span>
                                  </Col>


                                </Card.Body>
                              </Card>
                            </Col>
                            : null}
                        </>
                      )
                    })}




                  </Row>
                  <Row className='mb-3'>
                    <Col>
                      <h4>Course Content</h4>
                    </Col>
                    <Col className='txt-align-right'>
                      <div className="">

                        <Overlay target={target.current} show={show} placement="bottom">
                          {({
                            placement: _placement,
                            arrowProps: _arrowProps,
                            show: _show,
                            popper: _popper,
                            hasDoneInitialMeasure: _hasDoneInitialMeasure,
                            ...props
                          }) => (
                            <div
                              {...props}
                              style={{
                                position: 'absolute',
                                backgroundColor: 'rgb(255 255 255)',
                                padding: '2px 10px',
                                color: 'black',
                                borderRadius: 3,
                                left: '-10%',
                                width: 'fit-content',
                                ...props.style,
                              }}
                            >
                              <div onClick={() => setShow(!show)}>
                                <p className='mt-2 mb-2 ft-size-c-13'>Basic content blocks</p>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1'><i className="pi pi-language " ></i></Button>
                                  <div>
                                    <h6 className='mb-0'>Text</h6>
                                    <span className='ft-size-c-12'>Start writing with plain text</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1'><i className="pi pi-file " ></i></Button>
                                  <div>
                                    <h6 className='mb-0'>File</h6>
                                    <span className='ft-size-c-12'>Upload or embed with a link</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1'><i className="pi pi-image " ></i></Button>
                                  <div>
                                    <h6 className='mb-0'>Image</h6>
                                    <span className='ft-size-c-12'>Upload or embed with a link</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1'><i className="pi pi-external-link " ></i></Button>
                                  <div>
                                    <h6 className='mb-0'>Web link / bookmark</h6>
                                    <span className='ft-size-c-12'>Embed a web link as a visual bookmark</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1'><i className="pi pi-video " ></i></Button>
                                  <div>
                                    <h6 className='mb-0'>Video</h6>
                                    <span className='ft-size-c-12'>Embed from Youtube, Vimeo...</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1'><i className="pi pi-folder" ></i></Button>
                                  <div>
                                    <h6 className='mb-0'>Folder/sub-section</h6>
                                    <span className='ft-size-c-12'>Create a folder or sub-section</span>
                                  </div>
                                </Stack>
                                <Divider></Divider>
                                <p className='mt-2 mb-2 ft-size-c-13'>Collaboration</p>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1 pt-btn-g'><img className='smg-image' src='https://logodownload.org/wp-content/uploads/2020/04/google-classroom-logo.png'></img></Button>
                                  <div>
                                    <h6 className='mb-0'>Google Class Room</h6>
                                    <span className='ft-size-c-12'>Add a  Link  to your class room </span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1 pt-btn-g'><img className='smg-image' src='https://i.pinimg.com/736x/10/8b/bf/108bbff74e46b996716c10543975c00b.jpg'></img></Button>
                                  <div>
                                    <h6 className='mb-0'>Google Meet</h6>
                                    <span className='ft-size-c-12'>Embed a Gmeet link</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1 pt-btn-g'><img className='smg-image' src='https://www.clipartkey.com/mpngs/m/31-319585_microsoft-teams-icon-microsoft-teams-icon-svg.png'></img></Button>
                                  <div>
                                    <h6 className='mb-0'>Ms Teams</h6>
                                    <span className='ft-size-c-12'>Embed a MS Teams link</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1 pt-btn-g'><img className='smg-image' src='https://www.pngarts.com/files/7/Zoom-Logo-PNG-Image.png'></img></Button>
                                  <div>
                                    <h6 className='mb-0'>Zoom</h6>
                                    <span className='ft-size-c-12'>Embed a Zoom link</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1 pt-btn-g'><img className='smg-image' src='https://logodownload.org/wp-content/uploads/2020/04/google-drive-logo-1-1-2048x1830.png'></img></Button>
                                  <div>
                                    <h6 className='mb-0'>Google Drive</h6>
                                    <span className='ft-size-c-12'>Add links to files/folders from google drive</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1 pt-btn-g'><img className='smg-image' src='https://whatdouknowcom.files.wordpress.com/2020/08/onedrive_icon.png?w=1120'></img></Button>
                                  <div>
                                    <h6 className='mb-0'>On Drive</h6>
                                    <span className='ft-size-c-12'>Add links to files/folders from Ondrive</span>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3} className=''>
                                  <Button className='icon-w-btn-popover mt-1 pt-btn-g'><img className='smg-image' src='https://cdn.iconscout.com/icon/free/png-256/onenote-3-1174818.png'></img></Button>
                                  <div>
                                    <h6 className='mb-0'>MS OneNote</h6>
                                    <span className='ft-size-c-12'>Add a link to your MS OneNote</span>
                                  </div>
                                </Stack>
                              </div>
                            </div>
                          )}
                        </Overlay>
                        <Button className='float-right new-batch plus-module-btn' ref={target} onClick={() => setShow(!show)}> <i className="pi pi-plus pr-c-10" ></i>Add Content</Button>{' '}
                      </div>
                    </Col>
                  </Row>
                  <Row>

                    <Col className='mb-3'>
                      <Card className='h-100 '>
                        <Card.Body>
                          <Card.Title>{content.Titleoftext}</Card.Title>
                          <Card.Text> {content.Titleofcontent}   </Card.Text>


                        </Card.Body>
                      </Card>

                    </Col>
                  </Row>
                  <Row>

                    <Col className='mb-5'>

                      <Card className='h-auto'>
                        <Container>
                          <Row className='mt-3'>
                            <Col>
                              <h5 className='pl-custom-3 mb-0'>Sub-heading / section</h5>
                            </Col>
                            <Col className='txt-align-right'>
                              <div className="">

                                <span className='float-right '> Add </span>
                                <span className='custom-dot'>...</span>
                              </div>
                            </Col>
                          </Row>
                          <Divider></Divider>
                        </Container>
                        <Container>
                          <Card.Body>
                            <Card.Title>{content.Subtitletext}</Card.Title>
                            <Card.Text>  {content.Subtitlecontent}  </Card.Text>

                            <Stack direction="horizontal" gap={3} className='border-stack'>


                              <Col xs={3}>
                                <Card.Img variant="top" src={content.imageurl} className='camel-img img-bor-rad' />
                              </Col>
                              <Col xs={9}>
                                <h6>{content.Imagetitle}</h6>
                                <p>{content.Imagedescription}</p>
                                <p>{content.Imagedescription}</p>
                                <h6>exampleimage.jpg</h6>
                              </Col>
                            </Stack>


                          </Card.Body>
                          <Card.Body className='bg-c-card'>
                            <Card.Title>{content.Subtitletext}</Card.Title>
                            <Card.Text>  {content.Subtitlecontent}  </Card.Text>

                            <Stack direction="horizontal" gap={3} >
                              <h6>Add within section:</h6>
                              <Button className='icon-w-btn'><i className="pi pi-language p-custom-right-10" ></i>Text</Button>
                              <Button className='icon-w-btn'><i className="pi pi-file p-custom-right-10" ></i>File</Button>
                              <Button className='icon-w-btn'><i className="pi pi-image p-custom-right-10" ></i>Image</Button>
                              <Button className='icon-w-btn'><i className="pi pi-external-link p-custom-right-10" ></i>Web Link</Button>


                            </Stack>


                          </Card.Body>

                        </Container>
                      </Card>
                      <div className='mt-3'>

                        <Card.Body className='bg-c-card'>

                          <Stack direction="horizontal" gap={3} className='border-stack'>


                            <Col xs={3}>
                              <Card.Img variant="top" src={content.Documenturl} className='camel-img img-bor-rad' />
                            </Col>
                            <Col xs={9}>
                              <h6>{content.Documenttitle}</h6>
                              <p>{content.Documentdescription}</p>
                              <p>{content.Documentdescription}</p>
                              <h6>exampleimage.jpg</h6>
                            </Col>
                          </Stack>


                        </Card.Body>


                      </div>

                      <div className='mt-3'>


                        <Row>

                          <Col className='mb-3'>
                            <Card className='h-100 '>
                              <Card.Body>
                                <Card.Title>{content.Titleoftext}</Card.Title>
                                <Card.Text> {content.Titleofcontent}   </Card.Text>


                              </Card.Body>
                            </Card>

                          </Col>
                        </Row>


                      </div>
                      <div className='mt-3'>

                        <Card.Body className='bg-c-card'>

                          <Stack direction="horizontal" gap={3} className='border-stack'>


                            <Col xs={3}>
                              <iframe src={content.youtubeurl}
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                className='img-bor-rad'
                                allowfullscreen
                                title='video'
                                play='auto'
                              />
                            </Col>
                            <Col xs={9}>
                              <h6>Dope Tech: Nothing Phone 2 Redesign!</h6>
                              <p> Cleo's video:    • The Future of Mov... <br></br>Thanks Eight Sleep for sponsoring DopeTech! Get $200</p>

                              <Stack direction="horizontal" gap={3} >

                                <img className="sm-image" src='https://tse4.mm.bing.net/th?id=OIP.dhK9QHgYhHOjte2Yrp_UIgHaEc&pid=Api&P=0&h=180'></img>
                                <a href={content.youtubeurl} target='_blank' className='y-link'> <h6>{content.youtubeurl}</h6></a>
                              </Stack>
                            </Col>
                          </Stack>


                        </Card.Body>


                      </div>
                      <div className='mt-3'>
                        <Stack direction="horizontal" gap={3} >
                          <h6>Add:</h6>
                          <Button className='icon-w-btn'><i className="pi pi-language p-custom-right-10" ></i>Text</Button>
                          <Button className='icon-w-btn'><i className="pi pi-file p-custom-right-10" ></i>File</Button>
                          <Button className='icon-w-btn'><i className="pi pi-image p-custom-right-10" ></i>Image</Button>
                          <Button className='icon-w-btn'><i className="pi pi-external-link p-custom-right-10" ></i>Web Link</Button>


                        </Stack>
                      </div>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel header="Instructors" disabled>
                  <p className="m-0">
                    tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </TabPanel>
                <TabPanel header="Settings" disabled>
                  <p className="m-0">
                    tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </TabPanel>
                <TabPanel header="Certifications" disabled>
                  <p className="m-0">
                    tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                  </p>
                </TabPanel>
              </TabView>
            </Container>

          </Container>
        </div>
        {/* <Sidebar /> */}
        <div >
          <Col sm={1} md={1} className="bg-dark sidebar cnav">
            <Col className='innercnav' >



              <Col className="mb-3" >
                <div className='text-center '>
                  <i className="pi pi-home ft-14 pt-4" ></i>
                  <span className='d-block ft-14 pb-4'>Home</span>
                </div>
              </Col>
              <Col className="mb-3">
                <div className='text-center s-nav-active'>
                  <i className="pi pi-verified ft-14 pt-4" ></i>
                  <span className='d-block ft-14 pb-4'>Academia</span>
                </div>
              </Col>
              <Col className="mb-3">
                <div className='text-center'>
                  <i className="pi pi-user ft-14 pt-4" ></i>
                  <span className='d-block ft-14 pb-4'>Administration</span>
                </div>
              </Col>
              <Col className="mb-3">
                <div className='text-center'>
                  <i className="pi pi-credit-card ft-14 pt-4" ></i>
                  <span className='d-block ft-14 pb-4'>Payments</span>
                </div>
              </Col>
            </Col>
          </Col>
        </div>


      </div>

    </>
  );
}

export default Home;
