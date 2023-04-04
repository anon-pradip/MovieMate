import Footer from "./components/Footer";
import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="">
      <Header />
      <div className="">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
