import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Jafor Iqbal', 'Salman Shah'];
  const products = [
    {name:'Photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$60'},
    {name:'VS code', price:'$95'},
    {name:'MySQL', price:'$999'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Im a REACT Person</h1>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product name={products[3].name} price={products[3].price}></Product>

        
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
    float:'left',
    // display:'left',
    margin:'5px'


  }
  return (
    <div style={productStyle}>
      <h2 style={{color:'blue'}}>{props.name}</h2>
      <h4 style={{color:'red'}}>{props.price}</h4>
      <button>Buy Now</button>

    </div>
  )

}

export default App;
