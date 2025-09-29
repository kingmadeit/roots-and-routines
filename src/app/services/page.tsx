"use client";
import React, { useState } from "react";
import { ServiceCategory, serviceCategories } from "@/constants/services";
import SmoothTabNav from "@/components/SmoothTabNav";


interface SmoothTabProps {
  categories?: ServiceCategory[];
}

const ServicePage: React.FC<SmoothTabProps> = ({ categories = serviceCategories }) => {
  const [selected, setSelected] = useState<string>(categories[0].id);

  const handleTabClick = (categoryId: string): void => {
    setSelected(categoryId);
  };

  const selectedTab = categories.find((category) => category.id === selected);


  return (
    <div className="container h-screen">
      <SmoothTabNav
        tabs={categories}
        selectedTab={selectedTab as ServiceCategory}
        onChange={handleTabClick}
        className="h-[50%] w-full flex items-center justify-center"
        // style={{ height: "calc(100% - 1rem", top: "0.5rem" }}
      />
    </div>

    
  );
};

export default ServicePage;
