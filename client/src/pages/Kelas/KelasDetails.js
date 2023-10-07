import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { getDasar } from '../../axios/PemogramanAxios';
import { getMatkul } from '../../axios/MatkulAxios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KelasDetails() {
    const [dasar, setDasar] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      // callback untuk mengambil data lecturers dari folder axios
      getDasar((result) => setDasar(result));
    }, []);
  return (
    <div>
        <Typography sx={{textAlign: 'center'}}>Pemograman Dasar - AC </Typography>
        <Typography >Nama Dosen : Sabrina Spellman</Typography>
        <Typography>Hari : Selasa</Typography>
        <Typography>Waktu : 10:40 -13:20</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , mt: 1}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="right">NIM</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="right">Nilai UTS</TableCell>
            <TableCell align="right">Nilai Tugas</TableCell>
            <TableCell align="right">Nilai UAS</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dasar.map((row) => {
                const { nomorInduk, nama, role, nilaiUjian, nilaiTugas, nilaiUjianAkhir, grade } = row
            return (
                
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{nomorInduk}</TableCell>
              <TableCell align="left">{nama}</TableCell>
              <TableCell align="left">{role}</TableCell>
              <TableCell align="center">{nilaiUjian}</TableCell>
              <TableCell align="center">{nilaiTugas}</TableCell>
              <TableCell align="center">{nilaiUjianAkhir}</TableCell>
              <TableCell align="center">{grade}</TableCell>
            </TableRow>
)})}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography><p>(* Nilai sama dengan 999 berarti belum dilakukan input oleh dosen)</p></Typography>
    </div>
  );
}
