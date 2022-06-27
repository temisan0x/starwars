import { Character } from './Character.type';

export interface CharacterDataTypes {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[]
}