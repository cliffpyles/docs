import { Grommet } from "grommet";
import { RouterProvider } from "react-router-dom";
import { trace } from "@opentelemetry/api";
import router from "./Router";
import { branded } from "./themes";

function handleAnalytics(event) {
  if (import.meta.env.VITE_TRACING_ENABLED === "true") {
    const { type, ...attrs } = event;
    // console.log(`Analytics Event (${type}): `, attrs);
    const span = trace.getTracer("grommet-tracer").startSpan(type);

    Object.keys(attrs).forEach((key) => {
      span.setAttribute(key, attrs[key]);
    });

    span.end();
  }
}

function App() {
  return (
    <Grommet theme={branded} full="min" onAnalytics={handleAnalytics}>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </Grommet>
  );
}

export default App;
