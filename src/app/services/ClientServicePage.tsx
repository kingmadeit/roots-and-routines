'use client';
import React, { useCallback, useState } from "react";
import { ServiceCategory } from "@/constants/services";
import SmoothTabNav from "@/components/SmoothTabNav";

interface ClientServicePageProps {
  categories: ServiceCategory[];
}

const ClientServicePage: React.FC<ClientServicePageProps> = ({ categories }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleTabHovered = useCallback((categoryId: string): void => {
    const index = categories.findIndex(c => c.id === categoryId);
    if (index !== -1) setSelectedIndex(index);
  }, [categories]);

  return (
    <div className="container h-screen">
      <SmoothTabNav
        tabs={categories}
        selectedIndex={selectedIndex}
        onChange={handleTabHovered}
        className="h-[50%] w-full flex items-center justify-center"
      />
    </div>
  );
};

export default ClientServicePage;
