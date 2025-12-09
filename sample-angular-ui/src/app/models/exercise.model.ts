import { WeightRecord } from "./weight-record.model";

export interface Exercise {
    id: number;
    muscle: string;
    description: string;
    repetitions: number;
    sets: number;
    weight: WeightRecord[];
}