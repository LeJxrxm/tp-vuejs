import {Status} from "@/entities/Status";

export type Task = {
    id: number,
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    statut: Status
};
