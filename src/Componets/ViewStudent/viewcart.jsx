import React from 'react'
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, productremove } from '../../Services/Action/action';

import { Link } from 'react-router-dom';

function ViewStudent() {

  // const studentdata = useSelector(state => state.productreducer.products)
  // console.log("productData",productData);
  
  const dispatch = useDispatch();
  let totalprice = 0;



  const handleRemove = (id) => {
    dispatch(productremove(id))
  }

  const handlepay = () => {
    alert("Succesfully Payment")
  }

  const inc = (id) => {
dispatch(increment(id))
  }

  const dec = (id) => {
    dispatch(decrement(id))
      }

  return (
    <>



      <Container>

        <h1 className='text-center my-3'>View cart</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Address</th>
              <th>City</th>
              <th>STD</th>
              <th>Zip Code</th>

            </tr>
          </thead>
          {/* <tbody>
            {
              productData.map((data) => {
                console.log(data,"data");
                totalprice += data.price * data.qty
                return (
                  <tr>
                    <td><img src={data.image} alt="" width="50px" height="50px" /></td>
                    <td>{data.title}</td>
                    <td>{data.category}</td>
                    <td>
                      <button onClick={() => inc(data.id)}>+</button>
                      {data.qty}
                      <button onClick={() => dec(data.id)}>-</button>
                      </td>
                    <td>{data.price * data.qty}</td>
                    <td><button className='btn btn-danger' onClick={() => handleRemove(data.id)}>Remove</button></td>
                  </tr>
                )
              })
            }


          </tbody> */}
        </Table>



      </Container>
    </>
  )
}

export default ViewStudent