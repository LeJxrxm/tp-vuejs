import {defineComponent, Ref} from "vue";
import {mapGetters} from "vuex";
import {Task} from "@/entities/Task";
import {Status} from "@/entities/Status";
import TaskKanban from "@/components/TaskKanban/TaskKanban.vue";
import Calendar from "@/components/Calendar/Calendar.vue";
import {CalendarApi} from "@fullcalendar/core";
import {CalendarContext} from "@fullcalendar/core/internal";

export default defineComponent({
    name: 'Index',
    components: {
        TaskKanban,
        Calendar
    },
    computed: {
        ...mapGetters(['getTasks'])
    },

    data(): {
        tasks: Array<Task>,
        isEditing: boolean,
        statuses: Array<Status>,
        taskData: Task,
        isModalOpened: boolean,
        editedTask: Task|null,
        currentView: string
    } {
        const statuses = [
            {
                id: 1,
                titre: 'A faire',
                isStarted: false,
                isFinished: false,
                textColor: '#000',
                backgroundColor: '#ececec',
                tasks: []
            },
            {
                id: 2,
                titre: 'En cours',
                isStarted: true,
                isFinished: false,
                textColor: '#fff',
                backgroundColor: '#70b0f6',
                tasks: []
            },
            {
                id: 3,
                titre: 'Terminé',
                isStarted: true,
                isFinished: true,
                textColor: '#fff',
                backgroundColor: '#70f6b0',
                tasks: []
            }
        ];

        return {
            tasks: [],
            isEditing: false,
            taskData: {
                id: 0,
                title: '',
                status_id: 1,
                description: '',
                status: statuses[0] as Status,
                startDate: new Date(),
                endDate: new Date()
            },
            statuses: statuses,
            isModalOpened: false,
            editedTask: null,
            currentView: 'kanban'
        }
    },

    beforeMount() {
        this.tasks = this.getTasks;
    },

    mounted() {
        debugger;
    },

    methods: {
        _createEmptyTask(): Task {
            return {
                id: 0,
                title: '',
                status_id: this.statuses[0].id,
                description: '',
                status: this.statuses[0],
                startDate: new Date(),
                endDate: new Date()
            };
        },

        _resolveTask(id: number): Task {
            return this.tasks.find(task => task.id === id) as Task;
        },

        setupEditTask(id: number): void {
            this.taskData = this._resolveTask(id);
            this.isEditing = true;
            this.isModalOpened = true;
        },

        setupCreateTask(): void {
            this.taskData = this._createEmptyTask();
            this.isEditing = false;
            this.isModalOpened = true;
        },

        getTasksByStatus(status: Status): Array<Task> {
            return this.tasks.filter(task => task.status_id === status.id);
        },

        submitTaskForm(): void {
            this.taskData.status = this.statuses.find(status => status.id === this.taskData.status_id) as Status;
            this.taskData.startDate = new Date(this.taskData.startDate);
            this.taskData.endDate = new Date(this.taskData.endDate);
            if(this.isEditing) {
                console.log(this.taskData);
            }else{
                this.taskData.id = this.tasks.length + 1;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                this.$store.commit('addTask', this.taskData);
            }

            this.tasks.sort((a: Task, b: Task) => a.startDate > b.startDate ? 1 : -1);
            this.isModalOpened = false;
        }
    },
    watch: {
        currentView() {
            const calendarApi = (this.$refs.calendar as Ref<CalendarApi>);
        }
    }
})
