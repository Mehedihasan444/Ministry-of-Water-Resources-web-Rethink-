import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div>
      {/* advisor */}
      <div className=" flex justify-center items-center p-5">
        <div className=" space-y-3 border p-5 bg-white rounded-md">
          <h4 className="font-bold text-xl text-center">Honorable Advisor</h4>
          <div className="flex justify-center items-center">
            <img
              src="https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/office_head/0282161a_25ca_4114_aebb_3a7cf937700f/Syeda-Rizwana.jpg"
              alt=""
              className=" h-24 w-24 object-cover"
            />
          </div>
          <div className="text-center">
            <strong className="">Syeda Rizwana Hasan</strong>
            <p className="">Honorable Adviser</p>
            <p className="">Minister of Water Resources</p>
            <div className="">
              <Button variant={"link"} className="text-[#1697BA]">
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* secretary */}
      <div className=" flex justify-center items-center p-5">
        <div className=" space-y-3 border p-5 bg-white rounded-md">
          <h4 className="font-bold text-xl text-center">Secretary</h4>
          <div className="flex justify-center items-center">
            <img
              src="https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/office_head/cd5856a3_6f55_4e58_95c4_ee9b41441670/WhatsApp-Image-2022-12-26-a.jpg"
              alt=""
              className=" h-24 w-24 object-cover"
            />
          </div>
          <div className="text-center">
            <strong className="">Nazmul Ahsan</strong>
            <p className="">Secretary</p>
            <p className="">Minister of Water Resources</p>
            <div className="">
              <Button variant={"link"} className="text-[#1697BA]">
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="text-center mt-5 relative ">
        <hr className="border-t-4 border-[#1697BA]" />
        <h3 className="absolute -top-6   bg-[#f2faff] text-xl font-bold inline-block p-2 -ml-14">
          {" "}
          E-Services
        </h3>
      </div>
      {/* Internal eServices */}
      <div className=" flex justify-center items-center p-5 w-full">
        <div className="space-y-3 border p-5 bg-white rounded-md w-full">
          <h4 className="font-bold text-xl text-center">Internal eServices</h4>

          <ul className="list-disc list-inside space-y-2 text-sm">
            <li className="flex gap-2 items-center cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-[#1697BA]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              Webmail
            </li>
            <li className="flex gap-2 items-center cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-[#1697BA]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              Grievance Redress System
            </li>
            <li className="flex gap-2 items-center cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-[#1697BA]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              Knowledge Repository
            </li>
            <li className="flex gap-2 items-center cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-[#1697BA]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              e-Requisition
            </li>
            <li className="flex gap-2 items-center cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-[#1697BA]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              Online Pay Bill
            </li>
            <li className="flex gap-2 items-center cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 text-[#1697BA]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              suggestion or advice
            </li>
          </ul>
          <div className="flex justify-end">
            <Button size="sm" className="text-[#1697BA]" variant={"outline"}>
              All
            </Button>
          </div>
        </div>
      </div>
      {/* National anthem */}
      <div className="flex justify-center items-center p-5">
        <div className="space-y-3  p-5  rounded-md ">
          <h4 className="font-bold text-xl text-center">National Anthem</h4>
          <audio controls>
            <source src="/src/assets/bd_national_anthem.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center items-center p-5 w-full">
        <div className="space-y-3  border p-5 w-full bg-white  rounded-md ">
          <h4 className="font-bold text-md text-center">সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS)</h4>
          <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-[#1697BA]">
  <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clip-rule="evenodd" />
  <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" />
</svg>
<h3 className="text-xs cursor-pointer hover:underline">

সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS)
</h3>
          </div>
          
        </div>
      </div>
      {/* Social media */}
      <div className="flex justify-center items-center p-5 w-full">
        <div className="space-y-3  border p-5 w-full bg-white  rounded-md ">
          <h4 className="font-bold text-xl text-center">Social Media</h4>
          <img
            src="https://mowr.gov.bd/themes/responsive_npf/img/social/facebook.png"
            alt=""
            className="h-8 w-8 cursor-pointer"
          />
        </div>
      </div>
      {/* emergency hotline */}
      <div className=" flex justify-center items-center p-5">
        <div className="space-y-3 border p-5  bg-white rounded-md">
          <h4 className="font-bold text-xl text-center">Emergency Hotline</h4>
          <div className="flex justify-center items-center">
            <img
              src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/files/a3cbb305_511d_4266_bf35_74cfcfd2be9d/hotline_v.2_bn.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
           {/*  */}
           <div className="flex justify-center items-center p-5 w-full">
        <div className="space-y-3  border p-5 w-full bg-white  rounded-md ">
          <h4 className="font-bold text-xl text-center">Innovation Corner</h4>
          <div className="flex gap-2 items-center">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-[#1697BA]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>

<h3 className="text-sm cursor-pointer hover:underline">

Innovation Team
</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
