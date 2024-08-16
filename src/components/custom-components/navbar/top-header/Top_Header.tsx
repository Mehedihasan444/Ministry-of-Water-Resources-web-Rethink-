
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

const Top_Header=() =>{
    const [language,setLanguage]=useState('বাংলা')
  return (
    <div className="space-y-3 mt-10 ">

<h1 className="text-xl font-semibold">Bangladesh National Portal</h1>
<div className="flex  gap-2">

<h3 className="">Language</h3>
<Button className="text-xs  bg-[#1697BA]" size="xs" onClick={()=>language=="বাংলা"?setLanguage("English"):setLanguage("বাংলা")}>{language}</Button>
</div>
<div className="flex  gap-2">

    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="অফিসের ধরণ" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>অফিসের ধরণ</SelectLabel>
          <SelectItem value="apple">অফিসের ধরণ</SelectItem>
          <SelectItem value="banana">অধিদপ্তর বাতায়ন</SelectItem>
          <SelectItem value="blueberry">জেলা বাতায়ন</SelectItem>
          <SelectItem value="grapes">ইউনিয়ন বাতায়ন</SelectItem>
          <SelectItem value="pineapple">মন্ত্রণালয়/বিভাগ</SelectItem>
          <SelectItem value="pineapple">বিভাগীয় বাতায়ন</SelectItem>
          <SelectItem value="pineapple">উপজেলা বাতায়ন</SelectItem>
          <SelectItem value="pineapple">অন্যান্য</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Button className="">Go</Button>
</div>
<div className="flex  gap-2">
<Input type="email" className="w-[180px]" placeholder="Search here..." />
<Button className="">Search</Button>
</div>
    </div>
  )
}

export default Top_Header;

