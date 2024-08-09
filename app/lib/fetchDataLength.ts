const fetchDataLength = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Can't get length of data");
  }
  const data = await res.json();
  return data.length;
};

export default fetchDataLength;
