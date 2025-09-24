import Footer from "./components/Footer";
import Generate from "./components/Generate";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <div className="font-sans dark:bg-gray-800 bg-white">
      <Header />
      <ImageSlider />
      <Generate />
      <Footer />
    </div>
  );
}
