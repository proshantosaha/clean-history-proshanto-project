import React from 'react'
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
      icon:"x",
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
  status:'progress',
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
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}






const App = () => {
  return (
    <div>
      <h1>{getDay(task.createAt)},{formateDate(task.createAt)}</h1>
      <h3>Sub title </h3>
      <ul>
        {task.tags.map((tags)=>(
          <li key={tags.id}>
            <small>{tags.icon}</small> - {tags.text}
          </li>
        ))}
      </ul>
      <hr/>
      <p>Notes linked to people</p>
      <div>
        {task.comments.map(comments=>(
          <div key={comments.id}>
            <h3>{comments.user.name}</h3>
            <p>{comments.text}</p>
            {/* <h3>{comments.user.id}</h3> */}
           
          </div>
        ))}
      </div>

      <ul>
        {task.tasks.map(task=>(
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p><small>{task.text}</small></p>
            <p>{task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App