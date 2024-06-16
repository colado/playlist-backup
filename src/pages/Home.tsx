import { Button, Grid, Group, Title, rem } from "@mantine/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Group style={{ padding: 24, paddingRight: 48 }} justify="flex-end">
        <Link to="login">
          <Button >Sign in</Button>
        </Link>
        <Link to="register">
          <Button>Sign up</Button>
        </Link>
      </Group>
      <Grid>
        <Grid.Col span={1} />
        <Grid.Col span={10}>
          <Title style={{paddingTop: rem('80px')}} size={rem('64px')} order={1}>Free your music</Title>
        </Grid.Col>
        <Grid.Col span={1} />
      </Grid>
    </>
  );
};

export default Home;
