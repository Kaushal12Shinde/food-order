import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addItem, decreaseQuantiy, increaseQuantity } from "../redux/cartSlice";

interface Food {
    name: string;
    price: number;
    link: string;
}

const MenuCard: React.FC<{ food: Food }> = ({ food }) => {

    const dispatch = useDispatch();
    const cart = useSelector((state:RootState) => state.cart?.items ?? []);

    const cartItem = cart.find(item => item.name ===  food.name);

    const handleAddToCart = () =>{
        dispatch (addItem(food));
    }

    const handleIncreaseQuantity = () =>{
        dispatch(increaseQuantity(food.name));
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantiy(food.name));
    }

    return (
        <div className="menu-card">
            <div className="menu-card-details">
                <img className="menu-card--img" src={`${food.link}`} alt="" />
                <div className="menu-card--text">
                    <h1>{food.name}</h1>
                    <p>₹{food.price}</p>
                </div>
            </div>
            <div className="menu-card-button">
                {
                    cartItem ?
                    (<div className="menu-card-button--dynamic">
                        <button onClick={handleDecreaseQuantity}>-</button>
                        <p>{cartItem.quantity}</p>
                        <button onClick={handleIncreaseQuantity}>+</button>
                    </div>) :( <button onClick={handleAddToCart}>Add</button>)
                }
               
            </div>
        </div>
    )
}

export default MenuCard
