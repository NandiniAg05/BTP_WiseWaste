import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  // Anchor,
} from "@mantine/core";
import classes from "./AuthenticationImage.module.css";
import AppUrlListener from "../../Listeners/AppUrlListener"
import {useBackButton} from "../../customHooks/useBackButton"

export function AuthenticationImage() {
  useBackButton("exit");
  return (
    <div className={classes.wrapper}>
      <AppUrlListener />
      <Paper className={classes.form} radius={0} p={20}>
        <Title order={2} className={classes.title} ta="center" mt={50} mb={50}>
          Welcome to Wise Waste!!
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button id={classes.btn} fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            // fw={700}
            className={classes.register}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </a>
        </Text>
      </Paper>
    </div>
  );
}