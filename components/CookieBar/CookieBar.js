import { Container, Typography, Button } from '@mui/material'
import styles from './CookieBar.module.css'

export default function CookieBar(props) {
  const { title, bodyText } = props

  return (
    <div className={styles.root}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h3" gutterBottom>
          Accept our cookies
        </Typography>

        <Typography paragraph>
          Come and get them, lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          molestias at. Ullam aperiam totam consequuntur? A asperiores minus temporibus deserunt!
        </Typography>

        <Button variant="contained" color="inherit" className={styles.button}>
          Accept
        </Button>
      </Container>
    </div>
  )
}
