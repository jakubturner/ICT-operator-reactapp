export const fetchParkingLots = async (key) => {
  const endpoint = key
    ? "https://api.golemio.cz/v2/parkings/"
    : "https://private-anon-a17015a183-golemioapi.apiary-mock.com/v2/parkings/";

  const data = await (
    await fetch(endpoint, {
      headers: {
        "X-Access-Token": key,
      },
    })
  ).json();
  return data;
};
