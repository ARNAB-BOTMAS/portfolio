import React, { useEffect, useRef, useState } from 'react';
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
import '../sass/tab.scss';
import Typed from 'typed.js';
import Documents from '../document/CV2.pdf';
import emailjs from '@emailjs/browser';
import { BarLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  display:block;
  margin: 0 auto;
  height: '5px';
  border-color: red;
`;

const TabPage = () => {
    const form = useRef();
    const [isActive, setIsActive] = useState(false);
    const [isHover, setIsHover] =useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isHomeSection, setIsHomeSection] = useState(true);
    const [isAboutSection, setIsAboutSection] = useState(false);
    const [isProjectSection, setIsProjectSection] = useState(false);
    const [isSkillSection, setIsSkillSection] = useState(false);
    const [isEducationSection, setIsEducationSection] = useState(false);
    const [isContactSection, setIsContactSection] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    };
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        setIsActive(!isActive);
    
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
      const scrollToSectionButton = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        // setIsActive(!isActive);
    
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

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
        } else if (windowScroll >= 200 && windowScroll < 1200) {
          setIsHomeSection(false);
          setIsAboutSection(true);
          setIsProjectSection(false);
          setIsSkillSection(false);
          setIsEducationSection(false);
          setIsContactSection(false);
        } else if (windowScroll >=1200 && windowScroll < 2600){
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(true);
            setIsProjectSection(false);
            setIsEducationSection(false);
            setIsContactSection(false);
        } else if (windowScroll >=2600 && windowScroll < 4200){
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(false);
            setIsProjectSection(false);
            setIsEducationSection(true);
            setIsContactSection(false);
        } else if (windowScroll >=4200 && windowScroll < 5000){
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(false);
            setIsProjectSection(true);
            setIsEducationSection(false);
            setIsContactSection(false);
        } else {
            setIsHomeSection(false);
            setIsAboutSection(false);
            setIsSkillSection(false);
            setIsProjectSection(false);
            setIsEducationSection(false);
            setIsContactSection(true);
        }
      };
    useEffect(() => {
        window.addEventListener("scroll", listenToScrollLink);
        return () => window.removeEventListener("scroll", listenToScrollLink);
    }, []);
    
      useEffect(() => {
        const element = document.querySelector('.autoTypedTab');
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

    const handleGithub = (serchId) =>{
        /* console.log(serchId); */
        if(serchId === 1){
            window.open('https://github.com/ARNAB-BOTMAS/Srishti_project', '_blank');
        } else if(serchId === 2){
            window.open('https://github.com/ARNAB-BOTMAS/ReactPortfolio', '_blank');
        } else if(serchId === 3){
            window.open('https://github.com/ARNAB-BOTMAS/ReactChat', '_blank');
        } else if(serchId === 4){
            window.open('https://github.com/ARNAB-BOTMAS/AddTime', '_blank');
        } else if(serchId === 5){
            window.open('https://github.com/ARNAB-BOTMAS/ApplicationOvertime', '_blank');
        } else if(serchId === 6){
            window.open('https://github.com/ARNAB-BOTMAS/PhotoAlbum', '_blank');
        } else if(serchId === 7){
            window.open('https://github.com/ARNAB-BOTMAS/HospitalPrescriptionAppliction', '_blank');
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
            window.open('https://main--enchanting-gumdrop-3b219a.netlify.app/', '_blank');
        } else if(serchId === 4){
            window.open('https://github.com/ARNAB-BOTMAS/AddTime/tree/main/app', '_blank');
        } else if(serchId === 5){
            window.open('https://github.com/ARNAB-BOTMAS/ApplicationOvertime/tree/main/app', '_blank');
        } else if(serchId === 6){
            window.open('https://github.com/ARNAB-BOTMAS/PhotoAlbum/tree/main/app', '_blank');
        } else if(serchId === 7){
            window.open('https://github.com/ARNAB-BOTMAS/HospitalPrescriptionAppliction/tree/main/app/src/main/res', '_blank');
        } else if(serchId === 0){
            window.open('https://github.com/ARNAB-BOTMAS?tab=repositories', '_blank');
        }  else{
            window.open('https://github.com/ARNAB-BOTMAS', '_blank')
        }
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
      const gotoTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
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
            alert("Please enter your name.");
            nameInput.style.border = '2px solid red';
            return;
        }

        if (!phoneInput.value.trim()) {
            alert("Please enter your phone number.");
            phoneInput.style.border = '2px solid red';
            return;
        }

        if (!emailInput.value.trim()) {
            alert("Please enter your email.");
            emailInput.style.border = '2px solid red';
            return;
        }

        if (!messageInput.value.trim()) {
            alert("Please enter your message.");
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
                alert("Thank you for contacting us! We appreciate your message and will get back to you as soon as possible.");
                form.current.reset();
                setLoading(false);
            });
        } catch (error) {
            alert("We apologize for the inconvenience, but we are currently experiencing technical difficulties with our server. Please try again later or contact support for assistance.");
            setLoading(false);
        }
    };

    const gotosocial = (socialId) =>{
        if(socialId === 'facebook'){
            window.open('https://www.facebook.com/shagor.roy.370?mibextid=JRoKGi', '_blank');
        } else if(socialId === 'instagram'){
            window.open('https://www.instagram.com/shagor.roy.370/', '_blank');
        } else if(socialId === 'github'){
            window.open('https://github.com/ARNAB-BOTMAS', '_blank');
        } else if(socialId === 'linkedin'){
            window.open('https://www.linkedin.com/in/arnab-mondal-4409a5299/', '_blank');
        } else if(socialId === 'telegram'){
            window.open('https://t.me/Arnabmon', '_blank');
        } else if(socialId === 'whatsapp'){
            window.open('https://wa.me/919339421756','_blank')
        }
    }
    return (
        <div className='tab'>
            <nav className="navbar">
                <div className="innerNavbar">
                    <div className="logo">
                        {/* <img src={Logo} alt="" /> */}
                        <h1>Arnab Mondal</h1>
                    </div>
                    <div className={`hamburgs ${isActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
                <div className={`link ${isActive ? 'active' : ''}`}>
                    <li className={`${isHomeSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('hometab')}>Home</li>
                    <li className={`${isAboutSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('aboutmetab')}>About Me</li>
                    <li className={`${isSkillSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('skilltab')}>Skills</li>
                    <li className={`${isEducationSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('educationtab')}>Education</li>
                    <li className={`${isProjectSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('projecttab')}>Project</li>
                    <li className={`${isContactSection ? 'activeSection' : ''}`} onClick={() => scrollToSection('contacttab')}>Contact</li>
                </div>
            </nav>
            <header className="header" id='hometab'>
                <div className="innerHeader">
                    <div className="innerImg">
                        <img src={profile} alt="" />
                    </div>
                    <div className="innerText">
                        <span className='innerHeaderFirst'>Hi there,</span>
                        <span className="innerHeaderSecond">I'm Arnab Mondal</span>
                        <span className="innerHeaderThrid">I'm into <span className='autoTypedTab innerinnerHeaderThrid'></span></span>
                        <button onClick={() => scrollToSectionButton('aboutmetab')}><span><i class="fa-solid fa-chevron-right"></i></span> About Me</button>
                        <div className="profileLink">
                            <span onClick={() => gotosocial('facebook')}><i class="fa-brands fa-facebook"></i></span>
                            <span onClick={() => gotosocial('instagram')}><i class="fa-brands fa-square-instagram"></i></span>
                            <span onClick={() => gotosocial('github')}><i class="fa-brands fa-github"></i></span>
                            <span onClick={() => gotosocial('linkedin')}><i class="fa-brands fa-linkedin"></i></span>
                            <span onClick={() => gotosocial('telegram')}><i class="fa-brands fa-telegram"></i></span>
                            <span onClick={() => gotosocial('whatsapp')}><i class="fa-brands fa-square-whatsapp"></i></span>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="aboutme" id='aboutmetab'>
                    <h1><i class="fa-solid fa-user"></i> About Me</h1>
                    <div className="inneraboutme">
                        <div className="innerinneraboutme">
                            <img src={aboutme} alt="" />
                            <div className="inneraboutmetext">
                                <span className='headeraboutmetext'>I'm Arnab</span>
                                <span className="subheaderaboutmetext">Full Stack Developer</span><br />
                                <span className='parheaderaboutmetext'>
                                    I am a highly motivated and detailoriented computer science student with a passion for programming and a focus on delivering high-quality results. Skilled in Ms Office, web development, and programming in JAVA, C, C++, Python, I enjoy tackling complex problems and developing innovative solutions. As a strong team player with excellent communication skills, I am always eager to collaborate with others to achieve common goals.
                                </span>
                                <span className='pointheaderaboutmetext'><i class="fa-solid fa-envelope"></i> <b>Email:</b> arnabmondal203@gmail.com.</span>
                                <span className='pointheaderaboutmetext'><i class="fa-solid fa-location-crosshairs"></i> <b>Place:</b> Champahati, West Bengal - 743330, India.</span><br />
                                <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={download}><i class={`fa-solid fa-download ${isHover ? 'fa-bounce' : ''}`}></i> Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skill" id='skilltab'>
                    <h1><i class="fa-solid fa-gear fa-spin"></i> Skills</h1>
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
                <div className="education" id='educationtab'>
                    <h1><i class="fa-solid fa-graduation-cap"></i> My Education</h1>
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
                <div className="project" id="projecttab">
                    <h1><i class="fa-solid fa-laptop-code"></i> Project</h1>
                    <div className="innerproject">
                        <section className="projectcard">
                            <div className='coverpage'>
                                <div className="projecttext">
                                    <span>Srishti AI Project</span>
                                </div>
                                <div className="projectContent">
                                    <p>At Srishti AI, our mission is clear - to pioneer the next era of intelligent technologies.</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(1)}><i class="fa-solid fa-eye"></i> View Code</button>
                                        <button onClick={() => handleGithub(1)}><i class="fa-solid fa-code"></i> GitHub</button>
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
                                        <button onClick={() => handleViewmore(2)}><i class="fa-solid fa-laptop-file"></i> Visit Site</button>
                                        <button onClick={() => handleGithub(2)}><i class="fa-solid fa-eye"></i> View Code</button>
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
                                    <p>Embarking on the creation of a chat website using ReactJS represents a fantastic project, providing you with a valuable opportunity to elevate your web development skills...</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(3)}><i class="fa-solid fa-laptop-file"></i> Visit Site</button>
                                        <button onClick={() => handleGithub(3)}><i class="fa-solid fa-eye"></i> View Code</button>
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
                                    <p>This application is designed to facilitate the recording of entry and exit times....</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(4)}><i class="fa-solid fa-eye"></i> View Code</button>
                                        <button onClick={() => handleGithub(4)}><i class="fa-solid fa-code"></i> GitHub</button>
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
                                    <p>This application is designed to facilitate the recording of entry and exit times....</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(5)}><i class="fa-solid fa-eye"></i> View Code</button>
                                        <button onClick={() => handleGithub(5)}><i class="fa-solid fa-code"></i> GitHub</button>
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
                                    <p>Create a Photo Album application that allows users to upload photos along with timestamps....</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(6)}><i class="fa-solid fa-eye"></i> View Code</button>
                                        <button onClick={() => handleGithub(6)}><i class="fa-solid fa-code"></i> GitHub</button>
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
                                    <p>Create a Hospital Prescription application that allows users to Prescription along with timestamps....</p>
                                    <div className="buttonContent">
                                        <button onClick={() => handleViewmore(7)}><i class="fa-solid fa-eye"></i> View Code</button>
                                        <button onClick={() => handleGithub(7)}><i class="fa-solid fa-code"></i> GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <button className='viewmore' onClick={() => handleViewmore(0)}>View More <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="contact" id='contacttab'>
                    <h1><i class="fa-solid fa-headphones-simple"></i> Contact Me</h1>
                    <div className="innercontact">
                        <div className="formContent">
                            <form ref={form} onSubmit={sendEmail}>
                                <input type='text' placeholder='Name' name='user_name' id='name'/>
                                <input type='tel' placeholder='Phone' name='user_phone' id='phone'/>
                                <input type='email' placeholder='Email' name='user_email' id='email'/>
                                <textarea placeholder='Message' name='message' id='message'/>
                                <button type='submit' className='desktop-send-btn' disabled={loading} style={{ position: 'relative' }}>
                                    {loading ? (
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding:'6px'}}>
                                            <BarLoader css={override} size={9} color={'#FFBB5C'} loading={loading} />
                                        </div>
                                    ) : (
                                        <span>
                                            <i className="fa-solid fa-paper-plane"></i> Send
                                        </span>
                                    )}
                                </button>
                            </form>
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
                            <li onClick={() => scrollToSectionButton('homephone')}><i class="fa-solid fa-up-right-from-square"></i> Home</li>
                            <li onClick={() => scrollToSectionButton('skillphone')}><i class="fa-solid fa-up-right-from-square"></i> Skills</li>
                            <li onClick={() => scrollToSectionButton('aboutmephone')}><i class="fa-solid fa-up-right-from-square"></i> About Me</li>
                            <li onClick={() => scrollToSectionButton('educationphone')}><i class="fa-solid fa-up-right-from-square"></i> Education</li>
                            <li onClick={() => scrollToSectionButton('projectphone')}><i class="fa-solid fa-up-right-from-square"></i> Project</li>
                            <li onClick={() => scrollToSectionButton('contactphone')}><i class="fa-solid fa-up-right-from-square"></i> Contact</li>
                    </div>
                    <div className="portfolio">
                        <h2>Contact Info</h2>
                        <p><span><i class="fa-solid fa-phone"></i></span> +91 93394 21756</p>
                        <p><span><i class="fa-solid fa-envelope-open-text"></i></span> arnabmondal203@gmail.com</p>
                        <p><span><i class="fa-solid fa-location-dot"></i></span> Champahati, West Bengal - 743330, India</p>
                        <div className="links">
                            <div onClick={() => gotosocial('facebook')}><i class="fa-brands fa-facebook"></i></div>
                            <div onClick={() => gotosocial('instagram')}><i class="fa-brands fa-instagram"></i></div>
                            <div onClick={() => gotosocial('github')}><i class="fa-brands fa-github"></i></div>
                            <div onClick={() => gotosocial('linkedin')}><i class="fa-brands fa-linkedin-in"></i></div>
                            <div onClick={() => gotosocial('telegram')}><i class="fa-brands fa-telegram"></i></div>
                            <div onClick={() => gotosocial('whatsapp')}><i class="fa-brands fa-whatsapp"></i></div>
                        </div>
                    </div>
                </div>
                <div className="bottomFooter">
                    Designed With <span style={{color: 'red'}}><i class="fa-solid fa-heart fa-beat"></i></span> Arnab Mondal
                </div>
            </footer>
            <div className={`top ${isHome ? 'show' : ''}`} onClick={gotoTop}>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
        </div>
    );
}

export default TabPage;
