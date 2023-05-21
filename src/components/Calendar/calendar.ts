import {defineComponent} from "vue";

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import {Task} from "@/entities/Task";



export default defineComponent({
    name: 'Calendar',
    components: {
        FullCalendar
    },
    data() {

        /*const events = [];
        this.tasks.forEach((task: Task) => {
            events.push({
                title: task.title,
                date: task.startDate,
                backgroundColor: task.status.backgroundColor,
            });
        });*/

        return {
            calendarOptions: {
                height: parent,
                lang: 'fr',
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                events: [
                    { title: 'event 1', date: '2023-05-01' },
                    { title: 'event 2', date: '2023-05-02' }
                ]
            }
        }
    },

    methods: {
        redrawCalendar(): void{
            debugger;
        }
    },
})
