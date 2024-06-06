import React, { useEffect } from 'react' 
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

//let me import the images//
import img from '../../Assets/img(1).jpg'
import img1 from '../../Assets/img(2).jpg'
import img2 from '../../Assets/img(3).jpg'
import img3 from '../../Assets/img(4).webp'
import img4 from '../../Assets/img(5).jpg'
import img5 from '../../Assets/img(6).avif'
import img6 from '../../Assets/img(7).avif'
import img7 from '../../Assets/img(8).avif'
import img8 from '../../Assets/img(9).webp'

import Aos from 'aos'
import 'aos/dist/aos.css'



//array named data//

const Data = [
    {
        id:1,
        imgSrc:img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'Beautiful, white sandy beaches and a crystal clear turquoise lagoon, ringed with a multitude of small palm covered motu, provide the setting for a truly unforgettable experience.'
    },


   
    {
        id:2,
        imgSrc:img1,
        destTitle:'Machu Picchu',
        location:'Peru',
        grade:'CULTURAL RELAX',
        fees:'$600',
        description:' Machu Picchu is among the greatest artistic, architectural and land use achievements anywhere and the most significant tangible legacy of the Inca civilization.'
    },

 
    {
        id:3,
        imgSrc:img2,
        destTitle:'Great Barrier Reef',
        location:'Australia',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'The Great Barrier Reef is the worlds largest and most diverse reef ecosystem. Its scientific, cultural and environmental values are world-renowned: UNESCO added the Reef to the World Heritage List more than 40 years ago for its Outstanding Universal Value. Were working hard to safeguard our unique natural wonder.'
    },



    {
        id:4,
        imgSrc:img3,
        destTitle:'Cappadocia',
        location:'Turkey',
        grade:'CULTURAL RELAX',
        fees:'$800',
        description:'Cappadocia is a semi-arid place in Turkey known for its cone rock formations, cave churches, fairy chimneys, rock houses, underground cities and a unique landscape.'
    },



    {
        id:5,
        imgSrc:img4,
        destTitle:'Guanajuato',
        location:'Mexico',
        grade:'CULTURAL RELAX',
        fees:'$1100',
        description:'Guanajuato (Spanish pronunciation: [gwanaˈxwato], Otomi: Ndänuë) is a municipality in central Mexico and the capital of the state of the same name. It is part of the macroregion of the Bajío. It is located in a narrow valley, which makes its streets narrow and winding.'
    },



    {
        id:6,
        imgSrc:img5,
        destTitle:'Cinque Terre',
        location:'Italy',
        grade:'CULTURAL RELAX',
        fees:'$840',
        description:'The Cinque Terre represent one of the most pristine and extensive Mediterranean natural and semi-natural areas of Liguria; this is due to mainly historical and geomorphological reasons that have prevented an excessive building expansion and the construction of further main roads.'
    },


    {
        id:7,
        imgSrc:img6,
        destTitle:'Angkor Wat',
        location:'Cambodia',
        grade:'CULTURAL RELAX',
        fees:'$790',
        description:'Angkor Wat is an architectural masterpiece and the largest religious monument in the world – covering an area four times the size of Vatican City. '
    },



    {
        id:8,
        imgSrc:img7,
        destTitle:'Taj Mahal',
        location:'India',
        grade:'CULTURAL RELAX',
        fees:'$900',
        description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
    },



    {
        id:9,
        imgSrc:img8,
        destTitle:'Bali Island',
        location:'Indonesia',
        grade:'CULTURAL RELAX',
        fees:'$500',
        description:'Bali is a volcanic island. The two main volcanos are Mount Agung and Mount Batur. Mount Agung is sacred to the Balinese people. Mount Agung is an active volcano, with a deep, large crater.'
    },

]

const Main = () =>{

        //lets create a react hook to add a scroll animation......
  useEffect(() =>{
    Aos.init({duration: 2000})
  })


    return(
         <section className='main container section'>

            <div className="secTitle">
                <h3 data-aos="fade-right"className="title">
                    Most Visited Destinations!!!
                </h3>
            </div>



            <div className="secContent grid">

                {/*execution of the data array*/}


                {
                    Data.map(({id, imgSrc, destTitle, location, grade ,fees, description})=>{
                        return( 
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/*here it will return sngle id from the array*/}

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>


                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className="name">{location}</span>
                                    </span>


                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>


                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    )
}

export default Main