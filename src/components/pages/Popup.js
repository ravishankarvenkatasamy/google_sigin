import { React } from 'react'
import '../../popup.css'





export default function Popup(props) {

    return (
        <>
            <div className="menu" onClick={props.closemodal}>
                <div className="menu-item">
                    <div className="text-framec">
                        <div className="leading-text">
                            <div className="typographyc">
                                <div className="textc">Basic content blocks</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <div className="aa">Aa</div>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Text</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Start writing with plain text</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <svg
                            className="file-plus"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.6668 1.66663H5.00016C4.55814 1.66663 4.13421 1.84222 3.82165 2.15478C3.50909 2.46734 3.3335 2.89127 3.3335 3.33329V16.6666C3.3335 17.1087 3.50909 17.5326 3.82165 17.8451C4.13421 18.1577 4.55814 18.3333 5.00016 18.3333H15.0002C15.4422 18.3333 15.8661 18.1577 16.1787 17.8451C16.4912 17.5326 16.6668 17.1087 16.6668 16.6666V6.66663M11.6668 1.66663L16.6668 6.66663M11.6668 1.66663V6.66663H16.6668M10.0002 15V9.99996M7.50016 12.5H12.5002"
                                stroke="#1B1B1B"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">File</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Upload or embed with a link</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <svg
                            className="image"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5ZM4.16667 17.5L13.3333 8.33333L17.5 12.5M8.33333 7.08333C8.33333 7.77369 7.77369 8.33333 7.08333 8.33333C6.39298 8.33333 5.83333 7.77369 5.83333 7.08333C5.83333 6.39298 6.39298 5.83333 7.08333 5.83333C7.77369 5.83333 8.33333 6.39298 8.33333 7.08333Z"
                                stroke="#1B1B1B"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Image</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Upload or embed with a link</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <div className="www">www.</div>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Web link / bookmark</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Embed a web link as a visual bookmark</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <svg
                            className="film"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1_15609)">
                                <path
                                    d="M5.83317 1.66663V18.3333M14.1665 1.66663V18.3333M1.6665 9.99996H18.3332M1.6665 5.83329H5.83317M1.6665 14.1666H5.83317M14.1665 14.1666H18.3332M14.1665 5.83329H18.3332M3.48317 1.66663H16.5165C17.5198 1.66663 18.3332 2.47998 18.3332 3.48329V16.5166C18.3332 17.5199 17.5198 18.3333 16.5165 18.3333H3.48317C2.47985 18.3333 1.6665 17.5199 1.6665 16.5166V3.48329C1.6665 2.47998 2.47985 1.66663 3.48317 1.66663Z"
                                    stroke="#1B1B1B"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_15609">
                                    <rect width={20} height={20} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Video</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Embed from Youtube, Vimeo...</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <svg
                            className="folder-plus"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.99984 9.16667V14.1667M7.49984 11.6667H12.4998M18.3332 15.8333C18.3332 16.2754 18.1576 16.6993 17.845 17.0118C17.5325 17.3244 17.1085 17.5 16.6665 17.5H3.33317C2.89114 17.5 2.46722 17.3244 2.15466 17.0118C1.8421 16.6993 1.6665 16.2754 1.6665 15.8333V4.16667C1.6665 3.72464 1.8421 3.30072 2.15466 2.98816C2.46722 2.67559 2.89114 2.5 3.33317 2.5H7.49984L9.1665 5H16.6665C17.1085 5 17.5325 5.17559 17.845 5.48816C18.1576 5.80072 18.3332 6.22464 18.3332 6.66667V15.8333Z"
                                stroke="#1B1B1B"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Folder/sub-section</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Create a folder or sub-section</div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg
                    className="frame-14764"
                    width={344}
                    height={9}
                    viewBox="0 0 344 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line y1="4.5" x2={344} y2="5.5" stroke="#E7E7E7" />
                </svg>
                <div className="menu-item">
                    <div className="text-framec">
                        <div className="leading-text">
                            <div className="typographyc">
                                <div className="textc">Collaboration</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <img
                            className="google-classroom-icon-1"
                            src="https://tse1.mm.bing.net/th?id=OIP.0MP14fOr1ykZDCnNZ5grFwHaGZ&pid=Api&P=0&h=180"
                        />
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Google Classroom</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Add a link to your google classroom</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <div className="google-meet">
                            <svg
                                className="group"
                                width={20}
                                height={18}
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.3145 8.9862L13.2642 11.2035L15.8862 12.8703L16.3423 9.0002L15.8862 5.21741L13.214 6.68163L11.3145 8.9862Z"
                                    fill="#00832D"
                                />
                                <path
                                    d="M0 12.51V15.8079C0 16.561 0.61432 17.1723 1.37138 17.1723H4.68624L5.37265 14.6805L4.68624 12.51L2.41202 11.8271L0 12.51Z"
                                    fill="#0066DA"
                                />
                                <path
                                    d="M4.68624 0.800049L0 5.4623L2.41217 6.14361L4.68624 5.4623L5.36017 3.32138L4.68624 0.800049Z"
                                    fill="#E94235"
                                />
                                <path d="M0 12.5116H4.68624V5.46228H0V12.5116Z" fill="#2684FC" />
                                <path
                                    d="M18.8798 2.7741L15.8862 5.2175V12.8702L18.8923 15.3232C19.3422 15.6739 20.0005 15.3542 20.0005 14.7852V3.30114C20.0005 2.72575 19.3266 2.40768 18.8798 2.7741Z"
                                    fill="#00AC47"
                                />
                                <path
                                    d="M11.314 8.98621V12.5101H4.68604V17.1723H14.5144C15.2715 17.1723 15.8858 16.561 15.8858 15.808V12.8703L11.314 8.98621Z"
                                    fill="#00AC47"
                                />
                                <path
                                    d="M14.5144 0.800049H4.68604V5.4623H11.314V8.98619L15.8858 5.21739V2.16441C15.8858 1.41122 15.2715 0.800049 14.5144 0.800049Z"
                                    fill="#FFBA00"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Google Meet</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Embed a Gmeet link</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <div className="microsoft-teams">
                            <svg
                                className="group2"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.9501 7.62463H19.1162C19.6043 7.62463 19.9999 8.023 19.9999 8.51442V13.2523C19.9999 15.0584 18.5458 16.5225 16.752 16.5225H16.7367C14.9429 16.5227 13.4885 15.0588 13.4883 13.2527C13.4883 13.2526 13.4883 13.2524 13.4883 13.2523V8.08967C13.4883 7.83283 13.6951 7.62463 13.9501 7.62463Z"
                                    fill="#5059C9"
                                />
                                <path
                                    d="M17.4417 6.68792C18.5976 6.68792 19.5347 5.74441 19.5347 4.58053C19.5347 3.41665 18.5976 2.47314 17.4417 2.47314C16.2857 2.47314 15.3486 3.41665 15.3486 4.58053C15.3486 5.74441 16.2857 6.68792 17.4417 6.68792Z"
                                    fill="#5059C9"
                                />
                                <path
                                    d="M10.93 6.68798C12.5997 6.68798 13.9533 5.32514 13.9533 3.64398C13.9533 1.96282 12.5997 0.599976 10.93 0.599976C9.2603 0.599976 7.90674 1.96282 7.90674 3.64398C7.90674 5.32514 9.2603 6.68798 10.93 6.68798Z"
                                    fill="#7B83EB"
                                />
                                <path
                                    d="M14.9615 7.62463H6.43408C5.95183 7.63665 5.57034 8.03961 5.58153 8.52519V13.929C5.51418 16.8429 7.80383 19.261 10.6978 19.3323C13.5918 19.261 15.8814 16.8429 15.8141 13.929V8.52519C15.8253 8.03961 15.4438 7.63665 14.9615 7.62463Z"
                                    fill="#7B83EB"
                                />
                                <path
                                    opacity="0.1"
                                    d="M11.1627 7.62463V15.1972C11.1604 15.5444 10.9514 15.8564 10.6325 15.9886C10.5309 16.0319 10.4218 16.0542 10.3115 16.0542H5.9906C5.93014 15.8996 5.87433 15.7451 5.82781 15.5859C5.665 15.0485 5.58192 14.4899 5.58129 13.9281V8.52379C5.57011 8.03898 5.95098 7.63665 6.43246 7.62463H11.1627Z"
                                    fill="#1B1B1B"
                                />
                                <path
                                    opacity="0.2"
                                    d="M10.6976 7.62463V15.6655C10.6976 15.7765 10.6754 15.8864 10.6325 15.9886C10.5012 16.3097 10.1913 16.5202 9.84642 16.5225H6.20921C6.13014 16.3679 6.05572 16.2134 5.9906 16.0542C5.92548 15.895 5.87433 15.7451 5.82781 15.5859C5.665 15.0485 5.58192 14.4899 5.58129 13.9281V8.52379C5.57011 8.03898 5.95098 7.63665 6.43246 7.62463H10.6976Z"
                                    fill="#1B1B1B"
                                />
                                <path
                                    opacity="0.2"
                                    d="M10.6976 7.62463V14.7289C10.694 15.2007 10.315 15.5823 9.84641 15.5859H5.82781C5.665 15.0485 5.58192 14.4899 5.58129 13.9281V8.52379C5.57011 8.03898 5.95098 7.63665 6.43246 7.62463H10.6976Z"
                                    fill="#1B1B1B"
                                />
                                <path
                                    opacity="0.2"
                                    d="M10.2325 7.62463V14.7289C10.2289 15.2007 9.84991 15.5823 9.38129 15.5859H5.82781C5.665 15.0485 5.58192 14.4899 5.58129 13.9281V8.52379C5.57011 8.03898 5.95098 7.63665 6.43246 7.62463H10.2325Z"
                                    fill="#1B1B1B"
                                />
                                <path
                                    opacity="0.1"
                                    d="M11.1628 5.20343V6.6786C11.0837 6.68328 11.0093 6.68797 10.9303 6.68797C10.8512 6.68797 10.7768 6.68329 10.6977 6.6786C10.5407 6.66811 10.385 6.64303 10.2326 6.60367C9.29072 6.37909 8.51259 5.71402 8.13956 4.81474C8.07538 4.66372 8.02555 4.50691 7.99072 4.34644H10.3116C10.781 4.34822 11.161 4.73086 11.1628 5.20343Z"
                                    fill="#1B1B1B"
                                />
                                <path
                                    opacity="0.2"
                                    d="M10.6978 5.67169V6.67856C10.5408 6.66807 10.3851 6.64299 10.2327 6.60363C9.29081 6.37905 8.51268 5.71398 8.13965 4.8147H9.84662C10.316 4.81649 10.696 5.19913 10.6978 5.67169Z"
                                    fill="#1B1B1B"
                                />
                                <path
                                    opacity="0.2"
                                    d="M10.6978 5.67169V6.67856C10.5408 6.66807 10.3851 6.64299 10.2327 6.60363C9.29081 6.37905 8.51268 5.71398 8.13965 4.8147H9.84662C10.316 4.81649 10.696 5.19913 10.6978 5.67169Z"
                                    fill="#1B1B1B"
                                />
                                <path
                                    opacity="0.2"
                                    d="M10.2327 5.6717V6.60363C9.29081 6.37905 8.51268 5.71397 8.13965 4.8147H9.38151C9.85086 4.8165 10.2309 5.19914 10.2327 5.6717Z"
                                    fill="#1B1B1B"
                                />
                                <path
                                    d="M0.852554 4.8147H9.37999C9.85085 4.8147 10.2325 5.19902 10.2325 5.6731V14.2591C10.2325 14.7331 9.85084 15.1175 9.37999 15.1175H0.852554C0.381697 15.1175 0 14.7331 0 14.2591V5.6731C0 5.19902 0.381706 4.8147 0.852554 4.8147Z"
                                    fill="url(#paint0_linear_161_578)"
                                />
                                <path
                                    d="M7.36 8.08254H5.65534V12.7563H4.5693V8.08254H2.87256V7.1759H7.36V8.08254Z"
                                    fill="white"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_161_578"
                                        x1="1.7776"
                                        y1="4.14395"
                                        x2="8.52368"
                                        y2="15.7483"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#5A62C3" />
                                        <stop offset="0.5" stopColor="#4D55BD" />
                                        <stop offset={1} stopColor="#3940AB" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">MS Teams</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Embed a MS Teams link</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <div className="zoom">
                            <svg
                                className="group-3"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 6.64024C0 2.99451 2.95545 0.0390625 6.60118 0.0390625H13.3988C17.0446 0.0390625 20 2.99451 20 6.64024V13.3986C20 17.0443 17.0446 19.9998 13.3988 19.9998H6.60118C2.95545 19.9998 0 17.0443 0 13.3986V6.64024Z"
                                    fill="#3D8CFF"
                                />
                                <path
                                    d="M4.71528 6.60095C4.25956 6.60095 3.89014 6.97038 3.89014 7.4261V11.3161C3.89014 12.4879 4.84011 13.4379 6.01194 13.4379H11.8666C12.3223 13.4379 12.6917 13.0685 12.6917 12.6127V8.72276C12.6917 7.55092 11.7417 6.60095 10.5699 6.60095H4.71528Z"
                                    fill="white"
                                />
                                <path
                                    d="M13.5767 8.22379C13.3148 8.44026 13.1632 8.76229 13.1632 9.10204V10.9312C13.1632 11.2742 13.3177 11.5989 13.5837 11.8153L15.3411 13.2446C15.6493 13.4952 16.1102 13.276 16.1102 12.8788V7.13099C16.1102 6.73209 15.6457 6.51342 15.3383 6.76757L13.5767 8.22379Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Zoom</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Embed a Zoom link</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <div className="google-drive">
                            <svg
                                className="group3"
                                width={20}
                                height={18}
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.51205 15.2663L2.39408 16.7651C2.57735 17.0806 2.8408 17.3285 3.15009 17.5088C4.03596 16.4026 4.65261 15.5537 5.00005 14.962C5.35263 14.3617 5.78601 13.4226 6.30019 12.1449C4.91457 11.9654 3.86453 11.8757 3.15009 11.8757C2.46449 11.8757 1.41446 11.9654 0 12.1449C0 12.4942 0.0916397 12.8435 0.274917 13.159L1.51205 15.2663Z"
                                    fill="#0066DA"
                                />
                                <path
                                    d="M16.8501 17.5088C17.1594 17.3285 17.4228 17.0806 17.6061 16.7651L17.9726 16.1453L19.7252 13.159C19.9085 12.8435 20.0001 12.4942 20.0001 12.1449C18.5775 11.9654 17.5294 11.8757 16.8558 11.8757C16.1319 11.8757 15.0838 11.9654 13.7114 12.1449C14.2195 13.4296 14.6472 14.3687 14.9944 14.962C15.3446 15.5607 15.9632 16.4096 16.8501 17.5088Z"
                                    fill="#EA4335"
                                />
                                <path
                                    d="M10.0002 5.83435C11.0252 4.61652 11.7316 3.67745 12.1194 3.01715C12.4316 2.48546 12.7752 1.63655 13.1503 0.470402C12.841 0.2901 12.4859 0.199951 12.1194 0.199951H7.88105C7.51448 0.199951 7.15938 0.301369 6.8501 0.470402C7.32715 1.80785 7.73194 2.7597 8.06448 3.32594C8.43196 3.95169 9.0772 4.78782 10.0002 5.83435Z"
                                    fill="#00832D"
                                />
                                <path
                                    d="M13.6998 12.1449H6.29998L3.1499 17.5088C3.45919 17.6891 3.81429 17.7793 4.18085 17.7793H15.819C16.1855 17.7793 16.5406 17.6779 16.8499 17.5088L13.6998 12.1449Z"
                                    fill="#2684FC"
                                />
                                <path
                                    d="M10.0001 5.8344L6.85002 0.470459C6.54073 0.650759 6.27726 0.898662 6.09399 1.2142L0.274917 11.1307C0.0916397 11.4463 0 11.7956 0 12.1449H6.30019L10.0001 5.8344Z"
                                    fill="#00AC47"
                                />
                                <path
                                    d="M16.8156 6.17248L13.9061 1.2142C13.7228 0.898662 13.4594 0.650759 13.1501 0.470459L10 5.8344L13.6999 12.1449H19.9887C19.9887 11.7956 19.897 11.4463 19.7137 11.1307L16.8156 6.17248Z"
                                    fill="#FFBA00"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">Google Drive</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">
                                    Add links to files/folders from google drive
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <div className="microsoft-onedrive">
                            <svg
                                className="group4"
                                width={20}
                                height={14}
                                viewBox="0 0 20 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.083 9.18618L16.2112 5.266C15.3537 1.94581 11.948 -0.0554689 8.60426 0.796021C7.09849 1.17947 5.79066 2.10634 4.93604 3.3957C4.99994 3.3941 12.083 9.18618 12.083 9.18618Z"
                                    fill="#0364B8"
                                />
                                <path
                                    d="M7.62641 4.13368L7.62622 4.13435C6.8374 3.64923 5.92767 3.3928 4.99978 3.39405C4.97835 3.39405 4.95728 3.3954 4.93588 3.39565C2.17592 3.4296 -0.0337823 5.67879 0.000391088 8.41936C0.0127789 9.41348 0.325601 10.381 0.898297 11.1965L7.08306 10.4273L11.8248 6.63075L7.62641 4.13368Z"
                                    fill="#0078D4"
                                />
                                <path
                                    d="M16.211 5.26604C16.1202 5.26003 16.029 5.25586 15.9368 5.25586C15.383 5.25532 14.8349 5.36765 14.3265 5.58588L14.3264 5.58546L11.8247 6.63083L14.5827 10.0137L19.5132 11.2038C20.5772 9.24237 19.8385 6.79585 17.8632 5.73931C17.3528 5.46631 16.7894 5.30495 16.211 5.26606V5.26604H16.211Z"
                                    fill="#1490DF"
                                />
                                <path
                                    d="M0.898438 11.1965C1.83228 12.5297 3.36447 13.3242 4.99994 13.3234H15.937C17.431 13.3238 18.8047 12.5097 19.5135 11.2037L11.8249 6.63074L0.898438 11.1965Z"
                                    fill="#28A8EA"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">OneDrive</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Add links to files/foldersfrom OneDrive</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="text-fields">
                        <img
                            className="microsoft-onenote-icon-1"
                            src="https://tse3.mm.bing.net/th?id=OIP.VoKeHbcWiIB5BNpdkf0caAHaHa&pid=Api&P=0&h=180"
                        />
                    </div>
                    <div className="text-frame2">
                        <div className="leading-text">
                            <div className="typography2">
                                <div className="text2c">MS OneNote</div>
                            </div>
                            <div className="typographyc">
                                <div className="text3c">Add a link to your MS OneNote</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}