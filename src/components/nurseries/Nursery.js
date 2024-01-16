import { useState, useEffect } from "react";

export const Nursery = ({ allFlowers, allDistributors, nursery }) => {
  const [nurseryFlowerDetails, setNurseryFlowerDetails] = useState([]);
  const [nurseryDistibutorDetails, setNurseryDistibutorDetails] = useState([]);

  useEffect(() => {
    const flowerIdArray = [];
    for (const nurseryFlower of nursery.nurseryFlowers) {
      flowerIdArray.push(nurseryFlower.flowerId);
    }

    const foundFlowers = [];
    for (const flowerId of flowerIdArray) {
      const flower = allFlowers.find((flower) => flower.id === flowerId);
      foundFlowers.push(flower);
    }
    setNurseryFlowerDetails(foundFlowers);
  }, [nursery, allFlowers]);

  useEffect(() => {
    const distributorIdArray = [];
    for (const nurseryDistributor of nursery.nurseryDistributors) {
      distributorIdArray.push(nurseryDistributor.distributorId);
    }

    const foundDistributors = [];
    for (const distributorId of distributorIdArray) {
      const distributor = allDistributors.find(
        (distributor) => distributor.id === distributorId
      );
      foundDistributors.push(distributor);
    }
    setNurseryDistibutorDetails(foundDistributors);
  }, [nursery, allDistributors]);

  const findFlowerPrice = (flower) => {
    const nurseryFlowerMatch = nursery.nurseryFlowers.find(
      (nurseryFlower) => nurseryFlower?.flowerId === flower?.id
    );
    const flowerPrice = nurseryFlowerMatch?.price;
    return flowerPrice;
  };

  return (
    <div className="nursery">
      <h3 className="nursery-name card-heading">{nursery.name}</h3>
      <div className="nursery-details">
        <div className="nursery-flowers">
          <h4 className="card-subheading">Flowers Grown</h4>
          <ul className="flower-list">
            {nurseryFlowerDetails.map((flower) => {
              const flowerPrice = findFlowerPrice(flower);

              return (
                <li className="flower-list-item" key={flower?.id}>
                  <span className="flower-color">{flower?.color}</span>
                  <span className="flower-species">{flower?.species}: </span>
                  <span className="flower-price">
                    {flowerPrice
                      ? flowerPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : ""}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nursery-distributors">
          <h4 className="card-subheading">Distributors Served</h4>
          <ul className="distributor-list">
            {nurseryDistibutorDetails.map((distributor) => {
              return (
                <li className="distributor-list-item" key={distributor?.id}>
                  <div className="distributor-name">{distributor?.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
