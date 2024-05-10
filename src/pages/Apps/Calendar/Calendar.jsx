import { Box } from "grommet";

import CalendarMonth from "./CalendarMonth";
import CalendarWeek from "./CalendarWeek";
import useCalendar from "./useCalendar";

export function Calendar({ ...props }) {
  const calendar = useCalendar();

  return (
    <Box className="Calendar" pad={{ vertical: "medium" }} overflow={{ horizontal: "hidden" }} fill {...props}>
      {calendar?.viewKey === "month" && <CalendarMonth {...calendar} />}
      {calendar?.viewKey === "week" && <CalendarWeek {...calendar} />}
    </Box>
  );
}
