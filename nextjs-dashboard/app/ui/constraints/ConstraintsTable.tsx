'use client';
import TableContainer from '@mui/material/TableContainer';
import  TableHead  from '@mui/material/TableHead';
import  TableRow  from '@mui/material/TableRow';
import  TableCell  from '@mui/material/TableCell';
import  TableBody from '@mui/material/TableBody';
import  Paper  from '@mui/material/Paper';
import columns from '@/app/lib/shiftData/columns';
import shifts from '@/app/lib/shiftData/shiftsCurrent';
import days from '@/app/lib/shiftData/daysColumns';
import template from '@/app/lib/shiftData/shiftsTemplate';
import { Table } from '@mui/material';
import { Analyst } from '@/app/lib/analysts';
import LockConstraintsIcon from '../dashboard/LockConstraintsIcon';

function constraintsCount(analysts: Analyst[], day: string, shift: string) {
    let constraintsNum = 0;
    analysts.forEach(analyst => {
        analyst.constraints.forEach(constraint => {
            constraintsNum += (constraint.day === day && shift.includes(constraint.shift)) ? 1 : 0;
        })
    });
    return constraintsNum;
}

export function ConstraintsTable({analysts,} : {analysts: Analyst[]}){
    return (
        <TableContainer>
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
            {template.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {analysts.map(analyst => {
                    return (
                        <>
                            <TableCell sx={{border: 1, borderColor: '#e5e7eb'}} align="center" key={row.name}><b>{row.name}</b></TableCell>
                            <TableCell sx={{border: 1, borderColor: '#e5e7eb'}} style={{backgroundColor: (constraintsCount([analyst], 'Sun', row.name) === 0) ? 'white' : '#e5e7eb'}} align="center" key="Sun">{(constraintsCount([analyst], 'Sun', row.name) !== 0) ? <LockConstraintsIcon /> : ''}</TableCell>
                            <TableCell sx={{border: 1, borderColor: '#e5e7eb'}} style={{backgroundColor: (constraintsCount([analyst], 'Mon', row.name) === 0) ? 'white' : '#e5e7eb'}} align="center" key="Mon">{(constraintsCount([analyst], 'Mon', row.name) !== 0) ? <LockConstraintsIcon /> : ''}</TableCell>
                            <TableCell sx={{border: 1, borderColor: '#e5e7eb'}} style={{backgroundColor: (constraintsCount([analyst], 'Tue', row.name) === 0) ? 'white' : '#e5e7eb'}} align="center" key="Tue">{(constraintsCount([analyst], 'Tue', row.name) !== 0) ? <LockConstraintsIcon /> : ''}</TableCell>
                            <TableCell sx={{border: 1, borderColor: '#e5e7eb'}} style={{backgroundColor: (constraintsCount([analyst], 'Wed', row.name) === 0) ? 'white' : '#e5e7eb'}} align="center" key="Wed">{(constraintsCount([analyst], 'Wed', row.name) !== 0) ? <LockConstraintsIcon /> : ''}</TableCell>
                            <TableCell sx={{border: 1, borderColor: '#e5e7eb'}} style={{backgroundColor: (constraintsCount([analyst], 'Thu', row.name) === 0) ? 'white' : '#e5e7eb'}} align="center" key="Thu">{(constraintsCount([analyst], 'Thu', row.name) !== 0) ? <LockConstraintsIcon /> : ''}</TableCell>
                            <TableCell sx={{border: 1, borderColor: '#e5e7eb'}} style={{backgroundColor: (constraintsCount([analyst], 'Fri', row.name) === 0) ? 'white' : '#e5e7eb'}} align="center" key="Fri">{(constraintsCount([analyst], 'Fri', row.name) !== 0) ? <LockConstraintsIcon /> : ''}</TableCell>
                            <TableCell sx={{border: 1, borderColor: '#e5e7eb'}} style={{backgroundColor: (constraintsCount([analyst], 'Sat', row.name) === 0) ? 'white' : '#e5e7eb'}} align="center" key="Sat">{(constraintsCount([analyst], 'Sat', row.name) !== 0) ? <LockConstraintsIcon /> : ''}</TableCell>
                        </>
                    );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}