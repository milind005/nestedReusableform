import OrderForm from './components/OrderForm';
import SignIn from './components/SignIn';
import './App.css';




// note : this form customises output based on keys only in object structure
function App() {
  return (
    <div className="App">
      <h1>Power</h1>
      <OrderForm />
      <hr />
      <hr />
      <hr />
      <SignIn />
      {/* <MyForm /> */}
    </div>
  );
}

export default App;
