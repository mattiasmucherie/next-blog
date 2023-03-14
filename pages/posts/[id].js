import { Container, Divider, Typography } from "@mui/material";
import Head from "next/head";

export default function SlugPage(props) {
  const { title, bodyText } = props;

  return (
    <Container maxWidth="md">
      <Typography variant="h1">{title}</Typography>
      <Divider variant="middle" />
      <Typography variant="body1">{bodyText}</Typography>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const { id = "" } = params;
  if (!Number(id)) {
    return {
      props: {
        id,
        title: "no title",
        bodyText: "",
      },
    };
  }

  const raw = await fetch(`http://localhost:3000/api/posts/${id}`);
  const res = await raw.json();

  return {
    props: {
      id,
      title: res.title || "no title",
      bodyText: res.body || "",
    },
  };
}
