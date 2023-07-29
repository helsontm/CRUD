import{useForm} from 'react-hook-form'
import { useEffect, useState } from "react";

import 'react-datepicker/dist/react-datepicker.css'

const UsersForm = ({ addProduct, productSelected, editProduct,  closeModal, isOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (productSelected) {
      //prellenar el formulario
      reset(productSelected);
    } else {
      reset({
        email: "",
        password: "",
        first_name:"",
        last_name:"",
        birthday:"",
        
        
      });
    }
  }, [productSelected]);

  const submit = (data) => {
    if (productSelected) {
      //editar
      editProduct(data);
    } else {
      addProduct(data);
    }
  };

  const[selectDate,setSelectDate ]=useState(null)

  //evita ejecutar los click en de los elementos padre
  const handleModclic=(e)=>{
    e.stopPropagation();
  }


 

  

  return (
    

    <section className={`divForm ${isOpen && 'divForm-open'}`} onClick={closeModal}>
      
    <form onSubmit={handleSubmit(submit)} onClick={handleModclic}>
      <div className='contButton'>
    <button  className='buttonCloseModal' onClick={closeModal} title='cerrar'>❌</button>
    </div>
      <h2>Nuevo Usuario</h2>
     
      <div className="input-container">
        <label htmlFor="p-first_name">Nombre</label>
        <input
          type="text"
          id="p-first_name"
          placeholder='First Name'
          {...register("first_name", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-last_name">Apellido</label>
        <input
          type="text"
          id="p-last_name"
          placeholder='Last Name'
          {...register("last_name", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-email">Correo</label>
        <input
          type="text"
          id="p-email"
          placeholder='Email'
          {...register("email", { required: true })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="p-password">Contraseña</label>
        <input
          type="password"
          id="p-password"
          placeholder='Password'
          {...register("password", { required: true })}
        />
      </div>

      <div className="input-container">
        <label htmlFor="p-birthday">Fecha de nacimiento</label>
        <input
          type="date"
          id="p-birthday"
          max='2022-01-31'
          {...register("birthday", { required: true })}
         
        
        />
        {/*<ReactDatePicker 
        selected={selectDate}
        onChange={ data =>setSelectDate(data)}
        dateFormat='yyyy-MM-dd'
        id="p-birthday"
        maxDate={new Date()}
        showYearDropdown
        placeholder='YYYY-MM-DD'
        />
        
  */}
</div>
      <button  className='formButton'>Agregar nuevo usario</button>
      
    </form>
    </section>
  );
};

export default UsersForm;