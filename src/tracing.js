import { HoneycombWebSDK } from "@honeycombio/opentelemetry-web";
import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";

if (import.meta.env.VITE_TRACING_ENABLED === "true") {
  console.log("tracing enabled...");
  const config = {
    apiKey: import.meta.env.VITE_HONEYCOMB_API_KEY,
    serviceName: import.meta.env.VITE_HONEYCOMB_SERVICE_NAME,
    instrumentations: [getWebAutoInstrumentations()],
  };
  const sdk = new HoneycombWebSDK(config);

  sdk.start();
}
