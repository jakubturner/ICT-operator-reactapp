import React, { useEffect, useState } from "react";
import { SearchBox } from "../components/searchBox/search.component";
import TileList from "../components/tile-list/tile-list.component";
import BottomBarComponent from "../components/bottom-bar/bottom-bar.component";
import { fetchParkingLots } from "../API";

const HomePage = () => {
  const [parkingLots, setParkingLots] = useState([]);
  const [search, setSearch] = useState("");
  const [apiKey, setApiKey] = useState();

  useEffect(() => {
    fetchParkingLots(apiKey).then((data) => {
      if (data.features) setParkingLots(data.features);
    });
  }, [apiKey]);
  const filteredParkings = parkingLots.filter((parkinglot) => {
    return parkinglot.properties.name
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  console.log(parkingLots);
  console.log(filteredParkings);

  if (!parkingLots) return null;
  return (
    <>
      <SearchBox
        placeholder="Hledej parkoviste"
        onChange={(e) => setSearch(e.target.value)}
      />
      <TileList parkingLots={filteredParkings} />
      <BottomBarComponent
        placeholder="Zadej api klic"
        onChange={(e) => setApiKey(e.target.value)}
      />
    </>
  );
};

export default HomePage;
