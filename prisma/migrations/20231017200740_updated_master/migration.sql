/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `coalitions` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Coalition` VARCHAR(255) NOT NULL,
    `IDContact` INTEGER NULL,

    INDEX `IDContact`(`IDContact`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacts` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(255) NULL,
    `LastName` VARCHAR(255) NULL,
    `Organization` VARCHAR(255) NULL,
    `LastContact` DATE NULL,
    `LastContactType` VARCHAR(255) NULL,
    `NextContact` DATE NULL,
    `NextContactType` VARCHAR(255) NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `IDContact` INTEGER NULL,
    `Email` VARCHAR(255) NULL,

    INDEX `IDContact`(`IDContact`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `phone` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `IDContact` INTEGER NULL,
    `phone` VARCHAR(15) NULL,

    INDEX `IDContact`(`IDContact`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coalitions` ADD CONSTRAINT `coalitions_ibfk_1` FOREIGN KEY (`IDContact`) REFERENCES `contacts`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `email` ADD CONSTRAINT `email_ibfk_1` FOREIGN KEY (`IDContact`) REFERENCES `contacts`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `phone` ADD CONSTRAINT `phone_ibfk_1` FOREIGN KEY (`IDContact`) REFERENCES `contacts`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
