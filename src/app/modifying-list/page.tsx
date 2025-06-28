"use client";
import React, { useEffect, useState } from "react";
import { GrayContainer } from "../project-section";
import carsList from "../../../public/cars.json";
import { Button } from "@/components/ui/button";
// import { GrayContainer } from "../project-section";
import ImageCard from "../image-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

//needed because this is typescript
interface Car {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  zipcode: string;
  image: string;
}

export default function ModifyingList() {
  const [cars, setCars] = useState<Car[]>([]);

  const [zipCode, setZipCode] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const [zipCodeInput, setZipCodeInput] = useState<string>("");
  const [brandInput, setBrandInput] = useState<string>("");
  const [modelInput, setModelInput] = useState<string>("");
  //   const [year, setYear] = useState<string>("");
  //   const [price, setPrice] = useState<string>("");
  //   const [mileage, setMileage] = useState<string>("");

  useEffect(() => {
    setCars(carsList);
  }, []);

  function handleSearch() {
    console.log(zipCodeInput + " " + brandInput + " " + modelInput);
    setZipCode(zipCodeInput);
    setBrand(brandInput);
    setModel(modelInput);
  }

  const uniqueBrands = [...new Set(cars.map((car) => car.make))];

  let filteredCars = cars;
  if (zipCode) {
    filteredCars = filteredCars.filter((car) => car.zipcode == zipCode);
  }
  if (brand) {
    filteredCars = filteredCars.filter((car) => car.make == brand);
  }
  if (model) {
    filteredCars = filteredCars.filter((car) => car.model == model);
  }

  const uniqueModels = [...new Set(filteredCars.map((car) => car.model))];

  const listItems = filteredCars.map((filteredCar, index) => (
    <div key={index} className="flex w-full">
      <ImageCard
        image={filteredCar.image}
        title={
          filteredCar.year + " " + filteredCar.make + " " + filteredCar.model
        }
        description={
          filteredCar.color +
          " | " +
          filteredCar.mileage +
          " miles | " +
          filteredCar.model +
          " | " +
          filteredCar.zipcode
        }
        height={200}
      />
    </div>
  ));

  return (
    <div className="flex flex-col gap-8 px-4 sm:px-40 mt-10">
      <GrayContainer
        title="Car Search · Front-end Functionality"
        description="Modifying lists in frontend to search for cars by make, model, and zip code (eg. 02115)."
      />

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <input
          type="text"
          className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-1/2 h-9"
          placeholder="Enter Zip Code"
          onChange={(e) => {
            setZipCodeInput(e.target.value);
            console.log(e.target.value);
          }}
        />
        <Select
          onValueChange={(value) => {
            setBrandInput(value);
            setModelInput("");
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent>
            {uniqueBrands.map((brand, index) => (
              <SelectItem key={index} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setModelInput}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            {uniqueModels.map((model, index) => (
              <SelectItem key={index} value={model}>
                {model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          onClick={() => {
            handleSearch();
          }}
          className="cursor-pointer"
        >
          Search
        </Button>
      </div>

      {listItems.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listItems}
        </ul>
      ) : (
        <p className="text-center">No cars found</p>
      )}
    </div>
  );
}

//02115
