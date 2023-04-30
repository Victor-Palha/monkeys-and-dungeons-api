export interface SpellsReturn {
    id: string;
    name: string;
    source: string;
    level: number;
    ritual: boolean;
    concentration: boolean;
    classes: string[];
    school: string;
}

export interface Spells{
    id: string
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
    subclasses: string[];
}
interface Duration{
    time: string;
    concentration: boolean;
}
interface Tables{
    header: string[];
    rows: string[][];
}
