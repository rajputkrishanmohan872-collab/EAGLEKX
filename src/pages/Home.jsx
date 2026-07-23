import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="home">
        <h1>🦅 Welcome to EAGLEKX</h1>

        <p>
          The Future of Entertainment, AI & Gaming
        </p>

        <button>EXPLORE</button>
      </main>

      <Footer />
    </>
  );
}
