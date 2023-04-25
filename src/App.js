
import './App.css';
import Product from './demo/Product';
import Calculator from './demo/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product price="100$" description="Հողամասի" name="լոբի"/>
        <Product price="20$" description="ԹԹվի Ճյուր" name="Հյութ"/>
        <Product price="75$" description="Պամիդոր Արտաշատի թարմ" name="Պոմիդոր"/>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
