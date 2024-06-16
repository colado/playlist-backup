import "@mantine/core/styles.css";

import { Container, MantineProvider, MantineTheme, createTheme } from "@mantine/core";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import './App.css'


export default function App() {
  const theme = createTheme({
    autoContrast: true,
  });

  return (
    <MantineProvider forceColorScheme="dark">
      {/* <Wrapper> */}
        <RouterProvider router={router} />
      {/* </Wrapper> */}
    </MantineProvider>
  );
}
