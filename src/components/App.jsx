import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "./CreateArea";
import "../index.css";

function App(){

    const[list,setList] = useState([]);

    function addNote(note){
        setList((prevNotes)=>{
            return[...prevNotes,note]
        })
    }

    function deleteNotes(id){
        setList((prevNotes)=>{
            return prevNotes.filter((item,index)=>{
                return index !== id;
            })
        })
    }

    return(
        <div>
            <Header />
            <CreateArea ADD = {addNote} />
            {list.map((elements,index)=>{
                return <Note 
                            title={elements.title} 
                            content = {elements.content} 
                            delete={deleteNotes} 
                            key ={index}
                            id ={index}
                         />
            })}
            <Footer />
        </div>
    );
}

export default App;