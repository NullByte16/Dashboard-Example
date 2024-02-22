'use client';
import TableContainer from '@mui/material/TableContainer';
import  Table  from '@mui/material/Table';
import  TableHead  from '@mui/material/TableHead';
import  TableRow  from '@mui/material/TableRow';
import  TableCell  from '@mui/material/TableCell';
import  TableBody from '@mui/material/TableBody';
import  Paper  from '@mui/material/Paper';
import columns from '@/app/lib/shiftData/columns';
import shifts from '@/app/lib/shiftData/shiftsCurrent';
import analysts from '@/app/lib/analysts';
import days from '@/app/lib/shiftData/daysColumns';

export default function ShiftsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return <TableCell align="center" key={column.Header}><b>{column.Header}</b></TableCell>
            })}
          </TableRow>
          <TableRow>
            {
              days.map((day) => {
                return <TableCell align='center' key={day.Header}><b>{day.Header}</b></TableCell>
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {shifts.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" key={row.name}><b>{row.name}</b></TableCell>
              <TableCell style={{backgroundColor : analysts[row.Sun].color, color : analysts[row.Sun].color === '#3804fc' ? 'white' : 'black'}} align="center" key="Sun"><b>{row.Sun}</b></TableCell>
              <TableCell style={{backgroundColor : analysts[row.Mon].color, color : analysts[row.Mon].color === '#3804fc' ? 'white' : 'black'}} align="center" key="Mon"><b>{row.Mon}</b></TableCell>
              <TableCell style={{backgroundColor : analysts[row.Tue].color, color : analysts[row.Tue].color === '#3804fc' ? 'white' : 'black'}} align="center" key="Tue"><b>{row.Tue}</b></TableCell>
              <TableCell style={{backgroundColor : analysts[row.Wed].color, color : analysts[row.Wed].color === '#3804fc' ? 'white' : 'black'}} align="center" key="Wed"><b>{row.Wed}</b></TableCell>
              <TableCell style={{backgroundColor : analysts[row.Thu].color, color : analysts[row.Thu].color === '#3804fc' ? 'white' : 'black'}} align="center" key="Thu"><b>{row.Thu}</b></TableCell>
              <TableCell style={{backgroundColor : analysts[row.Fri].color, color : analysts[row.Fri].color === '#3804fc' ? 'white' : 'black'}} align="center" key="Fri"><b>{row.Fri}</b></TableCell>
              <TableCell style={{backgroundColor : analysts[row.Sat].color, color : analysts[row.Sat].color === '#3804fc' ? 'white' : 'black'}} align="center" key="Sat"><b>{row.Sat}</b></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
