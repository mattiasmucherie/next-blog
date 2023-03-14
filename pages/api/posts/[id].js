export default async function handler(req, res) {
  const id = req.query.id
  const raw = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
  const resp = await raw.json()

  res.status(200).json(resp)
}
