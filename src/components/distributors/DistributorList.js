import { Distributor } from "./Distributor";
import "../Lists.css";

export const DistributorList = ({
  allDistributors,
  allFlowers,
  allNurseries,
}) => {
  return (
    <div className="distributors">
      <h2 className="page-heading">Distributors</h2>
      {allDistributors.map((distributor) => {
        return (
          <Distributor
            key={distributor.id}
            distributor={distributor}
            allDistributors={allDistributors}
            allFlowers={allFlowers}
            allNurseries={allNurseries}
          />
        );
      })}
    </div>
  );
};
