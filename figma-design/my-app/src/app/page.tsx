import Navbar from "./component/Navbar";
import Data from "./component/Data";


export default function Home() {
  return (
    <>
      <div className="bg-pink-50" >
        <Navbar />

        
        {/* my flexbox for img p h1 */}
       <div className="flex items-center justify-center "> 
        

       {/*paddings , alignments for all Text */}
        <div className="my-40">
        
        <h1 className="font-bold text-3xl">
          <b>Hi, I am John , <br /> Creative Technologist</b>
        </h1>
<br />
        <p id="fonts" className="small text-justify">
          Paragraph ipsum dolor sit amet consectetur adipise quae enim <br />
          dolor lore clm ipsum sit amet consectetur adipise quae enim. <br />
          ipsum  lorme dolor sit amet.
        </p>
         

        <br />
        <button className=" py-3 px-4 text-white bg-red-400 rounded shadow-md mt-5">
          Download Resume
        </button>

        {/* 3rd div closing */}
        </div>

        <img id="boy" src="/image (1).png" alt="idk"/> 
        
        {/* 2nd div closing */}
        </div> 
       
        {/* first div closing */}
        </div>

        
      
        <div className="bg-red-100">
          <br />
        <strong className="mx-72 py-5">Recent post</strong>  <strong className="mx-72 text-red-400">View all</strong>
      
        
            
            <span id="sec" className="my-8">
             
              <div className="py-4 mx-8 "><b>Making a design system from <br />scratch</b>
              <br /><br />  12 Feb 2024    |  Design , Pattren
              
              <br /><br /><br /><p className="text-sm">journey starts ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, 
                veniam, tempore numquam, ratione magnam quae alias <br />completion</p></div>
              </span>
            
              <span id="secs" className="my-8">
            
              <div className="py-4 mx-8"><b>Making a design system from <br />scratch</b>
              <br /><br /> 12 Feb 2024    |  Design , Pattren
              
              <br /><br /><br /><p className="text-sm">journey starts ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, veniam, 
                tempore numquam, ratione magnam quae alias <br />completion</p></div>
              </span>


              <div className="bg-pink-50"><br />
         
         <h1 className="mx-72"><b>Featured work</b></h1>

{/*div for image 1 */}
        <div className="flex"> 
     
         <img src="chart.png" alt="" className="mx-72 my-9 rounded" width={200}/> 
         
         <strong className="-m-64 my-11" >Designing Dashboards <br /></strong>
        
         <p className="mx-20 my-24 px-1 rounded-e-lg rounded-s-lg bg-red-400 text-white" ><b>2024</b></p>
        
         <p className="my-24 -m-16">Dashboard </p>
       
         </div>
        
         <p className="mx-96 -my-20 px-32 space-x-36">Working ipsum, dolor sit amet consectetur adipisicing elit. Tempore cupiditate corrupti facere, odio fugit rerum ex modi architecto eum function <br />lificult to understand</p>
        <br /><br /><br /><br />


{/* for 2nd image 2nd div */}

    
<div className="flex ">
        
        <img src="Rectangle 32.png" alt="" className="mx-72 my-9 rounded" width={200} />
        
        <strong className="-m-64 my-6"><br />Designing Dashboards <br /></strong>
        
        <p className="mx-20 my-24 px-1 rounded-e-lg rounded-s-lg bg-red-400 text-white text-center"><b>2024</b></p>
       
        <p className="my-24 -m-16">Dashboard </p>
      </div>
     
      <p className="mx-96 -my-20 px-32">Working ipsum, dolor sit amet consectetur adipisicing elit. Tempore cupiditate corrupti facere, odio fugit rerum ex modi architecto eum function <br />lificult to understand</p>
       <br/><br /><br /><br />


{/* for 2nd image 2nd div */}

    
<div className="flex ">
        
        <img src="Rectangle 34.png" alt="" className="mx-72 my-9 rounded" width={200} />
        
        <strong className="-m-64 my-6"><br />Designing Dashboards <br /></strong>
        
        <p className="mx-20 my-24 px-1 rounded-e-lg rounded-s-lg bg-red-400 text-white" ><b><center>2024</center></b></p>
       
        <p className="my-24 -m-16">Dashboard </p>
      </div>
     
      <p className="mx-96 -my-20 px-32">Working ipsum, dolor sit amet consectetur adipisicing elit. Tempore cupiditate corrupti facere, odio fugit rerum ex modi architecto eum function <br />lificult to understand</p>
       <br/>

       <br/><br /><br /><br />

      <Data/>
    
     </div>   
    

    </div>


     </>
  );
}