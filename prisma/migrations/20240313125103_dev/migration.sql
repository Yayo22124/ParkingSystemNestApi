/*
  Warnings:

  - You are about to alter the column `registeredAt` on the `HumiditySensors` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `createdAt` on the `Photoresistors` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `entryDate` on the `Records` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `exitDate` on the `Records` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `FanActuator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProximitySensor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Records_feeId_fkey` ON `Records`;

-- DropIndex
DROP INDEX `Records_slotId_fkey` ON `Records`;

-- DropIndex
DROP INDEX `Records_vehicleId_fkey` ON `Records`;

-- DropIndex
DROP INDEX `Vehicles_owner_fkey` ON `Vehicles`;

-- AlterTable
ALTER TABLE `HumiditySensors` MODIFY `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp;

-- AlterTable
ALTER TABLE `Photoresistors` MODIFY `createdAt` DATETIME NOT NULL DEFAULT current_timestamp;

-- AlterTable
ALTER TABLE `Records` MODIFY `entryDate` DATETIME NOT NULL DEFAULT current_timestamp,
    MODIFY `exitDate` DATETIME NULL;

-- DropTable
DROP TABLE `FanActuator`;

-- DropTable
DROP TABLE `ProximitySensor`;

-- CreateTable
CREATE TABLE `ProximitySensors` (
    `id` VARCHAR(191) NOT NULL,
    `distance` DECIMAL(10, 2) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp,

    UNIQUE INDEX `ProximitySensors_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FanActuators` (
    `id` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp,

    UNIQUE INDEX `FanActuators_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
