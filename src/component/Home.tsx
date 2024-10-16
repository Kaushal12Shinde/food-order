import MenuCard from "./MenuCard"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { Link , useNavigate } from "react-router-dom"; 

const Home = () => {

  const navigate = useNavigate();

  const menu = [
    {
      name:"Pizza",
      price: 250,
      link:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBwbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
      name:"Burger",
      price: 200,
      link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5S2SQwBE0hIh5AADH95XD9ccLuXiiaorkEVQcU_GAFvDm7ACPHdBQqWdTTrNT3NNX4E&usqp=CAU"
    }
  ]
  const cart = useSelector((state:RootState) => state.cart?.items ?? []);

  const quantity = calc();

  function calc(): number { 
    let sum = 0;
    cart.forEach((item) => {
      sum += item.quantity;  
    });
    return sum; 
  }

  const handleCheckout = () =>{
    if(quantity > 0){
      navigate('/checkout');
    }
    else{
      alert('Your cart is empty')
    }
  }

  return (
    <>
    <div>
      <nav className="nav-main">
        <h1>Order Food</h1>
        <button onClick={handleCheckout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Z"/><path fill-rule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l1.813 3.626c.428.022.817.055 1.17.106c1.056.151 1.93.477 2.551 1.245c.621.769.757 1.691.684 2.755c-.07 1.031-.35 2.332-.698 3.957l-.451 2.107c-.235 1.097-.426 1.986-.666 2.68c-.25.725-.58 1.32-1.142 1.775c-.562.455-1.214.652-1.974.745c-.73.089-1.64.089-2.76.089H9.802c-1.122 0-2.031 0-2.761-.089c-.76-.093-1.412-.29-1.974-.745c-.563-.455-.892-1.05-1.142-1.774c-.24-.695-.43-1.584-.666-2.68l-.451-2.107c-.348-1.626-.627-2.927-.698-3.958c-.073-1.064.063-1.986.684-2.755c.62-.768 1.494-1.094 2.55-1.245c.353-.05.743-.084 1.17-.106L8.33 2.665a.75.75 0 0 1 1.342.67l-1.46 2.917c.364-.002.747-.002 1.149-.002h5.278c.402 0 .785 0 1.149.002l-1.459-2.917a.75.75 0 0 1 .335-1.006ZM5.732 7.858l-.403.806a.75.75 0 1 0 1.342.67l.787-1.574c.57-.01 1.22-.011 1.964-.011h5.156c.744 0 1.394 0 1.964.01l.787 1.575a.75.75 0 0 0 1.342-.67l-.403-.806l.174.023c.884.127 1.317.358 1.597.703c.275.34.41.803.356 1.665H3.605c-.054-.862.081-1.325.356-1.665c.28-.345.713-.576 1.597-.703l.174-.023ZM4.288 14.1a81.117 81.117 0 0 1-.481-2.35h16.386a82.85 82.85 0 0 1-.482 2.35l-.428 2c-.248 1.155-.42 1.954-.627 2.552c-.2.58-.404.886-.667 1.098c-.262.212-.605.348-1.212.422c-.629.077-1.447.078-2.628.078H9.85c-1.18 0-1.998-.001-2.627-.078c-.608-.074-.95-.21-1.212-.422c-.263-.212-.468-.519-.667-1.098c-.207-.598-.38-1.397-.627-2.552l-.429-2Z" clip-rule="evenodd"/></g></svg>
            {
              quantity? (<div className="badge">
                <p>{quantity}</p>
              </div>) :("")
            }
        </button>
      </nav>
      <div className="menu">
        {
          menu.map((food, index) => (<MenuCard key={index} food={food}/>))
        }
      </div>
      {
        quantity > 0 ? (
          <Link to='/checkout'>
            <div className="footer-display">  
              <p>{quantity} item added </p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0Q150 0 75 75T0 256t75 181t181 75t181-75t75-181t-75-181T256 0zm0 469q-88 0-150.5-62.5T43 256t62.5-150.5T256 43t150.5 62.5T469 256t-62.5 150.5T256 469zm107-219q-3 0 0 0q0-3-2-5q0-2-3-2l-42-64q-12-17-30-6q-18 10-7 30l22 30H171q-22 0-22 21t22 21h130l-22 30q-11 20 7 30q19 10 30-6l42-64q0-3 3-3v-10q2 2 2-2z"/></svg>
              </div>
            </div>
          </Link>
        ):('')
      }
    </div> 
    </>
  )
}

export default Home
