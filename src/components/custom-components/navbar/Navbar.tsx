
interface Category {
  categoryName: string;
  items: string[];
}

interface MenuItem {
  title: string;
  categories?: Category[];
}

const menuItems: MenuItem[] = [
  {
    title:"Home"
  },
  {
    title: "About us",
    categories: [
      {
        categoryName: "Ministry Details",
        items: [
          "Ministry",
          "Brief History",
          "Mission and Vision",
          "List of Ex-ministers",
        ],
      },
      {
        categoryName: "Secretaries",
        items: [
          "Secretary",
          "List of Ex-Secretaries of the Ministry of Water Resources",
        ],
      },
      {
        categoryName: "Organizational Structure",
        items: [
          "Organogram",
          "Allocation of Business",
          "Manpower",
          "Officers List",
          "Work distribution",
        ],
      },
      {
        categoryName: "Information Officers",
        items: [
          "Information Officer",
          "GRS Officer",
          "Appellate Officer",
          "Focal Point Officers",
          "Office of Secretary",
        ],
      },
      {
        categoryName: "Administrative Wings",
        items: [
          "Grade 10 officer List",
          "Admin- Wing",
          "Development Wing",
          "Budget & Audit",
          "Planning Wing",
          "Reform Management and Policy Research Unit",
        ],
      },
      {
        categoryName: "Services & Committees",
        items: [
          "Services of Ministry",
          "Citizen Charter",
          "List of Citizen e-Services",
          "List of Other Services",
          "Committees of Ministry",
          "Committee chaired by Honorable PM and Honorable Minister regarding Ministry",
        ],
      },
    ],
  },
  {
    title: "Organizations",
    categories: [
      {
        categoryName: "Partnerships",
        items: ["Partners", "Affiliations", "Memberships"],
      },
    ],
  },
  {
    title: "Project",
    categories: [
      {
        categoryName: "Projects Overview",
        items: [
          "Ongoing Projects",
          "Completed Projects",
          "Future Projects",
        ],
      },
    ],
  },
  {
    title: "Contact",
    categories: [
      {
        categoryName: "Contact Information",
        items: ["Email Us", "Office Locations", "Support"],
      },
    ],
  },
  {
    title: "Gallery",
    categories: [
      {
        categoryName: "Media",
        items: ["Photos", "Videos", "Events"],
      },
    ],
  },
  {
    title: "Meeting related",
    categories: [
      {
        categoryName: "Meeting Documents",
        items: ["Agendas", "Minutes", "Schedules", "Resources"],
      },
    ],
  },
  {
    title: "Download",
    categories: [
      {
        categoryName: "Documents",
        items: ["Documents", "Reports", "Brochures", "Forms"],
      },
    ],
  },
  {
    title: "Helplines",
    categories: [
      {
        categoryName: "Support",
        items: ["FAQs", "Support Center", "Guides", "Community"],
      },
    ],
  },
];

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="flex z-50">
      <div className="flex flex-col w-44 bg-[#1697BA] text-white">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-4 cursor-pointer hover:bg-gray-700 border-b border-gray-400">
              {item.title}
            </div>
            {activeMenu === item.title &&  activeMenu!="Home"&&(
              <div className="absolute top-0 left-full bg-gray-700 z-50 p-4 grid grid-cols-auto gap-4 w-full max-w-md">
                {item?.categories?.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-lg font-semibold">{category.categoryName}</h4>
                    <ul className="space-y-1">
                      {category.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="p-2 border-b border-gray-600 hover:bg-gray-600">
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;