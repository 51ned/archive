export async function fetcher(endpoint, query) {
  return (
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
    .then((response) => response.json())
  )
}
