import {Task} from "@/entities/Task";

export type Status = {
    id: number,
    titre: string,
    textColor: string,
    backgroundColor: string,
    isStarted: boolean,
    isFinished: boolean,
    tasks: Array<Task>
}
