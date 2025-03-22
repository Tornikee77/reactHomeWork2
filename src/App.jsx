import "./App.css";
import Person from "./components/Person/Person";
import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <Person name="Tornike" age="20" college="re;educate" />;
      <Product
        profession="Fron-end developer"
        skills="html,css,js,react"
        tools="github,github desktop"
      />
    </div>
  );
}
export default App;
