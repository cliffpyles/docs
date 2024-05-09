import Section, { SectionCard } from "../../components/Section";
import {
  Box,
  Toolbar,
  Data,
  DataFilter,
  DataFilters,
  DataTable,
  DataTableColumns,
  DataSearch,
  DataSort,
  DataSummary,
  DataView,
} from "grommet";
import mockData from "./mockData";

const columns = [
  { property: "title", header: "Title", primary: true },
  { property: "year", header: "Year" },
  { property: "genre", header: "Genre" },
  { property: "director", header: "Director" },
  { property: "main_actor", header: "Main Actor" },
  { property: "rating", header: "Rating" },
];

export default function DataSection() {
  return (
    <Section title="Data" description="Components related to data management">
      <SectionCard title="Data Table">
        <Box pad="large">
          <Data
            data={mockData}
            properties={{
              title: { label: "Title" },
              year: { label: "Year" },
              genre: { label: "Genre" },
              director: { label: "Directory" },
              main_actor: { label: "Main Actor" },
              rating: { label: "Rating" },
            }}
            views={[
              {
                name: "Action Genre",
                properties: {
                  genre: ["Action"],
                },
              },
            ]}
          >
            <Toolbar gap="medium">
              <Toolbar>
                <DataSearch />
                <DataSort drop />
                <DataFilters drop>
                  <DataFilter property="genre" />
                </DataFilters>
              </Toolbar>
              <DataView />
              <DataTableColumns
                options={columns.map((column) => ({
                  property: column.property,
                  label: column.header,
                }))}
                drop
              />
            </Toolbar>
            <DataSummary />
            <Box overflow="auto">
              <DataTable alignSelf="start" columns={columns} sortable />
            </Box>
          </Data>
        </Box>
      </SectionCard>
    </Section>
  );
}
