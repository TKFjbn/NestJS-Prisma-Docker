/*
  Warnings:

  - You are about to drop the column `body` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Note` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Note_title_key";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "body",
DROP COLUMN "createdAt",
DROP COLUMN "title",
DROP COLUMN "updatedAt";
