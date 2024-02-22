'use client';
import ShiftsTable from '@/app/ui/shifts/ShiftsTable';
import Link from 'next/link';
import clsx from 'clsx';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import columns from '@/app/lib/shiftData/columns';
import days from '@/app/lib/shiftData/daysColumns';
import shifts from '@/app/lib/shiftData/shiftsCurrent';
import { createRequire } from 'module';
import * as Excel from 'exceljs';
import analysts from '@/app/lib/analysts';

function toExcel() {
  const workbook = new Excel.Workbook();
  workbook.creator = 'IR';
  const sheet = workbook.addWorksheet('My Sheet');

  sheet.columns = [
    {
      header: columns[0].Header,
      key: 'date_range',
      width: 20,
    },
    {
      header: columns[1].Header,
      key: 'day1',
      width: 20,
    },
    {
      header: columns[2].Header,
      key: 'day2',
      width: 20,
    },
    {
      header: columns[3].Header,
      key: 'day3',
      width: 20,
    },
    {
      header: columns[4].Header,
      key: 'day4',
      width: 20,
    },
    {
      header: columns[5].Header,
      key: 'day5',
      width: 20,
    },
    {
      header: columns[6].Header,
      key: 'day6',
      width: 20,
    },
    {
      header: columns[7].Header,
      key: 'day7',
      width: 20,
    },
  ];

  sheet.addRow({
    date_range: '',
    day1: 'Sun',
    day2: 'Mon',
    day3: 'Tue',
    day4: 'Wed',
    day5: 'Thu',
    day6: 'Fri',
    day7: 'Sat',
  });

  shifts.map((shift) => {
    sheet.addRow({
      date_range: shift.name,
      day1: shift.Sun,
      day2: shift.Mon,
      day3: shift.Tue,
      day4: shift.Wed,
      day5: shift.Thu,
      day6: shift.Fri,
      day7: shift.Sat,
    });
  });

  sheet.eachRow((row) => {
    row.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {
          argb:
            (cell.value as string) in analysts
              ? analysts[cell.value as string].color.replace('#', '')
              : 'FFFFFF',
        },
        /*bgColor: {argb:(cell.value as string) in analysts ? analysts[(cell.value as string)].color : '#FFFFFF'}*/
      };

      cell.font = {
        bold: true,
        color: {argb: (cell.value as string)!== 'Idan' ? '000000' : 'FFFFFF'}
      }
    });
  });

  let url = '';
  workbook.xlsx.writeBuffer().then((data: any) => {
    const blob = new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheet.sheet',
    });
    const anchor = document.createElement('a');
    url = URL.createObjectURL(blob);
    
    anchor.href = url;
    anchor.download = 'IR Shifts.xlsx';
    anchor.click();
    URL.revokeObjectURL(url);
  });
  //return url;
}

function toCSV() {
  let CSV = 'data:text/csv;charset=utf-8,';

  columns.map((column) => {
    CSV += column.Header + ',';
  });

  CSV += '\n';

  days.map((day) => {
    CSV += day.Header + ',';
  });

  CSV += '\n';

  shifts.map((shift) => {
    let encodedName = '';
    for (let i = 0; i < shift.name.length; i++) {
      encodedName += '\\u' + shift.name.charCodeAt(i);
    }
    CSV += encodedName + ',';
    CSV += shift.Sun + ',';
    CSV += shift.Mon + ',';
    CSV += shift.Tue + ',';
    CSV += shift.Wed + ',';
    CSV += shift.Thu + ',';
    CSV += shift.Fri + ',';
    CSV += shift.Sat + ',';
    CSV += '\n';
  });

  return encodeURI(CSV);
}

export default function Page() {
  return (
    <>
      <ShiftsTable />
      <Link
        id="download-shifts-csv"
        key="download"
        href=""
        onClick={toExcel}
        download='download.xlsx'
        className={clsx(
          'padding-top-20 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
        )}
        style={{
          marginTop: '5px',
          width: '10vw',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <ArrowDownTrayIcon className="w-6" />
        <p className="hidden md:block">Download CSV</p>
      </Link>
    </>
  );
}
