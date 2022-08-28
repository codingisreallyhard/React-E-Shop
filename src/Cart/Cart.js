import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const { onClose, cartItems, onAdd, onRemove } = props;
  const totalAmount = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <Modal onClose={onClose} className={classes.modal}>
      <div>
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title" id="exampleModalLabel">
              Your Shopping Cart
            </h5>
          </div>
          <div class="modal-body">
            <table className={classes.table}>
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                  <th scope="col" className={classes.tdactions}>
                    Actions
                  </th>
                </tr>
              </thead>

              {cartItems.map((item, i) => (
                <tbody key={i} className={classes.flexbox}>
                  <tr className={classes.idk}>
                    <td className={classes.tdname}>
                      <img
                        src={item.image}
                        className={classes.cartimg}
                        alt="Product image in cart"
                      />
                      {item.name}
                    </td>

                    <td className={classes.tdprice}>{item.price}</td>

                    <td className={classes.tdqty}>{item.qty}</td>

                    <td className={classes.tdtotal}>
                      {(item.price * item.qty).toFixed(2)}
                    </td>

                    <td className={classes.tdbtn}>
                      <button
                        className={classes.tdbtnn}
                        onClick={() => onAdd(item)}
                      >
                        +
                      </button>
                      <button
                        className={classes.tdbtnn}
                        onClick={() => onRemove(item)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div class="d-flex justify-content-end">
              <h5 className={classes.totalpricetot}>
                Total:{" "}
                <span class="price text-success">
                  {totalAmount.toFixed(2)}$
                </span>
              </h5>
            </div>

            <div class="modal-footer border-top-0 d-flex justify-content-between">
              <button className={classes.closebutton} onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
