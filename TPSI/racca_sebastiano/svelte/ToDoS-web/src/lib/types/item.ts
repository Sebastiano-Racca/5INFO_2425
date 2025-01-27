export enum Priority {
	BASSA,
	MEDIA,
	ALTA
}

export interface Item {
	id: number;
	done: boolean;
	description: string;
	priority: Priority;
}
