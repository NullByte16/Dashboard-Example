import { Column } from '@/app/lib/shiftData/columns';

const days : Column[] = [
  {
    Header: '',
    accessor : 'date_range'

  },
  {
    Header: 'Sun',
    accessor : 'day1'
  },
  {
    Header: 'Mon',
    accessor : 'day2'
  },
  {
    Header: 'Tue',
    accessor : 'day3'
  },
  {
    Header: 'Wed',
    accessor : 'day4'
  },
  {
    Header: 'Thu',
    accessor : 'day5'
  },
  {
    Header: 'Fri',
    accessor : 'day6'
  },
  {
    Header: 'Sat',
    accessor : 'day7'
  },
];

export { days as default }
