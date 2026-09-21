import "./App.css";
import AppProvider from "./context/AppContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./pages/NavPages/header.jsx";
import Aside from "./pages/NavPages/aside.jsx";
import Test from "./pages/Test.jsx";

function App() {
  return (
    <AppProvider>
      <div className="flex h-screen w-full flex-col gap-0.5 overflow-hidden bg-black text-white">
        <Header />

        <div className="flex h-full min-w-0 flex-1">
          <Aside />
          <main className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            <AppRoutes />
          </main>
        </div>
      </div>
    </AppProvider>

    // <Test />
  );
}

export default App;
