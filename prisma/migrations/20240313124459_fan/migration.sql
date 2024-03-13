/*
  Warnings:

  - You are about to alter the column `registeredAt` on the `HumiditySensors` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `createdAt` on the `Photoresistors` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `registeredAt` on the `ProximitySensor` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `entryDate` on the `Records` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `exitDate` on the `Records` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `Records` DROP FOREIGN KEY `Records_feeId_fkey`;

-- DropForeignKey
ALTER TABLE `Records` DROP FOREIGN KEY `Records_slotId_fkey`;

-- DropForeignKey
ALTER TABLE `Records` DROP FOREIGN KEY `Records_vehicleId_fkey`;

-- DropForeignKey
ALTER TABLE `Vehicles` DROP FOREIGN KEY `Vehicles_owner_fkey`;

-- AlterTable
ALTER TABLE `HumiditySensors` MODIFY `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp;

-- AlterTable
ALTER TABLE `Photoresistors` MODIFY `createdAt` DATETIME NOT NULL DEFAULT current_timestamp;

-- AlterTable
ALTER TABLE `ProximitySensor` MODIFY `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp;

-- AlterTable
ALTER TABLE `Records` MODIFY `entryDate` DATETIME NOT NULL DEFAULT current_timestamp,
    MODIFY `exitDate` DATETIME NULL;

-- CreateTable
CREATE TABLE `FanActuator` (
    `id` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp,

    UNIQUE INDEX `FanActuator_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
