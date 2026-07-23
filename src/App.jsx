import { useEffect, useState } from "react";
import Home from "./pages/Home";

function Splash() {
  return (
    <div className="splash">
      <div className="logo">🦅</div>
      <h1>EAGLEKX</h1>
      <p>Beyond Entertainment</p>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Splash /> : <Home />;
}
