'use client'
import { useState } from 'react'
import Image from 'next/image'
export default function Todo() {
    const [task, settask] = useState(['Awake (6:00 - AM)', 'Fajar - Namaz', 'Going for walk'])   
    // task = initial TO-DO's list , 
    //settask = update my initial list(Delete/Add)
   
    
    const [taskList, settaskList] = useState(" ")       
     // taskList = store string value intialy empty
    //settaskList  = take user input and add todos   


    const handleTodo = () => {
        settask([...task, taskList])      // task + taskList = update initial todo's with new array
        // whole step =  update with new items
        settaskList("")                // itnitaly empty. reset todo's everytime
    }

    const handleInput = (e: any) => {
        settaskList(e.target.value)  // value property = current data/info store krta
    }

    const handleDeleteInput = (index: number) => {
        settask(task.filter((c, i) => {     // c = current todo 
            return i != index
        }))
    

    }
    return (
        <>

            <div className="w-full bg-emerald-100">

                <div className="flex shadow-xl justify-center items-center h-screen">

                    <span className="bg-sky-300 px-16 py-10 rounded-lg ">

                        <p className="text-blue-800 text-3xl font-extrabold">Making your To - Do List:</p><br />

                        <input  type="text" placeholder="Add your Task:" onChange={(e) => handleInput(e)} className="rounded-lg px-5 py-2 text-black hover:bg-emerald-100" ></input>

                        <button className="rounded-lg bg-blue-900 text-white text-md mx-16 my-9 py-2 px-3 text-center font-thin " onClick={handleTodo}>Add Todo</button>

                        
                         <div className='border-t border-red-700'></div> 
                        
                
                        
                        <ul className="font-normal text-md  py-3 space-y-4  my-5">
                            
                            {
                                task.map((c, i) => {
                                    return (
                                        <li key={i} className="rounded-2xl w-[400px] flex justify-between items-center">
                                            <div className='bg-white rounded-lg px-4 py-2 text-md inline-block w-[250px]'> {c} </div>
                                           
                                            <span className='flex'><button className="bg-red-600 rounded-lg text-md py-2 px-3 mx-6 text-white font-serif" onClick={() => handleDeleteInput(i)}>Delete</button>
                                             </span>
                                             

                                        </li>)
                                })
                            }
                        </ul>

                    </span>
                </div>
            </div>


        </>
    );
}



