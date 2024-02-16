import React, { useState } from "react";

interface MultiRangeInputProps {
  // Define any props you might want to pass to this component
}

const MultiRangeInput: React.FC<MultiRangeInputProps> = (props) => {
  const [minPrice, setMinPrice] = useState<number>(1000);
  const [maxPrice, setMaxPrice] = useState<number>(7000);
  const min: number = 100;
  const max: number = 10000;

  const minthumb: number = ((minPrice - min) / (max - min)) * 100;
  const maxthumb: number = 100 - ((maxPrice - min) / (max - min)) * 100;

  const handleMinChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newMinPrice: number = Math.min(
      parseInt(event.target.value),
      maxPrice - 500
    );
    setMinPrice(newMinPrice);
//    event.target.value = String(newMinPrice);
console.log("eeee", event.target.value);

  };

  const handleMaxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newMaxPrice: number = Math.max(
      parseInt(event.target.value),
      minPrice + 500
    );
    setMaxPrice(newMaxPrice);
    // event.target.value = String(newMaxPrice);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step={100}
            min={min}
            max={max}
            onChange={handleMinChange}
            value={minPrice}
            className="absolute z-20 h-2 w-full opacity-0 cursor-pointer"
            style={{ display: "block" }} // یا visibility: 'visible'
          />
          <input
            type="range"
            step={100}
            min={min}
            max={max}
            onChange={handleMaxChange}
            value={maxPrice}
            className="absolute  appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />
          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
              style={{ right: `${maxthumb}%`, left: `${minthumb}%` }}
            ></div>
            <div
              className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2 -ml-1"
              style={{ left: `${minthumb}%` }}
            ></div>
            <div
              className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2 -mr-3"
              style={{ right: `${maxthumb}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center py-5">
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={handleMinChange}
              value={minPrice}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={handleMaxChange}
              value={maxPrice}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeInput;
