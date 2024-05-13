import { Page, PageContent, PageHeader } from "grommet";
import { csv } from "d3";
import Plot from "react-plotly.js";
import { useLoaderData } from "react-router-dom";

export function Sandbox(props) {
  const { data } = useLoaderData();

  return (
    <Page kind="full" {...props}>
      <PageContent>
        <PageHeader title="Sandbox" description="" pad={{ vertical: "medium" }} />
        <Plot data={data} layout={{ title: "Apple Performance" }} />
      </PageContent>
    </Page>
  );
}

export async function loadData() {
  const rows = await csv("/content/dummy/apple_data.csv");
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  const trace1 = {
    type: "scatter",
    mode: "lines",
    name: "AAPL High",
    x: unpack(rows, "Date"),
    y: unpack(rows, "AAPL.High"),
    line: { color: "#17BECF" },
  };

  const trace2 = {
    type: "scatter",
    mode: "lines",
    name: "AAPL Low",
    x: unpack(rows, "Date"),
    y: unpack(rows, "AAPL.Low"),
    line: { color: "#7F7F7F" },
  };

  const data = [trace1, trace2];
  return { data };
}
