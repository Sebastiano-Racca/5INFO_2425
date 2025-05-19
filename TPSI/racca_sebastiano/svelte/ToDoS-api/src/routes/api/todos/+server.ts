import { createTodo, deleteTodo, getTodos } from '$lib/server/todos.js';
import type { Todo } from '@prisma/client';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
    let res = await getTodos();

    const params = ['priority', 'done'] as (keyof Todo)[];
    params.forEach(param => {
        if(url.searchParams.has(param)) {
            res = res.filter(t => t[param] == url.searchParams.get(param));
        }
    })

    return json(res);
}

export const POST = async ({ request }) => {
    const body = await request.json();
    return json(await createTodo(body));
}
