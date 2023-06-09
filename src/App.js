import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nayoks = ['Jafor Iqbal', 'Salman Shah', 'Jashim','Bappi'];
  const products = [
    {name:'Photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$60'},
    {name:'VS code', price:'$95'},
    {name:'MySQL', price:'$999'}, 
    {name:'PDF Reader', price:'$60' }
  ]
  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Im a REACT Person</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)
        }
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product name={products[3].name} price={products[3].price}></Product> */}

        
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    // console.log('Calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => setUsers(data));
  })
  return (
    <div>
      <h3> Dynamic Users: {users.length}</h3>
      {
        users.map(user => <li >Name:- {user.name}</li>)
      }
    </div>
  )
}


function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    // 
    
    margin:'5px'
  }
  const alignDiv= {
    display: 'flex',
    float:'left',
    margin:'5px'


  }
  return (
    <div style={alignDiv}>
      <div style={productStyle}>
      <h2 style={{color:'green'}}>{props.name}</h2>
      <h4 style={{color:'red'}}>{props.price}</h4>
      <h3>ABC</h3>
      <button>Buy Now</button>
    </div>
    </div>
  )

}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count +1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    var newCount = count - 1;
    if(newCount<0){
      newCount = 0;
    }
    else{
      setCount(newCount);
    }
    
  }


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
