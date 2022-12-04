import Link from "next/link";
import Image from "next/image";
import Author from "./author";

const related = () => {
    return ( 
        <section className="pt-20">
            <h1 className="font-bold text-4xl py-12">Related</h1>
            <div className="flex flex-col gap-10">
                {post()}
                {post()}
                {post()}
                {post()}
            </div>
        </section>
     );
}
 
export default related;

function post(){
    return(
        <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
        <Link legacyBehavior href={"/"}><a><Image 
        className="rounded" src={"/images/img1.jpg"} width={300} height={200} alt={""} /></a></Link>
        </div>
        <div className="info flex flex-col justify-center">
        <div className="cat">
                <Link legacyBehavior href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                <Link legacyBehavior href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
            </div>

            <div className="title">
                <Link legacyBehavior href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
            </div>
            <Author></Author>
        </div>
    </div>
    )
}