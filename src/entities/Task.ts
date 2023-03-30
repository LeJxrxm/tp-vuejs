import {Status} from "@/entities/Status";

export type Task = {
    id: number,
    title: string,
    description: string,
    status_id: number,
    startDate: Date,
    endDate: Date,
    status: Status
};
