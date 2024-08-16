import { Button } from "@/components/ui/button";

const Notice_Board = () => {
  return (
    <div
      className="relative p-5  pb-10 bg-gray-100 rounded-md "
    //   style={{
    //     backgroundImage: `url("https://i.pinimg.com/736x/28/f3/0f/28f30fa950f9ea5a7031a3e80c164873.jpg")`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //   }}
    >
        <div className="absolute top-0 left-0  ">
            <img src="/src/assets/Notification_bell.png" alt="" className="h-20" />
        </div>
        <div className="absolute bottom-0 right-0">
            <img src="/src/assets/loudspeaker.png" alt="" className="h-20" />
        </div>
        <div className="flex justify-between items-center">
        <h3 className="font-semibold text-2xl ml-16">Notice Board</h3>
<Button size="sm" className="text-[#1697BA]" variant={"outline"}>All</Button>
        </div>
      <ul className="list-disc list-inside space-y-2 ml-20 text-sm mt-2">
        <li className="hover:underline cursor-pointer flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6  text-[#1697BA]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>
অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)</li>
        <li className="hover:underline cursor-pointer flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#1697BA]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>ই-নথি থেকে ডিজিটাল নথি/ডি-নথিতে মাইগ্রেশন প্রসঙ্গে।</li>
        <li className="hover:underline cursor-pointer flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#1697BA]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>অফিস আদেশ (সচিব মহোদয়ের রুটিন দায়িত্ব পালন)</li>
        <li className="hover:underline cursor-pointer flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#1697BA]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>Office order</li>
        <li className="hover:underline cursor-pointer flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#1697BA]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>
          পানি সম্পদ মন্ত্রণালয়ের কম্পিউটার অপারেটর, সাঁট মুদ্রাক্ষরিক কাম
          কম্পি...
        </li>
      </ul>
    </div>
  );
};

export default Notice_Board;
