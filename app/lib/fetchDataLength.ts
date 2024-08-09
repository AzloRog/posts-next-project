const fetchDataLength = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error, can't get data from api");
  }
  const data = await res.json();
  return data.length;
};

export default fetchDataLength;
