import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

const section4 = () => {
    return ( 
       <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">POSITIONS</h1>
                    <div className="flex flex-col gap-6">
                    {Post()}
                    {Post1()}
                    {Post2()}
                    </div>
                </div>
                <div className="item">
                <h1 className="font-bold text-4xl py-12">ACHIEVEMENTS</h1>
                    <div className="flex flex-col gap-6">
                    {Post3()}
                    {Post()}
                    {Post()}
                    </div>
                </div>
            </div>
       </section>
     );
}
 
export default section4;

function Post(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link legacyBehavior href={"/"}><a><Image 
            className="rounded" src={"/images/Position1.jpeg"} width={300} height={250} alt={""} /></a></Link>
            </div>
            <div className="info flex flex-col justify-center">
            <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Member</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- Nov 1, 2021</a></Link>
                </div>

                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Student Placement Cell, RRU</a></Link>
                </div>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}


function Post1(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link legacyBehavior href={"/"}><a><Image 
            className="rounded" src={"/images/Position2.jpeg"} width={300} height={250} alt={""} /></a></Link>
            </div>
            <div className="info flex flex-col justify-center">
            <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Member</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- March 1, 2022</a></Link>
                </div>

                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Volunteer Teaching In Village, Surat</a></Link>
                </div>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}

function Post2(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link legacyBehavior href={"/"}><a><Image 
            className="rounded" src={"/images/Position3.jpg"} width={300} height={250} alt={""} /></a></Link>
            </div>
            <div className="info flex flex-col justify-center">
            <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Leader-</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">Aug 1, 2019</a></Link>
                </div>

                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Class Representative , RRU</a></Link>
                </div>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}


function Post3(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link legacyBehavior href={"https://courses.cognitiveclass.ai/certificates/7db75171d6694956906c2ee501592eeb"}><a target='_blank'><Image 
            className="rounded" src={"/images/Achivement1.png"} width={300} height={250} alt={""} /></a></Link>
            </div>
            <div className="info flex flex-col justify-center">
            <div className="cat">
                    {/* <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Member</a></Link> */}
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">January 11, 2022</a></Link>
                </div>

                <div className="title">
                    <Link legacyBehavior href={"https://courses.cognitiveclass.ai/certificates/7db75171d6694956906c2ee501592eeb"}><a target='_blank' className="text-xl font-bold text-gray-800 hover:text-gray-600">Python 101 for Data Science</a></Link>
                </div>
                {/* <Author></Author> */}
            </div>
        </div>
    )
}