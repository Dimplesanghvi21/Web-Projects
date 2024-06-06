import React, { useEffect } from 'react' 
import './footer.css'
import video2 from '../../../src/Assets/video(2).mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  //lets create a react hook to add a scroll animation......
  useEffect(() =>{
    Aos.init({duration: 2000})
  })

    return (
      <section className='footer'>
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>


        <div className="secContent container">
          <div className="contactDiv">
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
              <button data-aos="fade-up" className='btn flex'type='submit'>
              Send <FiSend className='icon'/>
              </button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#"className='logo flex'>
                 <MdTravelExplore className='icon'/> Travel.
                </a>
              </div>

              <div data-aos="fade-up" className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in saepe error, odio qui quibusdam asperiores neque molestias amet at quam perspiciatis quae accusantium, reiciendis consectetur, mollitia inventore officia repellendus.
              </div>


              <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube  className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
              </div>
            </div>
                       {/*  group one*/}
            <div className="footerLinks grid">
              <div data-aos="fade-up" duration="3000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Touristm
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
                </li>
              </div>
            </div>

                        {/*  group two*/}
            <div className="footerLinks grid">
              <div data-aos="fade-up" duration="4000" className="linkGroup">
                <span className="groupTitle">
                  PARTNER'S
                </span>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rental Cars
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
                </li>
              </div>
            </div>

                        {/*  group three*/}
            <div data-aos="fade-up" duration="5000" className="footerLinks grid">
              <div className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE       
                </span>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                California
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Indoneasia
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Europe
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Ocenaia
                </li>
              </div>
            </div>

            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHTS.RESERVED</small>
            </div>
            
          </div>
        </div>
      </section>
    )
  }

export default Footer