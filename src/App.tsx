import "./App.css";
import Banner from "./components/custom-components/banner/Banner";
import Footer from "./components/custom-components/footer/Footer";
import Navbar from "./components/custom-components/navbar/Navbar";
import Top_Header from "./components/custom-components/navbar/top-header/Top_Header";
import News from "./components/custom-components/news/News";
import Notice_Board from "./components/custom-components/notice-board/Notice_Board";
import Services from "./components/custom-components/services/Services";
import Sidebar from "./components/custom-components/sidebar/Sidebar";


const App = () => {
  return (
    <div className="relative">
      <div className="fixed h-screen  left-4 top-0 bottom-0 flex items-center w-80">
        <Navbar />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex gap-5 my-5 border-b-4 border-[#1697BA] pb-5 ">
          <div className="flex gap-5">
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
          <div className="border-l pl-2">
            {/* <div className="h-screen absolute right-0 top-0 bottom-0  w-72 "> */}
            <Top_Header />
            {/* </div> */}
          </div>
        </div>
        <Banner />
        {/* news */}
        <div className="flex gap-2 items-center py-2">
          <h3 className="font-semibold">News: </h3>
          <News />
        </div>
        <div className="flex justify-between my-10">
          <div className="w-2/3">
            <Notice_Board />
            <div className="bg-[#f2faff]  my-10 shadow">
              <Services />
            </div>
          </div>
          <div className="w-1/3 ml-10 bg-[#f2faff] shadow rounded-md">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
