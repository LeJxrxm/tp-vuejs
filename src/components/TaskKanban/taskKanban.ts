import {defineComponent} from "vue";
import {Task} from "@/entities/Task";

export default defineComponent({
   name: "TaskKanban",
    props: {
        /**
         * @type Task
         */
        task: null
    },

    methods: {
        edit(): void {
            this.$emit('edit', this.task.id);
        }
    }
});
