import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import {Swiper,SwiperSlide} from "swiper/react";

const section3 = () => {
    return ( 
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Hobby</h1>

            <Swiper
             slidesPerView={2}
            >
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post1()}</SwiperSlide>
            </Swiper>

        </section>

     );
}
 
export default section3;


function Post(){
    return(
        <div className="grid">
            <div className="images pr-12">
                <Link legacyBehavior href={"https://pharmeasy.in/blog/14-health-benefits-of-swimming/"}><a target='_blank'><Image src={"/images/Swimming.jpeg"} width={600} height={500} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4 pr-12">
            {/* <div className="cat"> */}
                    <Link legacyBehavior href={""}><a className="text-orange-600 hover:text-orange-800">Swimming</a></Link>
                    {/* <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div> */}
                <div className="title">
                    <Link legacyBehavior href={"https://pharmeasy.in/blog/14-health-benefits-of-swimming/"}><a target='_blank' className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">14 Health Benefits Of Swimming!</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Swimming is for everyone, isn’t it! No matter our age, years of experience, or gender – each of us can derive an advantage from the magical benefits of swimming.   This is one cardio exercise that works on every muscle of our body and does wonders not only for our physical health but our mental health too.                </p>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}



function Post1(){
    return(
        <div className="grid">
            <div className="images pr-12">
                <Link legacyBehavior href={"https://www.holidify.com/collections/best-places-in-the-world"}><a target='_blank'><Image src={"/images/Travelling.jpg"} width={600} height={500} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4 pr-12">
            {/* <div className="cat"> */}
                    <Link legacyBehavior href={""}><a className="text-orange-600 hover:text-orange-800">Travelling</a></Link>
                    {/* <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div> */}
                <div className="title">
                    <Link legacyBehavior href={"https://www.holidify.com/collections/best-places-in-the-world"}><a target='_blank' className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Best Places In The World To Visit</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Mother Earth along with mankind have co-created some of the most spectacular places on this planet. From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!                </p>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}
