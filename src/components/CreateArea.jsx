import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const[isExpanded,setisExpanded] = useState(false);

  const[note,setNote] = useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const{name,value}= event.target;

     setNote((prevNotes)=>{
      return{
        ...prevNotes,
        [name]:value
      };
     });
  }

  function submitNote(event){
    props.ADD(note);
    event.preventDefault();
    setNote({
      title:"",
      content:""
    });
  }

  function expand(){
    setisExpanded(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {isExpanded? <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={note.title}    
        />:null}

        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded? 3:1} 
          value={note.content}     
        />

        <Zoom in ={isExpanded}>
         <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
