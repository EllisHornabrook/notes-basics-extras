// // ---------- WITHOUT INTERFACE ---------- // //
const showList = (todo: {title: string, text: string}) => {
    console.log(todo.title + ": " + todo.text);
};

const myTodo = {title: 'Clean', text: 'Kitchen'};
showList(myTodo);


// // ---------- WITH INTERFACE ---------- // //
interface Todo {
    title: string;
    text: string;
};

const showList = (todo: Todo) => {
    console.log(todo.title + ": " + todo.text);
};

const myTodo = {title: 'Clean', text: 'Kitchen'};
showList(myTodo);