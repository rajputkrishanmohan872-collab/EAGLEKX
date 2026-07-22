import { useEffect, useState } from "react";
import Home from "./pages/Home";

function Splash() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#020712",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <style>{`
        @keyframes eagle {
          0% {transform:scale(.4);opacity:0;}
          50% {transform:scale(1.15);opacity:1;}
          100% {transform:scale(1);}
        }
      `}</style>

      <div
        style={{
          fontSize: "90px",
          animation: "eagle 2s ease",
        }}
      >
        🦅
      </div>

      <h1
        style={{
          color: "#38bdf8",
          fontSize: "48px",
          marginTop: "20px",
          letterSpacing: "8px",
        }}
      >
        EAGLEKX
      </h1>

      <p style={{ color: "#94a3b8" }}>
        Watch Beyond Limits
      </p>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Splash /> : <Home />;
}
