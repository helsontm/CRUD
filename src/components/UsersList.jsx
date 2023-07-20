const UsersList = ({ productsList, deleteProduct, selectProduct }) => {

    return (
      <section>
      <h1>Usuarios</h1>

      <ul>
        {productsList?.map((product) => (
          <li key={product.id}>
            <p>
            <b>Nombre:</b> {product.first_name}
            </p>
            <p>
              <b>Apellido:</b> {product.last_name}
            </p>
            <p>
              <b>Correo:</b> 📧{product.email}
            </p>
            <p>
              <b>Cumpleaños:</b>📅 {product.birthday}
            </p>
            

            <button onClick={() => deleteProduct(product.id)}>Eliminar🗑</button>

            <button onClick={() => selectProduct(product)}>Editar📝</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersList