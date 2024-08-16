import "./App.css";
import Banner from "./components/custom-components/banner/Banner";
import Navbar from "./components/custom-components/navbar/Navbar";
import Top_Header from "./components/custom-components/navbar/top-header/Top_Header";
import Notice_Board from "./components/custom-components/notice-board/Notice_Board";

const App = () => {
  return (
    <div className="relative">
      <div className="h-screen absolute left-4 top-0 bottom-0 flex items-center w-80">
        <Navbar />
      </div>
      <div className="h-screen absolute right-0 top-0 bottom-0  w-72 ">
        <Top_Header />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-5 my-5 ">
          <div className="">
            <img src="/src/assets/logo.png" alt="" className="" />
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold">
              Ministry of Water Resources
            </h1>
            <p className="text-sm">
              Government of the People's Republic of Bangladesh <br />
              {/* Ministry of Water Resources (MoWR) is a government department responsible for managing the water supply, conservation, and management of water resources in Bangladesh. */}
            </p>
          </div>
        </div>
        <Banner />
        <div className="flex justify-between my-10">

        <div className="w-2/3">
        <Notice_Board/>
        </div>
        <div className="w-1/3">

        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
