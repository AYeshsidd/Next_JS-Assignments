import Link from "next/link";

export default function Navbar() {
    return (
        <div >
            <ul className="flex justify-end space-x-16 mx-28">
            <Link href=""><b>Works</b></Link>
            <Link href=""><b>Blog</b></Link>
           <Link href=""><b>Contact</b></Link>

            </ul>
           </div>

       
        
    );
}