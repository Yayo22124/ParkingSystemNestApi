-- CreateTable
CREATE TABLE `Employees` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `token` TEXT NULL,

    UNIQUE INDEX `Employees_id_key`(`id`),
    UNIQUE INDEX `Employees_email_key`(`email`),
    UNIQUE INDEX `Employees_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clients` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,

    UNIQUE INDEX `Clients_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicles` (
    `id` VARCHAR(191) NOT NULL,
    `plate` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `owner` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Vehicles_id_key`(`id`),
    UNIQUE INDEX `Vehicles_plate_key`(`plate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Records` (
    `id` VARCHAR(191) NOT NULL,
    `entryDate` DATETIME NOT NULL DEFAULT current_timestamp,
    `exitDate` DATETIME NULL,
    `vehicleId` VARCHAR(191) NOT NULL,
    `feeId` VARCHAR(191) NOT NULL,
    `slotId` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Records_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Slots` (
    `id` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL DEFAULT 'Without description',
    `status` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Slots_id_key`(`id`),
    UNIQUE INDEX `Slots_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fees` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cost` DECIMAL(10, 2) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Fees_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photoresistors` (
    `id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT current_timestamp,

    UNIQUE INDEX `Photoresistors_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HumiditySensors` (
    `id` VARCHAR(191) NOT NULL,
    `temperature` DECIMAL(10, 2) NOT NULL,
    `humidity` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp,

    UNIQUE INDEX `HumiditySensors_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProximitySensor` (
    `id` VARCHAR(191) NOT NULL,
    `distance` DECIMAL(10, 2) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `registeredAt` DATETIME NOT NULL DEFAULT current_timestamp,

    UNIQUE INDEX `ProximitySensor_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vehicles` ADD CONSTRAINT `Vehicles_owner_fkey` FOREIGN KEY (`owner`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Records` ADD CONSTRAINT `Records_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Records` ADD CONSTRAINT `Records_feeId_fkey` FOREIGN KEY (`feeId`) REFERENCES `Fees`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Records` ADD CONSTRAINT `Records_slotId_fkey` FOREIGN KEY (`slotId`) REFERENCES `Slots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
