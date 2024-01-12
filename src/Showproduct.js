import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mycontext } from "./home";

function Showproduct() {
  const { id } = useParams();
  const { ProductData, setpass,login, pass,carts ,setCarts} = useContext(mycontext);


  
  

  const addto = () => {
    if(login)
    if (!pass.includes(ProductData[id - 1].id)) {
      // If not, create a new array with the added product ID and update the state
      setpass([...pass, ProductData[id - 1].id]);
      console.log(pass);
      setCarts(carts + 1);
    }
   
  }
  useEffect(() => {
    console.log(pass);
  }, [pass]);
  return (
    <div className='bg-stone-200 h-screen w-screen flex justify-center items-center'>
    <div className='w-4/5 h-1/2 bg-white flex flex-row rounded '>
      <div className='w-2/5 h-full bg-white rounded flex items-center flex-wrap justify-center'>
        <img
          className='w- h-4/5 opacity-75 rounded transition hover:opacity-100 hover:-translate-y-1 hover:scale-110 duration-300'
          src={ProductData[id - 1].image}
          alt={ProductData[id - 1].name}
        />
      </div>
      <div className='p-5 w-3/5 h-full text-justify flex flex-start flex-column justify-center bg-gray-200 rounded'>
        <h4>{ProductData[id - 1].name}</h4>
        <h2 className='text-red-500'>{ProductData[id-1].prc}</h2>
        <hr />
        <div className='w-full text-left h-25 overflow-hidden whitespace-pre-wrap text-black'>
          {ProductData[id - 1].dscr}
        </div>
        <button
          className='transition hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-indigo-500 bg-blue-800 bg-cyan-500 rounded w-50 h-10 text-white hover:bg-cyan-800'
          onClick={addto}
        >
          Add to cart
        </button>
      </div>
    </div>
    </div>
  );
}

export default Showproduct;
