import{useForm} from 'react-hook-form'
import { useEffect, useState } from "react";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const UsersForm = ({ addProduct, productSelected, editProduct,  closeModal  }) => {
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
        price: "",
        isAvailable: false
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


 

  

  return (
    

    <section className='divForm'>
      
    <form onSubmit={handleSubmit(submit)}>
    <button  onClick={() => closeModal}>❌</button>
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
          type="text"
          id="p-birthday"
          placeholder='YYY-MM-DD'
          {...register("birthday", { required: true })}
         
        
        />
        <ReactDatePicker 
        selected={selectDate}
        onChange={ data =>setSelectDate(data)}
        dateFormat='yyyy-MM-dd'
        id="p-birthday"
        maxDate={new Date()}
        showYearDropdown
        placeholder='YYYY-MM-DD'
        />
        
      </div>

      <button className='formButton'>Agregar nuevo usario</button>
    </form>
    </section>
  );
};

export default UsersForm;