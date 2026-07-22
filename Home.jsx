export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020712",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>🦅 EAGLEKX</h1>

      <p style={{ color: "#38bdf8", fontSize: "22px" }}>
        One App. Unlimited Entertainment.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "14px 30px",
          background: "#38bdf8",
          border: "none",
          borderRadius: "12px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </main>
  );
}
