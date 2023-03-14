import Head from 'next/head'

export default function SlugPage(props) {
  const { title, bodyText } = props

  return (
    <div>
      <h1>{title}</h1>
      <p>{bodyText}</p>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const { id = '' } = params
  if (!Number(id)) {
    return {
      props: {
        id,
        title: 'no title',
        bodyText: '',
      },
    }
  }

  const raw = await fetch(`http://localhost:3000/api/posts/${id}`)
  const res = await raw.json()

  return {
    props: {
      id,
      title: res.title || 'no title',
      bodyText: res.body || '',
    },
  }
}
