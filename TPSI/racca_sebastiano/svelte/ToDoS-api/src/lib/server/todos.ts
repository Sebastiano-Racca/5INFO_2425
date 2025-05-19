import type { Prisma } from "@prisma/client";
import prisma from "./prisma";

export const createTodo = (data: Prisma.TodoCreateInput) => prisma.todo.create({ data })

export const getTodos = () => prisma.todo.findMany();

export const getTodo = (id: number) => prisma.todo.findUnique({ where: { id } })

export const deleteTodo = (id: number) => prisma.todo.delete({ where: { id } })

export const patchTodo = (id: number, data: Prisma.TodoUpdateInput) => prisma.todo.update({ where: { id }, data });
