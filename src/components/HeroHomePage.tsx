import React from "react";
import SearchQuery from "./search/SearchQuery";

interface HeroHomePageProps {
  onSearch: (query: string, number: number) => void;
}

const HeroHomePage: React.FC<HeroHomePageProps> = ({ onSearch }) => {
  return (
    <div className="flex hero-box mb-5 flex justify-center items-center ">
      <SearchQuery onSearch={onSearch} />
    </div>
  );
};

export default HeroHomePage;
