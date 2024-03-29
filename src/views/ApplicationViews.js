import { Outlet, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavBar } from "../components/nav/NavBar";
import { NurseryList } from "../components/nurseries/NurseryList";
import { DistributorList } from "../components/distributors/DistributorList";
import { getAllDistributors } from "../services/distributorService";
import { getAllFlowers } from "../services/flowerService";
import {
  getAllNurseries,
  getAndExpandNurseryFlowers,
} from "../services/nurseryService";

export const ApplicationViews = () => {
  const [allDistributors, setAllDistributors] = useState([]);
  const [allFlowers, setAllFlowers] = useState([]);
  const [allNurseries, setAllNurseries] = useState([]);
  const [allNurseryFlowers, setAllNurseryFlowers] = useState([]);

  useEffect(() => {
    getAllDistributors().then((distributorsArray) => {
      setAllDistributors(distributorsArray);
    });
    getAllFlowers().then((flowersArray) => {
      setAllFlowers(flowersArray);
    });
    getAllNurseries().then((nurseriesArray) => {
      setAllNurseries(nurseriesArray);
    });
    getAndExpandNurseryFlowers().then((nurseryFlowersArray) => {
      setAllNurseryFlowers(nurseryFlowersArray);
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route
          path="nurseries"
          element={
            <NurseryList
              allDistributors={allDistributors}
              allFlowers={allFlowers}
              allNurseries={allNurseries}
            />
          }
        />
        <Route
          path="distributors"
          element={
            <DistributorList
              allDistributors={allDistributors}
              allFlowers={allFlowers}
              allNurseries={allNurseries}
              allNurseryFlowers={allNurseryFlowers}
            />
          }
        />
        <Route path="retailers" element={<>Retailers</>} />
      </Route>
    </Routes>
  );
};
