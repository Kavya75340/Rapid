import "./App.css";
import "./theme.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
