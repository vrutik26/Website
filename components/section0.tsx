import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

const section0 = () => {
    
    const bg={
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"    
      }

    return ( 
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">About Me</h1>
                <div className="grid md:grid-cols-2">
                <div className="image lg:pl-32">
                    <Link legacyBehavior href={"/"}><a className=" "><Image src={"/images/Passportphoto.png"} width={400} height={400} alt={""} /></a></Link>
                </div>
                <div className="info flex justify-start flex-col pl-12 lg:pt-20">
                    {/* <div className="cat">
                        <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                        <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                    </div> */}
                    <div className="title ">
                        <Link legacyBehavior href={"/"}><a className="text-3xl md:text-6xl  font-bold text-gray-800 hover:text-gray-600">VRUTIK PRAJAPATI</a></Link>
                        <p><Link legacyBehavior href={"/"}><a className="text-3xl md:text-6xl font-thin text-gray-600 animate-fade-in-down">I &apos;M DEVELOPER</a></Link></p>
                         <Link target="_blank" href={"https://drive.google.com/file/d/1N7xdxcsdcuUI-ezqpXf5H_WJ6IQ_0PrW/view?usp=share_link"}><button className ="mt-10 ml-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Resume</span>
</button></Link>
                    </div>
                    {/* <p className="text-gray-500 py-3">
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                    </p> */}
                    {/* <Author></Author> */}
                </div>
            </div>
        </div>
        </section>
       
     );
}
 
export default section0;