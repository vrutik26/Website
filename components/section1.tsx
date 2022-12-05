import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import swiperCore,{Autoplay} from 'swiper'

export default function section1() {
  
    swiperCore.use([Autoplay])

  const bg={
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right"    
  }

    return (
    <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Treading Tech</h1>
            
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay:3000
                }}
            >
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide1() }</SwiperSlide>
                <SwiperSlide>{ Slide2() }</SwiperSlide>
                <SwiperSlide>{ Slide3() }</SwiperSlide>
            
            </Swiper>
        </div>
    </section>
  )
}

function Slide(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link legacyBehavior href={"https://www.gadgetsnow.com/tech-news/samsung-plans-to-make-fingerprint-login-2-5-bn-times-more-secure/articleshow/95975989.cms"}><a target='_blank'><Image src={"/images/News1.jpg"} width={600} height={600} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col pl-12">
                <div className="cat">
                    <Link legacyBehavior href={""}><a className="text-orange-600 hover:text-orange-800">Tech, Business</a></Link>
                    <Link legacyBehavior href={""}><a className="text-gray-800 hover:text-gray-600">- Dec 4, 2022</a></Link>
                </div>
                <div className="title">
                    <Link  legacyBehavior href={"https://www.gadgetsnow.com/tech-news/samsung-plans-to-make-fingerprint-login-2-5-bn-times-more-secure/articleshow/95975989.cms"}><a target='_blank' className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Samsung plans to make fingerprint login 2.5 bn times more secure</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Tech giant Samsung was reportedly working on a technology that will make fingerprint login 2.5 billion times more secure in 2025.
The new technology will make the full OLED screen capable of scanning multiple fingerprints simultaneously, instead of using a small scanner that can read one fingerprint at a time, reports SamMobile.                </p>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}


function Slide1(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link legacyBehavior href={"https://www.gadgetsnow.com/tech-news/google-has-killed-this-ai-powered-service-all-the-details/articleshow/95974750.cms"}><a target='_blank'><Image src={"/images/News2.jpg"} width={600} height={600} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col pl-12">
                <div className="cat">
                    <Link legacyBehavior href={""}><a className="text-orange-600 hover:text-orange-800">Tech</a></Link>
                    <Link legacyBehavior href={""}><a className="text-gray-800 hover:text-gray-600">- Dec 4, 2022</a></Link>
                </div>
                <div className="title">
                    <Link  legacyBehavior href={"https://www.gadgetsnow.com/tech-news/google-has-killed-this-ai-powered-service-all-the-details/articleshow/95974750.cms"}><a target='_blank' className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Google has ‘killed’ this AI-powered service: All the details</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Joining the already crowded Google ‘graveyard’ is another service from the tech giant. According to a report by TechCrunch, Google has shut down Duplex on the Web. “Duplex on the Web is deprecated, and will no longer be supported as of December, 2022. Any automation features enabled by Duplex on the Web will no longer be supported after this date,” said Google in a note.                </p>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}


function Slide2(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link legacyBehavior href={"https://www.gadgetsnow.com/tech-news/safdarjung-hospital-faces-hacking-attack-how-it-is-different-from-aiims-cyberattack-and-other-details/articleshow/95973370.cms"}><a target='_blank'><Image src={"/images/News3.jpg"} width={600} height={600} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col pl-12">
                <div className="cat">
                    <Link legacyBehavior href={""}><a className="text-orange-600 hover:text-orange-800">Tech, Crime</a></Link>
                    <Link legacyBehavior href={""}><a className="text-gray-800 hover:text-gray-600">- Dec 4, 2022</a></Link>
                </div>
                <div className="title">
                    <Link  legacyBehavior href={"https://www.gadgetsnow.com/tech-news/safdarjung-hospital-faces-hacking-attack-how-it-is-different-from-aiims-cyberattack-and-other-details/articleshow/95973370.cms"}><a target='_blank' className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Safdarjung Hospital faces hacking attack, how it is different from AIIMS cyberattack and other details</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                After AIIMS Delhi, another top hospital in the city Safdarjung Hospital has been hit by cyber attack. Safdarjung Hospital officials said that the hospital faced a cyber-attack. However, the damage was not as severe as it had been for the All India Institute of Medical Sciences (AIIMS) hospital. &quot;There was a cyberattack. Our server was also down in November for a single day, but data was secured.  </p>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}


function Slide3(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link legacyBehavior href={"https://www.gadgetsnow.com/tech-news/samsung-to-offer-20-year-warranty-on-its-digital-inverter-motor-and-digital-inverter-compressor/articleshow/95961276.cms"}><a target='_blank'><Image src={"/images/News4.jpg"} width={600} height={600} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col pl-12">
                <div className="cat">
                    <Link legacyBehavior href={""}><a className="text-orange-600 hover:text-orange-800">Tech</a></Link>
                    <Link legacyBehavior href={""}><a className="text-gray-800 hover:text-gray-600">- Dec 4, 2022</a></Link>
                </div>
                <div className="title">
                    <Link  legacyBehavior href={"https://www.gadgetsnow.com/tech-news/samsung-to-offer-20-year-warranty-on-its-digital-inverter-motor-and-digital-inverter-compressor/articleshow/95961276.cms"}><a target='_blank' className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Samsung to offer 20-Year warranty on its Digital Inverter Motor and Digital Inverter Compressor</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Days after suggesting that Apple wanted to boot out Twitter from the App Store— and that he might not have a choice but to go to ‘war’ — Elon Musk has tweeted that he actually met Apple CEO Tim Cook. In a tweet, which included a short video, Musk thanked Cooked for “taking me around the beautiful Apple HQ”. Read more to find out how the meeting between the two went.</p>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}