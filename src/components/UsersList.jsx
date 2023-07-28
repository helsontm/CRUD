const UsersList = ({ productsList, deleteProduct, selectProduct }) => {

    return (
      <section>
       <div className="divheader">
      <h1>Usuarios</h1>
      <button className='plusUserButton' title="Agregar">➕ Crear nuevo usario</button>
      </div>

      <ul>
        {productsList?.map((product) => (
          <li key={product.id}>
            <p>
            <b> {product.first_name} {product.last_name} </b>
            </p>
            <hr></hr>
            <p>
              <span>Correo</span>
              <br />
              <img src="sobre.png"></img>{product.email}
            </p>
            <p>
              <span>Cumpleaños</span>
              <br />
              <img src="calendario.png"></img> {product.birthday}
            </p>
            

            <img title="Eliminar" onClick={() => deleteProduct(product.id)} src="/basura.png" className="erase"></img>

            <img onClick={() => selectProduct(product)} title="Editar" src="/lapiz-de-usuario.png" className="edit"
          
            ></img>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersList