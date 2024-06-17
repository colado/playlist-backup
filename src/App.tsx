import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <MantineProvider forceColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
