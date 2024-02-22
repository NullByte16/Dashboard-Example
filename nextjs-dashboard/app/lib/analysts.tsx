import { Constraint } from '@/app/lib/definitions';

export interface Analyst {
    name?: string;
    color: string;
    role: string;
    constraints: Constraint[];
}

const analysts : {[key : string] : Analyst} = {
  'Ezra' : {
    name: 'Ezra',
    color: '#387c3c',
    role: 'Senior Analyst',
    constraints: [
      {
        day: 'Sun',
        shift: 'בוקר'
      }
    ]
  },
  'Yuval' : {
    name: 'Yuval',
    color: '#f89c24',
    role: 'Junior Analyst',
    constraints: []
  },
  'Ariel' :{
    name: 'Ariel',
    color: '#f8bc24',
    role: 'Senior Analyst',
    constraints: []
  },
  'Idan' : {
    name: 'Idan',
    color: '#3804fc',
    role: 'Senior Analyst',
    constraints: []
  },
  'Dana' : {
    name: 'Dana',
    color: '#e89c9c',
    role: 'Senior Analyst',
    constraints: []
  },
  'Oren' : {
    name: 'Oren',
    color: '#b06414',
    role: 'Junior Analyst',
    constraints: []
  },
  'Sapir' : {
    name: 'Sapir',
    color: '#c07ca4',
    role: 'Junior Analyst',
    constraints: []
  },
  'Tal' : {
    name: 'Tal',
    color: '#80a4dc',
    role: 'Junior Analyst',
    constraints: []
  },
  'Talia' : {
    name: 'Talia',
    color: '#e04c8c',
    role: 'Junior Analyst',
    constraints: []
  },
  'Daniel' : {
    name: 'Daniel',
    color: '#c84c2c',
    role: 'Senior Analyst',
    constraints: []
  },
  'Elad' : {
    name: 'Elad',
    color: '#c81c14',
    role: 'Manager',
    constraints: []
  },
  '' : {
    name: undefined,
    color: '#ffffff',
    role: '',
    constraints: []
  }
};

export { analysts as default };
