import React, { useRef, useState } from "react";
import axios from "axios";
import "./form.css";
const Form = () => {

  const inputNombre = useRef("");
  const inputRanking = useRef("");
  const inputExamples = useRef("");
  const inputDetail = useRef("");

  const [value, setValue] = useState("")
  
  console.log(value)
  let guardarData = (e) =>{
    e.preventDefault()

    let data = {
        name:inputNombre.current.value,
        ranking:inputRanking.current.value,
        examples:inputExamples.current.value.split(","),
        detail:inputDetail.current.value,
        user_id:"63ac47d8b4db2f7baacad498"
    }
    axios.post("http://localhost:8000/categories", data)
    .then(e=>console.log(e))
    .catch(error=>console.log(error))
  }

  return (
    <form className="form" onSubmit={guardarData} >
      <label htmlFor="name">
        Nombre
        <input
          
          type="text"
          id="name"
          placeholder="inserte nombre"
          ref={inputNombre}
        />
      </label>
      <label htmlFor="ranking">
        Raking
        <input
          ref={inputRanking}
          type="number"
          id="ranking"
          placeholder="inserte raking"
          onChange={(e)=>setValue(e.target.value)}
        />
      </label>
      <label htmlFor="examples">
        Examples
        <input
          ref={inputExamples}
          type="text"
          id="examples"
          placeholder="inserte example"
        />
      </label>
      <label htmlFor="detail">
        Detail
        <input
          ref={inputDetail}
          type="text"
          id="detail"
          placeholder="inserte detail"
        />
      </label>
      <input type="submit" />
    </form>
  );
};
export default Form;
