/*
  Warnings:

  - You are about to alter the column `registeredAt` on the `HumiditySensors` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `createdAt` on the `Photoresistors` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `registeredAt` on the `ProximitySensor` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `entryDate` on the `Records` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `exitDate` on the `Records` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `HumiditySensors` MODIFY `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp;

-- AlterTable
ALTER TABLE `Photoresistors` MODIFY `createdAt` DATETIME NOT NULL DEFAULT current_timestamp;

-- AlterTable
ALTER TABLE `ProximitySensor` MODIFY `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp;

-- AlterTable
ALTER TABLE `Records` MODIFY `entryDate` DATETIME NOT NULL DEFAULT current_timestamp,
    MODIFY `exitDate` DATETIME NULL;
