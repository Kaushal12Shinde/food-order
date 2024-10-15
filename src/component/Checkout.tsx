import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { addItem, decreaseQuantiy, increaseQuantity } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";



const Checkout = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart?.items ?? []);

  const totalAmount = calc();

  function calc(): number {
    let total = 0; 
    cart.forEach(item => {
      total += item.price * item.quantity;
      });
      return total;
  }

  const handleIncreaseQuantity = (name: string) => {
    dispatch(increaseQuantity(name));
  }

  const handleDecreaseQuantity = ( name: string) => {
    dispatch(decreaseQuantiy(name));
  }
  return (
    <div>
      <nav className="nav-main">
        <h1>Order Food</h1>
      </nav>
      <div className="checkout-menu">
        {
          cart.length > 0 ? (cart.map((menu, index) => (
            <div key={index} className="checkout-card">
              <div>
                <h1>{menu.name}</h1>
                <p>₹{menu.price}</p>
              </div>
              <div className="menu-card-button">
                <div className="menu-card-button--dynamic">
                  <button onClick={()=>handleDecreaseQuantity(menu.name)}>-</button>
                  <p>{menu.quantity}</p>
                  <button onClick={()=> handleIncreaseQuantity(menu.name)}>+</button>
                </div>
              </div>
            </div>
          ))):(
            <p className="checkout-menu-head">No items in cart</p>
          )
        }
      </div>
      {
        cart.length > 0 && (<div className="footer-display">
          <p>Total ₹{totalAmount}</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0Q150 0 75 75T0 256t75 181t181 75t181-75t75-181t-75-181T256 0zm0 469q-88 0-150.5-62.5T43 256t62.5-150.5T256 43t150.5 62.5T469 256t-62.5 150.5T256 469zm107-219q-3 0 0 0q0-3-2-5q0-2-3-2l-42-64q-12-17-30-6q-18 10-7 30l22 30H171q-22 0-22 21t22 21h130l-22 30q-11 20 7 30q19 10 30-6l42-64q0-3 3-3v-10q2 2 2-2z"/></svg>
          </div>
      </div>)
      }
      
    </div>
  )
}

export default Checkout
