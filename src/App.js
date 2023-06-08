import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default App;
