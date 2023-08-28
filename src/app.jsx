import React from 'react';
import Settings from "../src/Context/Settings/index";
import ToDo from "./components/todo/todo.jsx";

// export default class App extends React.Component {
//   render() {
//     return (
//       <Settings>
//       <ToDo />
//       </Settings>
//     );
//   }
// }

import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Settings>
        <ToDo />
      </Settings>
    </MantineProvider>
  );
}
