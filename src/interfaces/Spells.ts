export interface Spells{
    spell: Spell[];
}
export interface Spell{
    name: string;
    source: string;
    level: number;
    school: string;
    ritual: boolean;
    casting_time: string;
    range: string;
    components: string;
    duration: Duration;
    description: string;
    higher_level?: string;
    tables?: Tables;
    classes: string[];
}
interface Duration{
    time: string;
    concentration: boolean;
}
interface Tables{
    header: string[];
    rows: string[][];
}
export interface Query{
    nome?:string,
    classe?:string,
    action?:string,
    concentration?: boolean | string,
    ritual?: boolean | string,
    level?: number | string,
    school?: string,
    source?: string
}