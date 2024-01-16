export const getAllNurseries = async () => {
  const response = await fetch(
    "http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=nurseryDistributors"
  );
  return await response.json();
};
