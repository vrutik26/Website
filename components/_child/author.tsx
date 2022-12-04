import Image from "next/image";
import Link from "next/link";

const author = () => {
    return ( 
        <div className="author flex py-5">
            <Image src={"/images/author/author1.jpg"} width={60} height={60} alt={""} className="rounded-full"></Image>
            <div className="flex flex-col justify-center px-4">
                <Link legacyBehavior href={""}><a className="text-md font-bold text-gray-800 hover:text-gray-900">Dr.Ravi Seth</a></Link>
                <span className="text-sm text-gray-500">Guide</span>
            </div>
        </div>
     );
}
 
export default author;