-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "priority" TEXT NOT NULL
);
