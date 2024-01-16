export const getAllNurseries = async () => {
  const response = await fetch(
    "http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=nurseryDistributors"
  );
  return await response.json();
};

export const getAndExpandNurseryFlowers = async () => {
  const response = await fetch(
    "http://localhost:8088/nurseryFlowers?_expand=nursery&_expand=flower"
  );
  return await response.json();
};
