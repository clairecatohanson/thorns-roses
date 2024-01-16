import { useState, useEffect } from "react";

export const Distributor = ({
  distributor,
  allDistributors,
  allFlowers,
  allNurseries,
}) => {
  const [flowerDetails, setFlowerDetails] = useState([]);

  useEffect(() => {
    const nurseryIdMatches = [];
    for (const nurseryDistributor of distributor.nurseryDistributors) {
      nurseryIdMatches.push(nurseryDistributor.nurseryId);
    }

    const foundNurseries = allNurseries.filter((nursery) =>
      nurseryIdMatches.includes(nursery.id)
    );

    const flowerIdMatches = [];
    const flowerPrices = [];
    for (const nursery of foundNurseries) {
      for (const nurseryFlower of nursery.nurseryFlowers) {
        flowerIdMatches.push(nurseryFlower.flowerId);
        flowerPrices.push({
          nurseryFlowerId: nurseryFlower.id,
          nurseryFlowerPrice: nurseryFlower.price,
        });
      }
    }
    console.log(flowerIdMatches);
    console.log(flowerPrices);

    const foundFlowers = allFlowers.filter((flower) =>
      flowerIdMatches.includes(flower.id)
    );
    setFlowerDetails(foundFlowers);
  }, [distributor, allNurseries, allFlowers]);

  return (
    <div className="distributor">
      <h3 className="distributor-name card-heading">{distributor.name}</h3>
      <div className="distributor-details">
        <div className="distributor-flowers">
          <h4 className="card-subheading">Flowers Grown</h4>
          <ul className="flower-list">
            {flowerDetails.map((flower) => {
              return (
                <li className="flower-list-item" key={flower?.id}>
                  <span className="flower-color">{flower?.color}</span>
                  <span className="flower-species">{flower?.species}: </span>
                  {/* <span className="flower-price">
                    {flowerPrice
                      ? flowerPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : ""}
                  </span> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="distributor-retailers">
          <h4 className="card-subheading">Retailers Served</h4>
          {/* <ul className="retailer-list">
            {nurseryDistibutorDetails.map((distributor) => {
              return (
                <li className="retailer-list-item" key={distributor?.id}>
                  <div className="retailer-name">{distributor?.name}</div>
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </div>
  );
};
