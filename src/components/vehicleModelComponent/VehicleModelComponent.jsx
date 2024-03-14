import React, { useState } from "react";
import car1 from "../../assets/audia1.jpg";
import car2 from "../../assets/benz.jpg";
import car3 from "../../assets/bmw320.jpg";
import car4 from "../../assets/golf6.jpg";
import car5 from "../../assets/passatcc.jpg";
import car6 from "../../assets/toyotacamry.jpg";

const CAR_DATA = [
  {
    name: "Audi A1 S-Line",
    price: "4500",
    img: car1,
    model: "Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
  },
  {
    name: "Mercedes-Benz GLK",
    price: "5000",
    img: car2,
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    name: "BMW 320 ModernLine",
    price: "3500",
    img: car3,
    model: "320",
    mark: "BMW",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },
  {
    name: "VW Golf 6",
    price: "3700",
    img: car4,
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },

  {
    name: "VW Passat CC",
    price: "2500",
    img: car5,
    model: "Passat CC",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
  },

  {
    name: "Toyota Camry",
    price: "3000",
    img: car6,
    model: "Camry",
    mark: "Toyota",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Hybrid",
  },
];

const VehicleModelComponent = () => {
  const [carNo, setcarNo] = useState(1);

  const handleCarNo = (num) => {
    setcarNo(num);
  };
  const setCol = (num) => {
    return num === carNo ? "carModalCol" : "";
  };
  return (
    <div className="max-w-7xl mx-auto mt-[165px] px-3">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-3 mb-20">
        <h2 className="text-xl font-bold">Vehicle Models</h2>
        <h2 className="text-5xl font-bold">Our rental fleet</h2>
        <p className="text-center font-medium text-gray-500">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex justify-between">
        <div className="left flex flex-col">
          <button
            className={`bg-gray-300 px-6 py-3 text-xl font-bold mb-2 text-start ${setCol(
              1
            )}`}
            onClick={() => handleCarNo(1)}
          >
            Audi A1 S-line
          </button>
          <button
            className={`bg-gray-300 px-6 py-3 text-xl font-bold mb-2 text-start ${setCol(
              2
            )}`}
            onClick={() => handleCarNo(2)}
          >
            Mercedez-Benz GLK
          </button>
          <button
            className={`bg-gray-300 px-6 py-3 text-xl font-bold mb-2 text-start ${setCol(
              3
            )}`}
            onClick={() => handleCarNo(3)}
          >
            BMW 320 ModernLine
          </button>
          <button
            className={`bg-gray-300 px-6 py-3 text-xl font-bold mb-2 text-start ${setCol(
              4
            )}`}
            onClick={() => handleCarNo(4)}
          >
            VW Golf 6
          </button>
          <button
            className={`bg-gray-300 px-6 py-3 text-xl font-bold mb-2 text-start ${setCol(
              5
            )}`}
            onClick={() => handleCarNo(5)}
          >
            VW Passat CC
          </button>
          <button
            className={`bg-gray-300 px-6 py-3 text-xl font-bold mb-2 text-start ${setCol(
              6
            )}`}
            onClick={() => handleCarNo(6)}
          >
            Toyota Camry
          </button>
        </div>
        <div className="center">
          <img src={CAR_DATA[carNo - 1].img} alt="car" />
        </div>
        <div className="right flex flex-col gap-3 w-[300px] ">
          <div className="text-white bg-[#ff4d30] px-4 py-2 font-semibold text-lg">
          {CAR_DATA[carNo - 1].price} / rent per day
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-500">
              Model :- {CAR_DATA[carNo - 1].name}
            </span>
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-500">Year :-</span>{" "}
            {CAR_DATA[carNo - 1].year}
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-500">
              Doors :- {CAR_DATA[carNo - 1].doors}
            </span>
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-500">Ac :-</span>{" "}
            {CAR_DATA[carNo - 1].air}
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-500">
              Transmission :-
            </span>{" "}
            {CAR_DATA[carNo - 1].transmission}
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-500">Fuel :-</span>{" "}
            {CAR_DATA[carNo - 1].fuel}
          </div>

          <button className="text-white bg-[#ff4d30] px-4 py-2 font-semibold text-lg w-full">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleModelComponent;
