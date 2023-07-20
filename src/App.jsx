
import './App.css'
import ProducForm from './components/UsersForm';
import ProducList from './components/UsersList';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [productSelected, setProductSelected] = useState(null);

  const getAllProducts = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setProductsList(resp.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const addProduct = (newProduct) => {
    //axios para enviar informacion a la api
    /*
      axios.post("url", body={})
    */

    axios
      .post("https://users-crud.academlo.tech/users/", newProduct)
      .then(() => {
        getAllProducts();
        setProductSelected(undefined);
      })
      .catch((error) => console.error(error));
  };

  const deleteProduct = (id) => {
    /*
    axios.delete(`url/${parametro}`)
    */
    axios
      .delete(`https://products-crud.academlo.tech/products/${id}/`)
      .then(() => getAllProducts())
      .catch((error) => console.error(error));
  };

  const selectProduct = (product) => {
    setProductSelected(product);
  };

  const editProduct = (product) => {
    /*
      axios.put( `url/${id}`, body )
    */
    axios
      .put(
        `https://products-crud.academlo.tech/products/${product.id}/`,
        product
      )
      .then(() => {
        getAllProducts();
        setProductSelected(null);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <ProducForm
        addProduct={addProduct}
        productSelected={productSelected}
        editProduct={editProduct}
      />

      <ProducList
        productsList={productsList}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </main>
  );
}

export default App;