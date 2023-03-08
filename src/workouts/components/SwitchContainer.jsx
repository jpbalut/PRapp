import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const data = false
export function SwitchContainer({ handleSwitch, label }) {
  const [state, setState] = useState(data);

  const handleChange = event => {
    setState(event.target.checked);
    handleSwitch(event.target.checked);
  };
  console.log(state)
  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={state}
            onChange={handleChange}
            value={state}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label={label}
        labelPlacement="start"
      />
    </div>
  );
}