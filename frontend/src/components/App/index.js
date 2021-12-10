import { useEffect, useState } from 'react';
import './styles.css';
import List from '../List';

import { parserForm } from '../../helpers';
import {
    getTutors, getTeachers, getStudents,
    postTutors, postTeachers, postStudents
  } from '../../api';

/* import profesores from '../../data/profesores';
import tutores from '../../data/tutores';
import estudiantes from '../../data/estudiantes'; */

const App = () => {
  //const greet = "Hola tripulantes, formadores y tutores.";
  const project = "MISION TIC 2022!!";
  const[message, setMessage] = useState("Bienvenidos");
  const[userList, setUserList] = useState([]);
  const[showForm, setShowForm] = useState(true);
  const[user, setUser] = useState({
    document_type: "",
    document: "",
    title: "",
    fname: "",
    lname: "",
    gender: "",
    email: "",
    address: "",
    phone: "",
    cell: "",
    type: "",
  });

  //const [loaded, setLoaded] = useState(true);
  /*const [address, setAddress] = useState("");

var inputPhone = useRef(""); */


    useEffect(()=>{
        //cargue la lista de...
        document.title = `${message}`;
    })

    /* const handleChild = (item) => {
      inputPhone = item.phone;
      setAddress(item.address)
    }
    const handleform = (event) =>{
      event.preventDefault(); //previene refrescar pagina

      setLoaded(false);

      const target = event.target;
      let fullname = `${target.fname.value} ${target.sname.value} ${target.lname.value}`
      data.push({
        "id": data.length + 1,
        "name": fullname,
        "address": target.address.value,
        "phone": target.phone.value
      })
      setData(data)

      event.target.reset()
      setTimeout(() => {
        setLoaded(true);
      },3000)
    }
*/
    const clearForm = evt => {
      setUser ({
        document_type: "",
        document: "",
        title: "",
        fname: "",
        lname: "",
        gender: "",
        email: "",
        address: "",
        phone: "",
        cell: "",
        type: "",
      })
      evt.preventDefault();
    }

    const onSubmit = function (evt) {
      let aForm = evt.target;
      let aUser = Object.assign({}, parserForm(aForm));
      if(aUser.type === "teachers"){
        postTeachers(aUser);
      }else if(aUser.type === "students"){
        postStudents(aUser);
      }else{
        postTutors(aUser);
      }
      evt.preventDefault();
    }

    const handleChange = evt => {
      const value = evt.target.value;
      setUser({
        ...user,
        [evt.target.name]:value
      })
    }
  return (
    <div className="App">
      <header className="App-header"><br/>
        <h1>{project}</h1>
        <h3>{message}</h3><br/>
        {/* <h5>{greet}</h5> */}
      </header>
        <div className="App-buttons">
          <button onClick = {()=> {
              setMessage("Bienvenidos");
              setShowForm(true);
              setUserList([])
            }}> Formulario </button>

          <button onClick = {()=> {
            setMessage("Lista de Tripulantes");
            //setData(estudiantes)

            getStudents().then((resp) => {
              const data = resp.data;
              setUserList(data.filter((user) =>{
                return user.type === "students"
              }));
            })
            setShowForm(false);
          }}> Tripulantes </button>

          <button onClick = {()=>{
            setMessage("Lista de Formadores");
            //setData(profesores)

            getTeachers().then((resp) => {
              const data = resp.data;
              setUserList(data.filter((user) =>{
                return user.type === "teachers"
              }));
            })
            setShowForm(false);
          }}> Formadores </button>

          <button onClick = {()=>{
            setMessage("Lista de Tutores");
            //setData(tutores)

            getTutors().then((resp) => {
              const data = resp.data;
              setUserList(data.filter((user) =>{
                return user.type === "tutors"
              }));
            })
            setShowForm(false);
          }}> Tutores </button>
            </div>
            {showForm &&
            <form onSubmit  = {onSubmit}>
              <select name="document_type" value = {user.document_type} onChange={handleChange}>
                <option value = "CC">CC</option>
                <option value = "TI">TI</option>
                <option value = "OT">OT</option>
              </select>
              <input name = "document" type = "text" autoComplete = "off" placeholder = "Identificación" value = {user.document} onChange={handleChange}/><br/>
              <input name = "title" type = "text" autoComplete = "off" placeholder = "Título" value = {user.title} onChange={handleChange}/><br/>
              <input name = "fname" type = "text" autoComplete = "off" placeholder = "Nombre" value = {user.fname} onChange={handleChange}/><br/>
              <input name = "lname" type = "text" autoComplete = "off" placeholder = "Apellidos" value = {user.lname} onChange={handleChange}/><br/>
              <select name="gender" value = {user.gender} onChange={handleChange}>
                <option value = "M">Masculino</option>
                <option value = "F">Femenino</option>
              </select>
              <input name = "email" type = "email" autoComplete = "off" placeholder = "Email" value = {user.email} onChange={handleChange}/><br/>
              <input name = "address" type = "text" autoComplete = "off" placeholder = "Dirección" value = {user.address} onChange={handleChange}/><br/>
              <input name = "phone" type = "text" autoComplete = "off" placeholder = "Teléfono" value = {user.phone} onChange={handleChange}/><br/>
              <input name = "cell" type = "text" autoComplete = "off" placeholder = "Celular" value = {user.cell} onChange={handleChange}/><br/>
              <select name="type" value = {user.type} onChange={handleChange}>
                <option value = "teachers">Formadores</option>
                <option value = "students">Tripulantes</option>
                <option value = "tutors">Tutores</option>
              </select>
              <div className = "btn-group">
                <button onClick={clearForm}>Borrar</button>
                <button type="submit">Enviar</button>
              </div>
            </form>
            }
      <List /*handleChild = {handleChild}*/ list={userList}/>
    </div>
  );
}

export default App;