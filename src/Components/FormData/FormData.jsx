import { useEffect, useState } from "react";
import ProductTable from "../ProductTable/ProductTable";
import { getData } from "../GetData";
import "./FormData.css";

export default function FormData() {
  const [products, setProducts] = useState(getData('products'));
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuentity] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  // Clear input boxes
  const clearInput = () => {
    setName("");
    setId("");
    setPrice("");
    setQuentity("");
    setDescription("");
    setColor("");
  };

  // submit form:-
  const submitHandler = (e) => {
    e.preventDefault();

    // Check the id  exists or not
    const findedId = products.find((todo) => todo.id === id);
    if (findedId) {
      alert("Product Id already exists!");
    } else {
      const productInfo = { name, id, price, quantity, description, color };
      setProducts([...products, productInfo]);
      clearInput();
    }
  };
//  set data to local storage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // create object to send as props
  const obj = { products, setProducts };

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "30px" }}>Product Cart</h2>
      <div className="main_container">
        <div className="form_wrapper">
          <form className="input_form" action="" onSubmit={submitHandler}>
            <label htmlFor="">Product Name *</label> <br />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="productName"
              required
              type="text"
              placeholder="Product Name"
            />
            <br />
            <label htmlFor="">Product Id *</label>
            <br />
            <input
              onChange={(e) => setId(e.target.value)}
              value={id}
              name="productId"
              required
              type="text"
              placeholder="Product Id"
            />
            <br />
            <label htmlFor="">Price *</label> <br />
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              name="price"
              required
              type="number"
              placeholder="Price"
            />
            <br />
            <label htmlFor="">Quantity *</label> <br />
            <input
              onChange={(e) => setQuentity(e.target.value)}
              value={quantity}
              name="quantity"
              required
              type="number"
              placeholder="Quantity"
            />
            <br />
            <select
              onChange={(e) => setColor(e.target.value)}
              value={color}
              name="chooseColor"
              required
              id=""
              className="color_box"
            >
              <option value="">Select color *</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
            <br />
            <label htmlFor="">Description</label> <br />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              placeholder="Description of the product"
              className="description_box"
              rows={5}
            />
            <br />
            <button className="addCard_btn">Add Product</button>
          </form>
        </div>

        <ProductTable obj={obj} />

      </div>
    </>
  );
}
