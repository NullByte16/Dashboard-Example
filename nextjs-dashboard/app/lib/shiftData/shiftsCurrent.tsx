export interface Row {
    name : string;
    Sun: string;
    Mon: string;
    Tue: string;
    Wed: string;
    Thu: string;
    Fri: string;
    Sat: string;
}

const shifts : Row[] = [
    {name : "בוקר 8:30", Sun : "Yuval", Mon : "Oren", Tue : "Yuval", Wed : "Ariel", Thu : "Tal", Fri : "Talia", Sat : "Ezra"},
    {name : "בוקר", Sun : "Ariel", Mon : "Talia", Tue : "Sapir", Wed : "Sapir", Thu : "Oren", Fri : "Oren", Sat : ""},
    {name : "בוקר 10:00", Sun : "", Mon : "Idan", Tue : "", Wed : "", Thu : "Elad", Fri : "", Sat : ""},
    {name : "אמצע", Sun : "", Mon : "", Tue : "Daniel", Wed : "Daniel", Thu : "", Fri : "Tal", Sat : ""},
    {name : "1ערב", Sun : "Idan", Mon : "Ariel", Tue : "Oren", Wed : "Oren", Thu : "Sapir", Fri : "Yuval", Sat : "Tal"},
    {name : "2ערב", Sun : "", Mon : "Sapir", Tue : "Talia", Wed : "", Thu : "", Fri : "", Sat : ""},
    {name : "3ערב", Sun : "", Mon : "Tal", Tue : "", Wed : "Talia", Thu : "Ariel", Fri : "", Sat : ""},
    {name : "לילה", Sun : "Dana", Mon : "Ezra", Tue : "Tal", Wed : "Yuval", Thu : "Daniel", Fri : "Ariel", Sat : "Talia"},
];

export { shifts as default }