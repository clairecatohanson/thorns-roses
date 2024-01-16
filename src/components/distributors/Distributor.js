import { useState, useEffect } from "react";

export const Distributor = ({ distributor, allFlowers, allNurseryFlowers }) => {
  const [nurseryDetails, setNurseryDetails] = useState([]);
  const [flowerDetails, setFlowerDetails] = useState([]);
  const [retailerDetails, setRetailerDetails] = useState([]);

  useEffect(() => {
    const nurseryIdMatches = [];
    for (const nurseryDistributor of distributor.nurseryDistributors) {
      nurseryIdMatches.push(nurseryDistributor.nurseryId);
    }

    const foundNurseryFlowers = allNurseryFlowers.filter((nurseryFlower) =>
      nurseryIdMatches.includes(nurseryFlower.nurseryId)
    );
    setNurseryDetails(foundNurseryFlowers);
  }, [distributor, allNurseryFlowers]);

  useEffect(() => {
    const flowerIdMatches = [];
    for (const nurseryFlower of nurseryDetails) {
      flowerIdMatches.push(nurseryFlower.flowerId);
    }

    const foundFlowers = allFlowers.filter((flower) =>
      flowerIdMatches.includes(flower.id)
    );
    setFlowerDetails(foundFlowers);
  }, [allFlowers, nurseryDetails]);

  useEffect(() => {
    setRetailerDetails(distributor.retailers);
  }, [distributor]);

  const renderNurseryPrice = (nurseryAndPrice) => {
    return (
      <>
        <td className="nursery-name">{nurseryAndPrice.name}</td>
        <td className="nursery-price">
          {nurseryAndPrice.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </td>
      </>
    );
  };

  const findNurseryAndPrice = (flower) => {
    const nurseryAndPriceArray = [];
    for (const nurseryObj of nurseryDetails) {
      if (nurseryObj.flowerId === flower.id) {
        const nurseryName = nurseryObj.nursery.name;
        const nurseryPrice = nurseryObj.price;
        const markupPrice =
          nurseryPrice * (1 + distributor.percentMarkup / 100);
        nurseryAndPriceArray.push({
          id: nurseryObj.id,
          name: nurseryName,
          price: markupPrice,
        });
      }
    }

    return (
      <table className="nursery-price-table">
        <tbody className="table-body">
          {nurseryAndPriceArray.map((nurseryAndPrice) => {
            return (
              <tr key={nurseryAndPrice.id} className="table-row">
                {renderNurseryPrice(nurseryAndPrice)}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="distributor">
      <h3 className="distributor-name card-heading">{distributor.name}</h3>
      <div className="distributor-details">
        <div className="distributor-flowers">
          <h4 className="card-subheading">Flowers Provided</h4>
          <ul className="flower-list">
            {flowerDetails.map((flower) => {
              return (
                <li className="flower-list-item" key={flower?.id}>
                  <h5 className="flower-list-heading">
                    <span className="flower-color">{flower?.color}</span>
                    <span className="flower-species">{flower?.species}</span>
                  </h5>
                  <div className="nursery-price-container">
                    {findNurseryAndPrice(flower)}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="distributor-retailers">
          <h4 className="card-subheading">Retailers Served</h4>
          <ul className="retailer-list">
            {retailerDetails.map((retailer) => {
              return (
                <li className="retailer-list-item" key={retailer?.id}>
                  <div className="retailer-name">{retailer?.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
