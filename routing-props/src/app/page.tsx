import Link from "next/link"
import Image from "next/image"
function Home_page(){
  return(
    <div>

<ol>

  <li className="text-green-800"><Link href="http://localhost:3000/Pakistan"><b>▪️ Pakistan</b></Link></li>
   <li className="text-blue-500"><Link href="http://localhost:3000/India"><b>▪️ India</b></Link></li>
  <li className="text-blue-800"><Link href="http://localhost:3000/Srilanka"><b>▪️ Srilanka</b></Link></li>
  <li className="text-red-700"><Link href="http://localhost:3000/Afghanistan"><b>▪️ Afghanistan</b></Link></li>
  <li className="text-green-700"><Link href="http://localhost:3000/Saudia"><b>▪️ Saudia Arabia</b></Link></li>
  
</ol>
    </div>
  )
}
export default Home_page;