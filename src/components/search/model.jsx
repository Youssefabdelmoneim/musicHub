export default async function searchListData(query) {
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
