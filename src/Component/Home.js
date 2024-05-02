import React, { useEffect, useState } from 'react'


// const Home=()=>{

//     const localdata=()=>{
    
//         return JSON.parse(localStorage.getItem('array')||"[]")
     
//     }

//     const[title,setTitle]=useState("")
//     const[image,setImage]=useState("")
//     const[id,setId]=useState("")
//     const[arr,setArr]=useState(localdata())
    
// console.log(arr);

//     const handle=(e)=>{
//         if(e.target.name==="title"){
//             setTitle(e.target.value)
//             console.log(e.target.value);
//         }
//         if(e.target.name==="image"){
//             setImage(e.target.value)
//             console.log(e.target.value);

//         }
//           if(e.target.name==="id"){
//             setId(e.target.value)
//             console.log(e.target.value);

//         }
//     }
  
//    const submit=(e)=>{
//     e.preventDefault()
//     console.log('hii')

//         const array={id,title,image}
//         console.log(array);
       
//             setArr([...arr,array])
        
       
//         console.log(arr);

//         setId("")
//         setTitle("")
//         setImage("")
//    }

//     useEffect(()=>{
//             localStorage.setItem('array',JSON.stringify(arr))

//     },[arr])
 
// const hanDelete=(id)=>{
//     const x= arr.filter((e,i)=>{
//         return id!==e.id 
//     })
//     setArr(x)
// }

// const hanEdit=(id)=>{
//     const y=arr.find((e,i)=>{
//         return id===e.id 
//     })
//     console.log(y);
//     setId(y.id)
//     setImage(y.image)
//     setTitle(y.title)
    
// }


//     return(
//         <section>
//             <form style={{textAlign:"center"}}>
//                 <label>Id: </label>
//                 <input type='text' placeholder='enter a id' value={id} onChange={handle} name='id'/><br/><br/>
//                 <label>Title: </label>
//                 <input type='text' placeholder='Put your Image' value={title} onChange={handle} name='title'/><br/><br/>
//                 <label>Image: </label>
//                 <input type='text' value={image} onChange={handle} placeholder='Enter a item name' name='image' /><br/><br/>
//                 <button onClick={submit}>submit</button>
//             </form>

//             <div className='cardsec'>
//                 {
//                     arr.map((e,i)=>{
//                         return  <div className='cards' key={i}>
//                                 <img src={e.image}/>
//                                 <h1>{e.title}</h1>
//                                 <button  onClick={()=>hanDelete(e.id)}>delet</button>
//                                 <button onClick={()=>hanEdit(e.id)}>edit</button>
//                         </div>
//                     })
               
//                 }
//             </div>
//         </section>
//     )
// }

// export default Home

















const todolist=()=>{


    return(
        <section>
            <div className='todo-container'>
                <div className='todo-row'>
                    <div className='todo-col'>
                        <input type='text' placeholder='Enter your lists'></input>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </section>
    )

    
}

export default todolist












