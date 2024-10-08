import React, { useEffect, useRef, useState } from 'react';
import '../sass/desktop.scss';
import profile from '../Image/profile.jpg';
import aboutme from '../Image/aboutme.png';
import android from '../Image/skills/Android.png';
import c from '../Image/skills/C.png';
import cplus from '../Image/skills/C++.png';
import CSS from '../Image/skills/CSS.png';
import firebase from '../Image/skills/FireBase.png';
import github from '../Image/skills/GitHub.png';
import html5 from '../Image/skills/HTML5.png';
import java from '../Image/skills/Java.png';
import javascript from '../Image/skills/JavaScript.png';
import mysql from '../Image/skills/MySQL.png';
import node from  '../Image/skills/NodeJS.png';
import php from '../Image/skills/PHP.png'
import python from '../Image/skills/Python.png';
import post from '../Image/skills/PostgreSQL.png'
import reactjs from '../Image/skills/ReactJS.png';
import sammi from '../Image/education/Sammilani.jpg';
import sita from '../Image/education/Sitakundu.jpg';
import south from '../Image/education/SouthGariaJadunath.jpg';
// import tcs from '../Image/company/TCS.NS.png';
import Typed from 'typed.js';
// import Design from '../Design/Design';
import Documents from '../document/CV2.pdf';
import emailjs from '@emailjs/browser';
import { BarLoader } from 'react-spinners';
import { css } from '@emotion/react';
import contact from '../animation/contact.json';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import { FaArrowRight, FaBriefcase, FaBuilding, FaChevronDown, FaChevronRight, FaCode, FaCog, FaDownload, FaEnvelope, FaEnvelopeOpenText, FaEye, FaFacebook, FaGithub, FaGraduationCap, FaHeadset, FaHeart, FaInstagram, FaLaptopCode, FaLinkedinIn, FaPaperPlane, FaPhone, FaTelegramPlane, FaUser, FaWhatsapp } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import { FaLaptopFile, FaLocationCrosshairs, FaLocationDot, FaUpRightFromSquare } from 'react-icons/fa6';

const override = css`
  display:block;
  margin: 0 auto;
  height: '5px';
  border-color: red;
`;

const DesktopPage = () => {
    const form = useRef();
    const [isHome, setIsHome] = useState(false);
    const [isHomeSection, setIsHomeSection] = useState(true);
    const [isAboutSection, setIsAboutSection] = useState(false);
    const [isExperiencetSection, setIsExperienceSection] = useState(false);
    const [isProjectSection, setIsProjectSection] = useState(false);
    const [isSkillSection, setIsSkillSection] = useState(false);
    const [isEducationSection, setIsEducationSection] = useState(false);
    const [isContactSection, setIsContactSection] = useState(false);
    const [isHover, setIsHover] =useState(false);
    const [loading, setLoading] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [classNames, setClassNames] = useState(false);
    const [startDate] = useState('2024-06-13');
    const [experiencePoint, setExperience] = useState('');

    const calculateExperience = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        let days = now.getDate() - start.getDate();

        if (days < 0) {
            months -= 1;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Get days in the previous month
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        if (years === 0) {
            return `${months} months`;
        }
    
        return `${years} years, ${months} months`;
    };

    useEffect(() => {
        const experience = calculateExperience(startDate);
        setExperience(experience);
    }, [startDate]);

    const changeExEn = () => {
        setClassNames(true);
    }

    const changeExLe = () => {
        setClassNames(false);
    }

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    const handleEnter= () =>{
        setIsHover(true)
    }
    const handleLeave= () =>{
        setIsHover(false)
    }

    const download = () =>{
        var pdfPath = Documents;
        var link = document.createElement('a');
        link.download = 'ArnabResume.pdf';
        link.href = pdfPath;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    useEffect(() => {
        const element = document.querySelector('.autoTyped');
        const options = {
            strings: ["Web Development", "Android Development", "Python Development"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        };
        const typed = new Typed(element, options);
        return () => {
            typed.destroy();
          };
    }, []);
    const gotoTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }
    const listenToScroll = () =>{
        let heightToHidden = 200;
        const windowScroll = 
            document.body.scrollTop || document.documentElement.scrollTop;
        if(windowScroll > heightToHidden){
            setIsHome(true);
        }else{
            // setIsAbout(true);
            setIsHome(false);
        }
        
        /* console.log(windowScroll); */
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [])
    const listenToScrollLink = () => {
        const windowScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
    
        if (windowScroll >= 0 && windowScroll < 200) {
          setIsHomeSection(true);
          setIsAboutSection(false);
          setIsProjectSection(false);
          setIsSkillSection(false);
          setIsEducationSection(false);
          setIsContactSection(false);
          setIsExperienceSection(false);
        } else if (windowScroll >= 200 && windowScroll < 1000) {
          setIsHomeSection(false);
          setIsAboutSection(true);
          setIsProjectSection(false);
          setIsSkillSection(false);
          setIsEducationSection(false);
          setIsContactSection(false);
          setIsExperienceSection(false);
        } else if (windowScroll >=1000 && windowScroll < 1800){
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(true);
            setIsExperienceSection(false);
            setIsProjectSection(false);
            setIsEducationSection(false);
            setIsContactSection(false);
        } else if (windowScroll >=1800 && windowScroll < 2500){
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(false);
            setIsExperienceSection(false);
            setIsProjectSection(false);
            setIsEducationSection(true);
            setIsContactSection(false);
        } else if (windowScroll >=2500 && windowScroll < 2800){
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(false);
            setIsExperienceSection(true);
            setIsProjectSection(false);
            setIsEducationSection(false);
            setIsContactSection(false);
        } else if (windowScroll >=2800 && windowScroll < 3500){
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(false);
            setIsExperienceSection(false);
            setIsEducationSection(false);
            setIsContactSection(false);
            setIsProjectSection(true);
        } else {
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(false);
            setIsExperienceSection(false);
            setIsProjectSection(false);
            setIsEducationSection(false);
            setIsContactSection(true);
        }
      };
    useEffect(() => {
        window.addEventListener("scroll", listenToScrollLink);
        return () => window.removeEventListener("scroll", listenToScrollLink);
    }, []);
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
    
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
    };
      
    const handleGithub = (serchId) =>{
        /* console.log(serchId); */
        if(serchId === 1){
            window.open('https://github.com/ARNAB-BOTMAS/Srishti_project', '_blank');
        } else if(serchId === 2){
            window.open('https://github.com/ARNAB-BOTMAS/ReactPortfolio', '_blank');
        } else if(serchId === 3){
            window.open('https://github.com/ARNAB-BOTMAS/ChatReactJS', '_blank');
        } else if(serchId === 4){
            window.open('https://github.com/ARNAB-BOTMAS/AddTime', '_blank');
        } else if(serchId === 5){
            window.open('https://github.com/ARNAB-BOTMAS/ApplicationOvertime', '_blank');
        } else if(serchId === 6){
            window.open('https://github.com/ARNAB-BOTMAS/PhotoAlbum', '_blank');
        } else if(serchId === 7){
            window.open('https://github.com/ARNAB-BOTMAS/HospitalPrescriptionAppliction', '_blank');
        } else if(serchId === 8){
            window.open('https://github.com/ARNAB-BOTMAS/weather-app', '_blank');
        } else if(serchId === 9){
            window.open('https://github.com/ARNAB-BOTMAS/shop-bill-system', '_blank');
        } else{
            window.open('https://github.com/ARNAB-BOTMAS', '_blank')
        }
    }
      const handleViewmore = (serchId) =>{
        if(serchId === 1){
            window.open('https://github.com/ARNAB-BOTMAS/Srishti_project/blob/main/SRI.py', '_blank');
        }  else if(serchId === 2){
            window.open('https://arnab-mondal-portfolio.onrender.com/', '_blank');
        } else if(serchId === 3){
            window.open('https://chatreactjs.onrender.com/', '_blank');
        } else if(serchId === 4){
            window.open('https://github.com/ARNAB-BOTMAS/AddTime/tree/main/app', '_blank');
        } else if(serchId === 5){
            window.open('https://github.com/ARNAB-BOTMAS/ApplicationOvertime/tree/main/app', '_blank');
        } else if(serchId === 6){
            window.open('https://github.com/ARNAB-BOTMAS/PhotoAlbum/tree/main/app', '_blank');
        } else if(serchId === 7){
            window.open('https://github.com/ARNAB-BOTMAS/HospitalPrescriptionAppliction/tree/main/app/src/main/res', '_blank');
        } else if(serchId === 8){
            window.open('https://weather-app-9ow7.onrender.com/', '_blank');
        } else if(serchId === 9){
            window.open('https://shop-bill-system.onrender.com/', '_blank');
        } else if(serchId === 0){
            window.open('https://github.com/ARNAB-BOTMAS?tab=repositories', '_blank');
        } else{
            window.open('https://github.com/ARNAB-BOTMAS', '_blank')
        }
      }
      
    const sendEmail = (e) => {
        e.preventDefault();

        // Get the form fields
        const nameInput = form.current.querySelector('#name');
        const phoneInput = form.current.querySelector('#phone');
        const emailInput = form.current.querySelector('#email');
        const messageInput = form.current.querySelector('#message');

        // Check if any of the required fields are empty
        if (!nameInput.value.trim()) {
            Swal.fire({
                icon: "error",
                title: "Empty",
                text: "Please enter your Name.",
            });
            nameInput.style.border = '2px solid red';
            return;
        }

        if (!phoneInput.value.trim()) {
            Swal.fire({
                icon: "error",
                title: "Empty",
                text: "Please enter your Phone Number.",
            });
            phoneInput.style.border = '2px solid red';
            return;
        }

        if (!emailInput.value.trim()) {
            Swal.fire({
                icon: "error",
                title: "Empty",
                text: "Please enter your Email.",
            });
            emailInput.style.border = '2px solid red';
            return;
        }

        if (!messageInput.value.trim()) {
            Swal.fire({
                icon: "error",
                title: "Empty",
                text: "Please enter your Message.",
            });
            messageInput.style.border = '2px solid red';
            return;
        }

        try {
            // Reset borders
            nameInput.style.border = '';
            phoneInput.style.border = '';
            emailInput.style.border = '';
            messageInput.style.border = '';

            setLoading(true);
            emailjs.sendForm('service_1q1t0vl', 'template_4gbbx2g', form.current, '6U8ZoQMxHOIlO3RU8')
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Thank you for contacting us!",
                    text: "We appreciate your message and will get back to you as soon as possible.",
                });
                form.current.reset();
                setLoading(false);
            });
        } catch (error) {
            Swal.fire({
                    icon: "warning",
                    title: "We apologize for the inconvenience",
                    text: "we are currently experiencing technical difficulties with our server. Please try again later or contact support for assistance.",
                });
            setLoading(false);
        }
    };
    const gotosocial = (socialId) =>{
        if(socialId === 'facebook'){
            window.open(process.env.REACT_APP_FACEBOOK_URL, '_blank');
        } else if(socialId === 'instagram'){
            window.open(process.env.REACT_APP_INSTAGRAM_URL, '_blank');
        } else if(socialId === 'github'){
            window.open(process.env.REACT_APP_GITHUB_URL, '_blank');
        } else if(socialId === 'linkedin'){
            window.open(process.env.REACT_APP_LINKEDIN_URL, '_blank');
        } else if(socialId === 'telegram'){
            window.open(process.env.REACT_APP_TELEGRAM_URL, '_blank');
        } else if(socialId === 'whatsapp'){
            window.open(process.env.REACT_APP_WHATSAPP_URL,'_blank')
        }
    }
    return (
        <div className='desktop'>
            <nav className={scrolling ? 'navbar' : ''}>
                <div className="logo">
                    {/* <img src={Logo} alt="" /> */}
                    <h1>Arnab Mondal</h1>
                </div>
                <div className="link">
                    <li className={`${isHomeSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('home')}>Home</li>
                    <li className={`${isAboutSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('aboutme')}>About Me</li>
                    <li className={`${isSkillSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('skill')}>Skills</li>
                    <li className={`${isEducationSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('education')}>Education</li>
                    <li className={`${isExperiencetSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('experience')}>Experience</li>
                    <li className={`${isProjectSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('project')}>Project</li>
                    <li className={`${isContactSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('contact')}>Contact</li>
                </div>
            </nav>
            <header className="header" id='home'>
                <div className="innerHeader">
                    <div className="innerImg">
                        <img src={profile} alt="" />
                    </div>
                    <div className="innerText">
                        <span className='innerHeaderFirst'>Hi there,</span>
                        <span className="innerHeaderSecond">I'm Arnab Mondal</span>
                        <span className="innerHeaderThrid">I'm into <span className='autoTyped innerinnerHeaderThrid'></span></span>
                        <button onClick={() => scrollToSection('aboutme')}><span><FaChevronRight className='rightIcon' /> About Me</span></button>
                        <div className="profileLink">
                            {/* <span onClick={() => gotosocial('facebook')}><i class="fa-brands fa-facebook"></i></span>
                            <span onClick={() => gotosocial('instagram')}><i class="fa-brands fa-square-instagram"></i></span>
                            <span onClick={() => gotosocial('github')}><i class="fa-brands fa-github"></i></span>
                            <span onClick={() => gotosocial('linkedin')}><i class="fa-brands fa-linkedin"></i></span>
                            <span onClick={() => gotosocial('telegram')}><i class="fa-brands fa-telegram"></i></span>
                            <span onClick={() => gotosocial('whatsapp')}><i class="fa-brands fa-square-whatsapp"></i></span> */}

                            <span onClick={() => gotosocial('facebook')}><FaFacebook className='icon facebook'/></span>
                            <span onClick={() => gotosocial('instagram')}><FaInstagram className='icon instagram'/></span>
                            <span onClick={() => gotosocial('github')}><FaGithub className='icon github' /></span>
                            <span onClick={() => gotosocial('linkedin')}><FaLinkedinIn className='icon linkedin'/></span>
                            <span onClick={() => gotosocial('telegram')}><FaTelegramPlane className='icon telegram'/></span>
                            <span onClick={() => gotosocial('whatsapp')}><FaWhatsapp className='icon whatsapp'/></span>
                        </div>
                    </div>
                </div>

            </header>
            <main>
                <div className="aboutme" id='aboutme'>
                    <h1><FaUser />&nbsp;About Me</h1>
                    <div className="inneraboutme">
                        <div className="innerinneraboutme">
                            <img src={aboutme} alt="" />
                            <div className="inneraboutmetext">
                                <span className='headeraboutmetext'>I'm Arnab</span>
                                <span className="subheaderaboutmetext">Full Stack Developer</span><br />
                                <span className='parheaderaboutmetext'>
                                    I am a highly motivated and detailoriented computer science student with a passion for programming and a focus on delivering high-quality results. Skilled in Ms Office, web development, and programming in JAVA, C, C++, Python, I enjoy tackling complex problems and developing innovative solutions. As a strong team player with excellent communication skills, I am always eager to collaborate with others to achieve common goals.
                                </span>
                                <span className='pointheaderaboutmetext'><FaEnvelope/>&nbsp;<b>Email:</b>&nbsp;arnabmondal203@gmail.com.</span>
                                <span className='pointheaderaboutmetext'><FaLocationCrosshairs />&nbsp;<b>Place:</b>&nbsp;Champahati, West Bengal - 743330, India.</span><br />
                                <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={download}><FaDownload class={`icons ${isHover ? 'fa-bounce' : ''}`} />&nbsp;Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skill" id='skill'>
                    <h1><FaCog className='fa-spin'/>&nbsp;Skills</h1>
                    <div className="innerskill">
                        <section className="skillcart">
                            <img src={android} alt="" />
                            <span>Android</span>
                        </section>
                        <section className="skillcart">
                            <img src={c} alt="" />
                            <span>C</span>
                        </section>
                        <section className="skillcart">
                            <img src={cplus} alt="" />
                            <span>C++</span>
                        </section>
                        <section className="skillcart">
                            <img src={CSS} alt="" />
                            <span>CSS</span>
                        </section>
                        <section className="skillcart">
                            <img src={firebase} alt="" />
                            <span>Firebase</span>
                        </section>
                        <section className="skillcart">
                            <img src={github} alt="" />
                            <span>GitHub</span>
                        </section>
                        <section className="skillcart">
                            <img src={html5} alt="" />
                            <span>HTML5</span>
                        </section>
                        <section className="skillcart">
                            <img src={java} alt="" />
                            <span>Java</span>
                        </section>
                        <section className="skillcart">
                            <img src={javascript} alt="" />
                            <span>JavaScript</span>
                        </section>
                        <section className="skillcart">
                            <img src={mysql} alt="" />
                            <span>MySQL</span>
                        </section>
                        <section className="skillcart">
                            <img src={node} alt="" />
                            <span>Node JS</span>
                        </section>
                        <section className="skillcart">
                            <img src={php} alt="" />
                            <span>PHP</span>
                        </section>
                        <section className="skillcart">
                            <img src={python} alt="" />
                            <span>Python</span>
                        </section>
                        <section className="skillcart">
                            <img src={post} alt="" />
                            <span>PostgreSQL</span>
                        </section>
                        <section className="skillcart">
                            <img src={reactjs} alt="" />
                            <span>React JS</span>
                        </section>
                    </div>
                </div>
                <div className="education" id='education'>
                    <h1><FaGraduationCap className='cap' />&nbsp;My Education</h1>
                    <div className="inneredu">
                        <section className='schoolEduaction'>
                            <img src={sammi} alt="" />
                            <div className="innerEduText">
                                <span className="courseName">Bachelor In Computer Science (Hons.)</span>
                                <span className="instName">Sammilani Mahavidyalaya | CU</span>
                                <span className="compelteYear">2020-2023 | Complete</span>
                            </div>
                        </section>
                        <section className='schoolEduaction'>
                            <img src={sita} alt="" />
                            <div className="innerEduText">
                                <span className="courseName">High School, XI-XII</span>
                                <span className="instName">Sitakundu Vidyayatan | WBCHSE</span>
                                <span className="compelteYear">2018-2020 | Complete</span>
                            </div>
                        </section>
                        <section className='schoolEduaction'>
                            <img src={south} alt="" />
                            <div className="innerEduText">
                                <span className="courseName">Schooling, V-X</span>
                                <span className="instName">South Garia Jadunath Vidyamandir (H.S) | WBBSE</span>
                                <span className="compelteYear">2013-2018 | Complete</span>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='experience' id='experience'>
                    <h1><FaBriefcase />&nbsp;Experience</h1>
                    <div className="comImage">
                        <div className="imageLogo" onMouseEnter={changeExEn} onMouseLeave={changeExLe}>
                            <div className={classNames ? 'imageContent' : 'imageContentNone'}>
                                {/* <h1></h1> */}
                                <div className="innerExContent">
                                    <p>
                                        <h2><FaBuilding />&nbsp;TCS Indore Campus</h2>
                                        <small><b>Tata Consultancy Services</b></small>
                                        <h3>Graduate Trainee</h3>
                                        <small><b>Jun 2024 to Present</b></small>
                                    </p>
                                    <p>Experience: {experiencePoint}</p>
                                </div>
                                <h1><FcApproval className='fa-beat-fade'/></h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="project" id="project">
                    <h1><FaLaptopCode />&nbsp;Project</h1>
                    <div className="innerproject">
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>Srishti AI Project</span>
                                </div>
                                <div className="projectContent">
                                    <p>At Srishti AI, our mission is clear - to pioneer the next era of intelligent technologies. Our team of visionary engineers and data scientists are dedicated to pushing the boundaries of what's possible, creating advanced algorithms and solutions that propel us into the future.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(1)}><FaEye className='icons'/>&nbsp;View Code</button>
                                        <button onClick={() => handleGithub(1)}><FaCode className='icons'/>&nbsp;GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>React JS Website</span>
                                </div>
                                <div className="projectContent">
                                    <p>Welcome to the future of web development! At React JS, we're not just coding; we're crafting seamless, dynamic, and engaging online experiences.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(2)}><FaLaptopFile className='icons'/>&nbsp;Visit Site</button>
                                        <button onClick={() => handleGithub(2)}><FaEye className='icons'/>&nbsp;View Code</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>React JS Chat Website</span>
                                </div>
                                <div className="projectContent">
                                    <p>Embarking on the creation of a chat website using ReactJS represents a fantastic project, providing you with a valuable opportunity to elevate your web development skills. This endeavor not only allows you to delve into the intricacies of ReactJS but also empowers you to construct a practical and highly interactive application.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(3)}><FaLaptopFile className='icons'/>&nbsp;Visit Site</button>
                                        <button onClick={() => handleGithub(3)}><FaEye className='icons'/>&nbsp;View Code</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>Over Time Application Part - I</span>
                                </div>
                                <div className="projectContent">
                                    <p>This application is designed to facilitate the recording of entry and exit times. Its primary function is to allow users to conveniently input and track their entry and exit times, providing a streamlined and efficient way to monitor these crucial data points.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(4)}><FaEye className='icons'/>&nbsp;View Code</button>
                                        <button onClick={() => handleGithub(4)}><FaCode className='icons'/>&nbsp;GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>Over Time Application Part - II</span>
                                </div>
                                <div className="projectContent">
                                    <p>This application is designed to facilitate the recording of entry and exit times. Its primary function is to allow users to conveniently input and track their entry and exit times, providing a streamlined and efficient way to monitor these crucial data points.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(5)}><FaEye className='icons'/>&nbsp;View Code</button>
                                        <button onClick={() => handleGithub(5)}><FaCode className='icons'/>&nbsp;GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>Photo Album Application</span>
                                </div>
                                <div className="projectContent">
                                    <p>Create a Photo Album application that allows users to upload photos along with timestamps. This application serves as a platform for users to seamlessly share and organize their photos while capturing the temporal context through timestamp integration.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(6)}><FaEye className='icons'/>&nbsp;View Code</button>
                                        <button onClick={() => handleGithub(6)}><FaCode className='icons'/>&nbsp;GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>Hospital Prescription Application</span>
                                </div>
                                <div className="projectContent">
                                    <p>Create a Hospital Prescription application that allows users to Prescription along with timestamps. This application serves as a platform for users to seamlessly share and organize their Prescription while capturing the temporal context through timestamp integration.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(7)}><FaEye className='icons'/>&nbsp;View Code</button>
                                        <button onClick={() => handleGithub(7)}><FaCode className='icons'/>&nbsp;GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>Weather Application</span>
                                </div>
                                <div className="projectContent">
                                    <p>Experience the ultimate weather companion: your go-to app for precise forecasts, personalized alerts, and insightful weather insights. Stay ahead of the elements, rain or shine, with real-time updates at your fingertips. From daily planning to weekend adventures, trust our app to keep you informed and prepared for whatever nature brings your way.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(8)}><FaLaptopFile className='icons' />&nbsp;Visit Site</button>
                                        <button onClick={() => handleGithub(8)}><FaEye className='icons'/>&nbsp;View Code</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>Shop Bill System</span>
                                </div>
                                <div className="projectContent">
                                    <p>A Shop Bill System is a software application designed to streamline the process of generating bills and managing transactions within a retail or shop environment.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(9)}><FaLaptopFile className='icons' />&nbsp;Visit Site</button>
                                        <button onClick={() => handleGithub(9)}><FaEye className='icons'/>&nbsp;View Code</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <button className='viewmore' onClick={() => handleViewmore(0)}>View More&nbsp;<FaArrowRight /></button>
                </div>
                <div className="contact" id='contact'>
                    <h1><FaHeadset />&nbsp;Contact Me</h1>
                    <div className="innercontact">
                        <div className="formContent">
                            <form ref={form} onSubmit={sendEmail}>
                                <input type='text' placeholder='Name' name='user_name' id='name' className='name'/>
                                <input type='tel' placeholder='Phone' name='user_phone' id='phone' className='userPhone'/>
                                <input type='email' placeholder='Email' name='user_email' id='email' className='email'/>
                                <textarea placeholder='Message' name='message' id='message' className='msg'/>
                                <button type='submit' className='desktop-send-btn' disabled={loading} style={{ position: 'relative' }}>
                                    {loading ? (
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding:'6px'}}>
                                            <BarLoader css={override} size={9} color={'#FFBB5C'} loading={loading} />
                                        </div>
                                    ) : (
                                        <span>
                                            <FaPaperPlane/> Send
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                        <div className="animationContent">
                            <Lottie loop={true} animationData={contact}/>
                        </div>
                    </div>

                </div>
            </main>
            <footer>
                <div className="innerFooter">
                    <div className="portfolio">
                        <h2>Arnab's Portfolio</h2>
                        <p>Thank you for visiting my personal portfolio website contact with me over socials</p>
                        <p>Keep rising 🚀. Contact with me over chat</p>
                    </div>
                    <div className="portfolio">
                        <h2>Quick Links</h2>
                            <li onClick={() => scrollToSection('home')}><FaUpRightFromSquare/>&nbsp;Home</li><br />
                            <li onClick={() => scrollToSection('skill')}><FaUpRightFromSquare/>&nbsp;Skills</li><br />
                            <li onClick={() => scrollToSection('aboutme')}><FaUpRightFromSquare/>&nbsp;About Me</li><br />
                            <li onClick={() => scrollToSection('education')}><FaUpRightFromSquare/>&nbsp;Education</li><br />
                            <li onClick={() => scrollToSection('experience')}><FaUpRightFromSquare/>&nbsp;Experience</li><br />
                            <li onClick={() => scrollToSection('project')}><FaUpRightFromSquare/>&nbsp;Project</li><br />
                            <li onClick={() => scrollToSection('contact')}><FaUpRightFromSquare/>&nbsp;Contact</li><br />
                    </div>
                    <div className="portfolio">
                        <h2>Contact Info</h2>
                        <p><span><FaPhone /></span>&nbsp;+91 93394 21756</p>
                        <p><span><FaEnvelopeOpenText/></span>&nbsp;arnabmondal203@gmail.com</p>
                        <p><span><FaLocationDot/></span>&nbsp;Champahati, West Bengal - 743330, India</p>
                        <div className="links">
                            <div onClick={() => gotosocial('facebook')}><FaFacebook className='icons'/></div>
                            <div onClick={() => gotosocial('instagram')}><FaInstagram className='icons'/></div>
                            <div onClick={() => gotosocial('github')}><FaGithub className='icons'/></div>
                            <div onClick={() => gotosocial('linkedin')}><FaLinkedinIn className='icons'/></div>
                            <div onClick={() => gotosocial('telegram')}><FaTelegramPlane className='icons'/></div>
                            <div onClick={() => gotosocial('whatsapp')}><FaWhatsapp className='icons'/></div>
                        </div>
                    </div>
                </div>
                <div className="bottomFooter">
                    Designed With <span style={{color: 'red', display: 'inline-flex' }}><FaHeart className='fa-beat'/></span> Arnab Mondal
                </div>
            </footer>
            <div className={`top ${isHome ? 'show' : ''}`} onClick={gotoTop}>
                {/* <i className="fa-solid fa-chevron-down"></i> */}
                <FaChevronDown />
            </div>

        </div>
    );
}

export default DesktopPage;
