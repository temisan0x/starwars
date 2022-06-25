import { Character } from './Characte.type';

export interface CharacterDataTypes {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[]
}