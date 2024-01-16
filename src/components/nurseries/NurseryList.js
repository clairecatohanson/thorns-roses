import { Nursery } from "./Nursery";
import "../Lists.css";

export const NurseryList = ({ allDistributors, allFlowers, allNurseries }) => {
  return (
    <div className="nurseries">
      <h2 className="page-heading">Nurseries</h2>
      {allNurseries.map((nursery) => {
        return (
          <Nursery
            key={nursery.id}
            nursery={nursery}
            allFlowers={allFlowers}
            allDistributors={allDistributors}
          />
        );
      })}
    </div>
  );
};
