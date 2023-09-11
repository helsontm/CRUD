
import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  //Estado del Formulario
  const [isOpenModal, setIsOpenModal]=useState(false)

  //Funcion de abrir el Formulario
  const openModal=()=>{
    setIsOpenModal(true);
  }
  //funcion de Cerrar el Formulario
  const closeModal=()=>{
    setIsOpenModal(false);
  }
  

  

  const getAllUsers = () => {
    axios
      .get("http://localhost:8080/crud")
      //.get("https://crud-app-45oq.onrender.com/crud")
      .then((resp) => setUsersList(resp.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addProduct = (newProduct) => {
    //axios para enviar informacion a la api
    /*
      axios.post("url", body={})
    */

    axios
      .post("http://localhost:8080/crud/", newProduct)
      //.post("https://crud-app-45oq.onrender.com/crud", newProduct)
      .then(() => {
        getAllUsers();
        setUserSelected('');
      })
      alert('¡Usuario Creado!')
      setUserSelected(undefined)
      .catch((error) => console.error(error));
  };

  const deleteProduct = (id) => {
    /*
    axios.delete(`url/${parametro}`)
    */
    axios
      .delete(`http://localhost:8080/crud/${id}/`)
      //.delete(`https://crud-app-45oq.onrender.com/crud${id}/`)
      .then(() =>{
        getAllUsers()
        setUserSelected(undefined);
      })
      alert('¡Usuario Eliminado!')
      .catch((error) => console.error(error));
  };

  const selectProduct = (product) => {
    setUserSelected(product);
  };

  const editProduct = (user) => {
    /*
      axios.put( `url/${id}`, body )
    */
    axios
      .put(
        `http://localhost:8080/crud/${user.id}/`,
        user
      )
      .then(() => {
        getAllUsers();
        setUserSelected(null);
      })
     
      .catch((error) => console.error(error));
  };

  

  return (

    <main>                      
        <div className="divheader">
      <h1>Usuarios</h1>
      <button onClick={openModal} className='plusUserButton' title="Agregar">➕ Crear nuevo usario</button>
      </div>


       <UsersForm
        addProduct={addProduct}
        productSelected={userSelected}
        editProduct={editProduct}
        isOpen={isOpenModal}
        closeModal={closeModal}
        />
      
                           
                                              
      
      <UsersList
        usersList={usersList}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
        openModal={openModal}
        
      />
    </main>
  );
}

export default App;