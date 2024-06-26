import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Main from "@/Components/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div
        style={{
          height: "70px",
          backgroundColor: "transpatrent",
        }}
      ></div>
    </>
  );
}
