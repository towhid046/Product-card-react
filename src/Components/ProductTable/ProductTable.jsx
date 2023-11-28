/* eslint-disable react/prop-types */
import { MdOutlineDelete } from "react-icons/md";

export default function ProductTable({ obj }) {
  const { products, setProducts } = obj;

  // remove a product
  const removeProductHandelar = (idNo) => {
    const filteredproducts = products.filter((todo) => todo.id !== idNo);
    setProducts(filteredproducts);
  };


  return (
    <>
      <div className="table_wrapper">
        { products.length > 0 ?
        <div>
        <table className="table_data">
          <thead className="table_head">
            <tr>
              <th>SN.</th>
              <th>Name</th>
              <th>Id</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="table_body">
            {products.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo.name}</td>
                <td>{todo.id}</td>
                <td>${todo.price}</td>
                <td>{todo.quantity}</td>
                <td>{todo.color}</td>
                <td>{todo.description}</td>
                <li className="delete_icon">
                  <MdOutlineDelete
                    onClick={() => removeProductHandelar(todo.id)}
                  />
                </li>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{textAlign: 'center', marginTop: '15px'}}><button className="removeAll_btn" onClick={()=>setProducts([])}>Remove All</button></p>
      </div> 
      : <h2 style={{color: 'gray', textAlign: 'center'}}>No Product have added yet!</h2>
          
        }
      </div>
    </>
  );
}
