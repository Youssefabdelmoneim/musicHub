let once = false;
export async function musicDataList(query) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&attribute=artistTerm&explicit=yes`;
  try {
    const r1 = await fetch(url);
    const r2 = await r1.json();
    const data = r2.results;
    if (!once) {
      console.log(data[0]);
      once = true;
    }
    return data;
  } catch (err) {
    throw new Error("there is a problem with fetching data");
  }
}

export async function musicDataLists(queries) {
  const lists = await Promise.all(
    queries.map(async function (query) {
      const data = await musicDataList(query);
      return { query, data };
    }),
  );
  return lists;
}
