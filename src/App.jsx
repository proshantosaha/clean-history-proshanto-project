// import React from 'react'
// import TaglistItem from './conponent/TaglistItem';
import './App.css';

const task = {
  id:'uniquw_id_oo1',
  subtitle: "Subtitle",
  createAt:'2023-05-21T10:01:19.513Z',
  tags:[
      {
      id:'tag_001',
      text:"its done",
      icon:"T",
     },
     {
      id:'tag_002',
      text:"its cancelled",
      icon:"m",
     },
     {
      id:'tag_003',
      text:"its in progress",
      icon:"z",
     },
     {
      id:'tag_004',
      text:"just wrote this",
      icon:"y",
     }
 ],

 comments:[
  {
      id:"comment-id-001",
      user:{
          avatar:'xyz.com',
          name:'Viraj',
          id:'user-ud-001',
      },
      text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel? '  }
 ],
 tasks:[
  {
      id:'task_1',
     title:'Foggy Nelson'   ,
     text:'Here to clean the streets of Hells Kitchen'  ,
     status:'done',
 },
 {
  id:'task_2',
  title:'Louis Ck'   ,
  text:'its cancelled'  ,
  status:'cancelled',
},
{   id:'task_3',
  title:'Albert Elinstein'   ,
  text:'its in progress'  ,
  status:'progress',
},
{   id:'task_4',
  title:'Albert Elinstein'   ,
  text:'its in progress'  ,
  status:'progress'
}
]
};

function getDay(dateStr){
    const date = new Date(dateStr).getDay();
      const days =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ]
    return days [date]
}

function formateDate(dateStr){
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}


const TagListItem=({tag})=>{
  return(
    <li key={tag.id}>
      <small>{tag.icon}</small> - {tag.text}
    </li>
  );
  
  }

const CommentsListItem=({comments})=>{
  return(
    < div className='comment-item' key={comments.id}>
        <h3>{comments.user.name}</h3>
        <p>{comments.text}</p>
        {/* <h3>{comments.user.id}</h3> */}
           
      </div>
  );
  
  }

  const TaskListItem=({task})=>{
    return(
      <li key={task.id}>
            <h3>{task.title}</h3>
            <p><small>{task.text}</small></p>
            <p>{task.status}</p>
          </li>
    );
    
    }


const TaskCard = ()=>{


  return(
    <div className='day-card'>

    <h1 className='title'>{getDay(task.createAt)},{formateDate(task.createAt)}</h1>

    <h3 className='sub-title'>Sub title </h3>

    <ul className='tag-ul '>
      {task.tags.map((tag)=>(
      <TagListItem key={tag.id} tag={tag}/>
      ))}
    </ul>

   <div className='line'></div>

    <p className='notes'>Notes linked to people</p>
    
    <div className='comments'>
      {task.comments.map(comments=>(
        <CommentsListItem key={comments.id} comments={comments }/>
      ))}
    </div>

    <ul className='task-ul'>
      {task.tasks.map(task=>(
        <TaskListItem key={task.id} task={task}/>
      ))}
    </ul>
  </div>
  )
}


const App = () => {
  return (
    <div className='grid-group'>
   <TaskCard/>
      {/* {tasks.map(task=>(
        <TaskCard key={task.id} task={task}/>
      ))}
       */}
    </div>

  )
}

export default App