import React, {useState} from 'react'
import  './App.css'
import { useNavigate } from 'react-router'


const Profilepage = () => {
 const [Title, setTitle] = useState("")
 const [Desc, setDesc] = useState('')
 const [mainTask, setmainTask] = useState([])

  const  Navigate =  useNavigate()

 const  submitHandler = (e) =>{
   e.preventDefault()
    setmainTask([...mainTask,{Title, Desc}])
    setTitle('')
    setDesc('')
 };

   const deletHandler =(i) => {
     let copytask = [...mainTask]
     copytask.splice(i,1)
    setmainTask(copytask)
   }

  let  renderTask = <div  > <h5 >No  Task  Avalaible</h5> </div>
   if(mainTask.length >0){
  renderTask = mainTask.map((t,i) => {
   return <li key={i}  className='active-flex'>
    <div  className="flex"  >
    <h5 >{t.Title}</h5>
    <h5>{t.Desc}</h5>
   </div>
   <button onClick={(i) =>{
    deletHandler(i)
   }} className='btn btn-danger btn-sm '>Delete</button>
   </li>
 })
};
  return (
 <>
 <form  onSubmit={submitHandler}
  className='App container    '>
  <input type="text"  
   placeholder='Add Title  Here' className='m-5 '
  value={Title}
  onChange={(e) =>{
    setTitle(e.target.value)
  }}
   />
    <input type="text" 
   placeholder='Add description Here' 
  value={Desc}
  onChange={(e) =>{
    setDesc(e.target.value)
  }}

   />
   
   <button className='ml-5 mb-1  btn btn-primary  btn-sm'>  Add Task</button>
   
 </form>
 <br />
<div>
  <button className='btn btn-primary btn-lg btn-block'
   onClick={() => Navigate('../crud')}
  >  Crud Table</button>
  </div>
 <hr />
 <div className=' bg-info text-dark   '>
  <ul >
{renderTask}
  </ul>
 </div>

 </>
  )
}

export default Profilepage
