import { Person, Date } from './type-alias';

type Campus = 'SA' | 'SBC';
type Status = 'presente' | 'ausente' | 'afastado';
type StatusCode = 200 | 404 | 500;

const sede: Campus = 'SA';
const situacao: Status = 'presente';
const code: StatusCode = 200;

// intersection types
type Student = Person & {
    registration: number;
    admission: Date;
};

const student = {
    name: 'John Doe',
    age: 24,
    registration: 123456,
    admission: {
        day: 1,
        month: 3,
        year: 2021
    }
};


type BasicConfig = {
    theme: "light" | "dark";
    language: "en" | "es";
};

type AdvancedConfig = {
    debugMode: boolean;
    logLevel: "info" | "warn" | "error";
};

type FullConfig = BasicConfig & AdvancedConfig;

const config: FullConfig = {
    theme: "dark",
    language: "en",
    debugMode: true,
    logLevel: "info"
};

export {}