import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main className="py-3">
        <Container>
          <h1>Welcome to Petshop</h1>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
