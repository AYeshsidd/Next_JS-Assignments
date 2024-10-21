import Link from "next/link";
export default function Home() {
  return (
    
    <div>
      <center><h1 className="bg-black text-purple-500"><b>MY PORTFOLIO</b></h1></center><br />
    
      <h1 className="mx-8 underline"><i>My Info :-</i></h1>
      <p className="mx-3">- Name: <b>AYesh siddiqui</b></p>
      <p className="mx-3">- field:Computer science</p>
      <p className="mx-3">- profession:Student at UOK</p><br />

  
      <h2 className="mx-8 underline"><i>About Me :-</i></h2>
      <p className="mx-3">Hello, I'm AYesh siddiqui (Fresher). I specialize in creating high-quality, UI and responsive <br />web applications using modern web technologies. I learn all these from Krachi university.
      </p><br />
     <p className="text-blue-800 mx-3"> <b>speciallization in: " Backend development "</b></p> 
<br />
    
      <h1 className="mx-8 underline"><i>Skills As a Developer :-</i></h1>
      <ul>
        <li className="mx-3 text-red-600">- <b>TypeScript</b></li>
        <li className="mx-3 text-red-600">- <b>React.js</b></li>
        <li className="mx-3 text-red-600">- <b>Java</b></li>
        <li className="mx-3 text-red-600">- <b>Next Js</b></li>
        <li className="mx-3 text-red-600">- <b>HTML & CSS</b></li>
        <li className="mx-3 text-red-600">- <b>C^C++</b></li>
      </ul><br />

      
      <h2 className="mx-8 underline"><i>My Projects :-</i></h2>
      <ol >
        <li className="mx-3 text-blue-800"><b>- Responive Portfolio Website</b></li>
        <li className="mx-3 text-blue-800"><b>- ATM machine</b></li>
        <li className="mx-3 text-blue-800"><b>- E-commerce Platform</b></li>
        <li className="mx-3 text-blue-800"><b>- Hotel managment system</b></li><br />
      </ol>

      
      <h2 className="mx-8 underline"><i>Contact info :-</i></h2>
      <p className="mx-3">Mobile:- <b>+92 111332210</b></p>
      <p className="mx-3">MY Gmail:-<b>abc@gmail.com</b></p><br />
      <button className="mx-7 py-2 px-4 bg-black text-purple-500 rounded"><Link href="https://github.com/AYeshsidd" target="blank">My Github Profile</Link></button>
      <br /><br />
      <footer className="bg-black text-white"><center><b>I have built this portfolio by using Next.js &
         Tailwind CSS</b></center></footer>
    
    
    
    
    </div>
  );
}