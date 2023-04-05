import Footer from "./components/Footer";
import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="">
      <Header />
      <div className="min-h-[85vh]  dark:bg-gray-800">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
