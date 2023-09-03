
const UsersList = ({ usersList, deleteProduct, selectProduct,  openModal  }) => {

  function formato(texto){
    var fechaHora = new Date(texto)
    return fechaHora.toISOString().split('T')[0].replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
  }

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
              <div>
              <img src="sobre.png" ></img> {user.email}
              </div>
            </p>
            <p>
              <span>Cumpleaños</span>
              <br />
              <img src="calendario.png"></img> {formato(user.birthday)}
            </p>
            
          <div className="divButonShowUsers">
            <img title="Eliminar" onClick={() => deleteProduct(user.id)} src="/basura.png" className="erase"></img>
                                             {/* se le da la funcion para que muestre */}
            <img onClick={() => selectProduct(user, openModal()) }  title="Editar" src="/lapiz-de-usuario.png" className="edit"
               
            ></img>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersList