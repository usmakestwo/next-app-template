/**
 * Returns a promise with from the Cluster API
 * @returns Promise
 */
export default async (external) => {
  const hostname = external ? 'http://jsonplaceholder.typicode.com/todos' : '/api/todos'
  const res = await fetch(hostname)
  return res.json()
}
