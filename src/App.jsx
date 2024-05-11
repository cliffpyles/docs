import { Grommet } from "grommet";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { branded } from "./themes";
function App() {
  return (
    <Grommet theme={branded} full="min">
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </Grommet>
  );
}

export default App;
