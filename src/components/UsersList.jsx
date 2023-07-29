
const UsersList = ({ usersList, deleteProduct, selectProduct,  openModal  }) => {

    return (
      <section>
       
      <ul>
        {usersList?.map((user) => (
          <li key={user.id}>
            <p>
            <b> {user.first_name} {user.last_name} </b>
            </p>
            <hr></hr>
            <p>
              <span>Correo</span>
              <br />
              <img src="sobre.png"></img>{user.email}
            </p>
            <p>
              <span>Cumpleaños</span>
              <br />
              <img src="calendario.png"></img> {user.birthday}
            </p>
            

            <img title="Eliminar" onClick={() => deleteProduct(user.id)} src="/basura.png" className="erase"></img>
                                             {/* se le da la funcion para que muestre */}
            <img onClick={() => selectProduct(user, openModal()) }  title="Editar" src="/lapiz-de-usuario.png" className="edit"
               
            ></img>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersList