export default class Todo {
    constructor(
        public id: number,
        public title: string,
        public isCompleted: boolean = false,
        public dueDate: string | null = null,
    ) {}
}
