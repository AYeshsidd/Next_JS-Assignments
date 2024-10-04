import Link from "next/link"
function Home_page(){
  return(
    <div>
<center><h1 color="red"><b><u>Dynamic Routing </u></b></h1></center>

<ol>

  <li className="text-purple-600"><Link href="http://localhost:3000/Karachi">▪️ Karachi</Link></li>
  <li className="text-purple-600"><Link href="http://localhost:3000/Lahore">▪️ Lahore</Link></li>
  <li className="text-purple-600"><Link href="http://localhost:3000/Peshawar">▪️ Peshawar</Link></li>
  <li className="text-purple-600"><Link href="http://localhost:3000/sukker">▪️ Sukker</Link></li>
  <li className="text-purple-600"><Link href="http://localhost:3000/Quetta">▪️ Quetta</Link></li>
  
</ol>
    </div>
  )
}
export default Home_page