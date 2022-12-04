import Link from "next/link";
import { ImLinkedin2,ImGithub } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";

const header = () => {
    return ( 
        <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" className="input-text"  placeholder="Search..."/>
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link legacyBehavior href={"/"}>
                    <a className="font-bold uppercase text-3xl">Portfolio</a>
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <Link legacyBehavior href={"https://www.linkedin.com/in/vrutik-prajapati-bb2919219/"}><a target="_blank"><ImLinkedin2 color="#888888"/></a></Link>
                    <Link legacyBehavior href={"https://github.com/vrutik26"}><a target="_blank"><ImGithub color="#888888" /></a></Link>                    
                    <Link legacyBehavior href={"https://www.instagram.com/_v2utik/"}><a target="_blank"><AiOutlineInstagram color="#888888" /></a></Link>
                </div>
            </div>
        </div>
    </header>
     );
}
 
export default header;

