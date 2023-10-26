/*
  Warnings:

  - The primary key for the `email` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `email` table. All the data in the column will be lost.
  - The primary key for the `phone` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `phone` table. All the data in the column will be lost.
  - Made the column `Email` on table `email` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `phone` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `email` DROP PRIMARY KEY,
    DROP COLUMN `ID`,
    MODIFY `Email` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`Email`);

-- AlterTable
ALTER TABLE `phone` DROP PRIMARY KEY,
    DROP COLUMN `ID`,
    MODIFY `phone` VARCHAR(15) NOT NULL,
    ADD PRIMARY KEY (`phone`);
