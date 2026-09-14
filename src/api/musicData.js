export async function musicDataList(query) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&attribute=artistTerm&explicit=yes`;
  try {
    const res = await fetch(url);
    const results = await res.json();
    const { _, results: data } = results;
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
