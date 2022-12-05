import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author"

const section2 = () => {
    return ( 
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Projects</h1>

            {/* grid columns  */}

            <div className="grid md:grid-col-2 lg:grid-cols-3 gap-14">
                {Post()}
                {Post1()}
                {Post2()}
    
            </div>

        </section>
     );
}
 
export default section2;

function Post(){
    return(
        <div className="item">
            <div className="images">
                <Link legacyBehavior href={"/"}><a><Image className="rounded" src={"/images/Project1.jpg"} width={500} height={350} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Python, Cyber Security</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl  font-bold text-gray-800 hover:text-gray-600">Web Enumeration tool</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                This is Python Tool with GUI to automate tasks like port scanning, Directory Brute force, Find Way Back URLs, Email scraping, Find Subdomains, and other info. Which is related to Cyber Security. 
                 </p>
                <Author></Author>
            </div>
        </div>
    )
}

function Post1(){
    return(
        <div className="item">
            <div className="images">
                <Link legacyBehavior href={"/"}><a><Image className="rounded" src={"/images/Project2.jpeg"} width={500} height={350} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Django, Bootstrap</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl  font-bold text-gray-800 hover:text-gray-600">Car Zone</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Used by car dealers to sell cars, build Django framework from Python, PostgreSQL database and Bootstrap. Created customized Django admin panel, Django pagination, Django messages, user authentication, login with Google and Facebook, send email, search.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}


function Post2(){
    return(
        <div className="item">
            <div className="images">
                <Link legacyBehavior href={"/"}><a><Image className="rounded" src={"/images/Project2.jpeg"} width={500} height={350} alt={""} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                    <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link legacyBehavior href={"/"}><a className="text-3xl  font-bold text-gray-800 hover:text-gray-600">Web Enumeration tool</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                This is Python Tool with GUI to auto- mate tasks like port scanning, Directory Brute force, Find Way Back URLs, Email scraping, Find Subdomains, and other info. Which is related to Cyber Security.                 
                </p>
                <Author></Author>
            </div>
        </div>
    )
}