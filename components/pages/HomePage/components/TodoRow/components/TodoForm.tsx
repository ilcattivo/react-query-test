import { FC } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { Todo } from "@/types/todo";

type TodoFormProps = {
  todo: Todo;
  expanded: boolean;
};

export const TodoForm: FC<TodoFormProps> = ({ todo, expanded }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Edit Form
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <Box width={320}>
                <TextField
                  required
                  id={`title-field-${todo.id}`}
                  label="Title"
                  placeholder="Enter title"
                  defaultValue=""
                  fullWidth
                />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked={todo.completed} />}
                    label="Done"
                  />
                </FormGroup>
                <FormGroup>
                  <Button variant="outlined">Save</Button>
                </FormGroup>
              </Box>
            </Box>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
