import { deleteTodo, getTodo, patchTodo } from "$lib/server/todos.js";
import { json } from "@sveltejs/kit"

const todoExists = async (id: any) => {
    id = Number(id);
    if (isNaN(id)) {
        return json({ error: "Invalid ID" }, { status: 400 });
    }

    const todo = await getTodo(id);

    if (!todo) {
        return json({ error: `TODO with ID ${id} was not found` }, { status: 404 })
    }

    return todo;
}

export const GET = async ({ params }) => {
    const todo = await todoExists(params.id);

    if (todo instanceof Response) {
        return todo;
    }

    return json(todo);
}

export const PATCH = async ({ params, request }) => {
    let todo = await todoExists(params.id);

    if (todo instanceof Response) {
        return todo;
    }

    const body = await request.json();
    await patchTodo(todo.id, body);

    return json(todo);
}

export const DELETE = async ({ params }) => {
    let todo = await todoExists(params.id);

    if (todo instanceof Response) {
        return todo;
    }

    await deleteTodo(todo.id);
    return new Response(null, { status: 204 });
}
