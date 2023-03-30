import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import {Task} from "@/entities/Task";
import {Status} from "@/entities/Status";
export default defineComponent({
    name: 'Index',
    computed: {
        ...mapGetters(['getTasks'])
    },

    data(): {
        tasks: Array<Task>,
        isEditing: boolean,
        taskData: Task
    } {
        const tasks = this.getTasks();

        const statuses = {
            TODO: ({
                id: 1,
                titre: 'A faire',
                isStarted: false,
                isFinished: false,
                textColor: '#000',
                backgroundColor: '#ececec',
            } as Status),
            IN_PROGRESS: ({
                id: 2,
                titre: 'En cours',
                isStarted: true,
                isFinished: false,
                textColor: '#fff',
                backgroundColor: '#70b0f6',
            } as Status),
            DONE: ({
                id: 3,
                titre: 'Terminé',
                isStarted: true,
                isFinished: true,
                textColor: '#fff',
                backgroundColor: '#70f6b0',
            } as Status)
        }

        return {
            tasks: tasks,
            isEditing: false,
            taskData: {
                id: 0,
                title: '',
                description: '',
                statut: statuses.TODO,
                startDate: new Date(),
                endDate: new Date()
            }
        }
    }
})
