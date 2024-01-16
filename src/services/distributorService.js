export const getAllDistributors = async () => {
  const response = await fetch(
    "http://localhost:8088/distributors?_embed=nurseryDistributors&_embed=retailers"
  );
  return await response.json();
};
