export interface Column {
    Header: string;
    accessor: string;
}

const columns: Column[] = [
    {
        Header : '18 - 24',
        accessor : 'date_range'
    },
    {
        Header : '18',
        accessor : 'day1'
    },
    {
        Header : '19',
        accessor : 'day2'
    },
    {
        Header : '20',
        accessor : 'day3'
    },
    {
        Header : '21',
        accessor : 'day4'
    },
    {
        Header : '22',
        accessor : 'day5'
    },
    {
        Header : '23',
        accessor : 'day6'
    },
    {
        Header : '24',
        accessor : 'day7'
    },
];

export { columns as default };