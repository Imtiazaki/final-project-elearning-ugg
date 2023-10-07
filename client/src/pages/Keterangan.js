import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from 'react'
import { Menu } from "@mui/material";

const keterangan = [
  {
    value: "S",
    label: "Sakit",
  },
  {
    value: "I",
    label: "Izin",
  },
  {
    value: "H",
    label: "Hadir",
  },
];

export default function KeteranganAbsensi() {
  const [isiKeterangan, setisiKeterangan] = useState(false);
  const [pilihKeterangan, setPilihKeterangan] = useState("")
  const cekKeterangan = () => {
    
}
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mx: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-select"
          select
          label="Select"
          onChange={e => setPilihKeterangan(e.target.value)}
          helperText="Pilih Keterangan Absensi"
          variant="filled"
          value={MenuItem.value}
        >
          {keterangan.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button sx={{ m: 1 }} variant="contained" type="submit">
          Submit
        </Button>
      </div>
    </Box>
  );
}
