import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { FC, useState } from "react";
import { debounce } from "lodash";
import { TodoTab } from "@/types/todo";
import { useTodosFilter } from "../TodosFilterContext";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TodoFilters: FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const { currentTab, setCurrentTab, setSearch } = useTodosFilter();

  const debouncedSearch = React.useRef(
    debounce((search) => {
      setSearch(search);
    }, 500)
  ).current;

  const handleTabChange = (_event: React.SyntheticEvent, newValue: TodoTab) => {
    setCurrentTab(newValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <Paper elevation={2}>
      <Box padding={4}>
        <Box
          component="form"
          sx={{ borderBottom: 1, borderColor: "divider" }}
          noValidate
          autoComplete="off"
        >
          <Stack direction="row" spacing={2}>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Completed" {...a11yProps(1)} />
              <Tab label="Uncompleted" {...a11yProps(2)} />
            </Tabs>
            <FormControl variant="filled">
              <InputLabel htmlFor="todo-search">Title</InputLabel>
              <FilledInput
                id="todo-search"
                value={searchInput}
                placeholder="Search..."
                onChange={handleSearchChange}
              />
            </FormControl>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};
