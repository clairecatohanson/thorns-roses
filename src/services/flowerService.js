export const getAllFlowers = async () => {
  const response = await fetch("http://localhost:8088/flowers");
  return await response.json();
};
