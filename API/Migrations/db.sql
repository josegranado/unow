CREATE DATABASE IF NOT EXISTS medical;
USE medical;
CREATE TABLE IF NOT EXISTS `users`(
    `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(256) NULL,
    `birthday` DATE NULL,
    `role` INTEGER(11) NULL, /* 1 MEDIC. 2 PACIENTE */
    `api_token` VARCHAR(256) NULL,
    `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `deleted` INTEGER(11) NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `appointments`(
    `id` INTEGER(11) NOT NULL AUTO_INCREMENT,
    `medic_id` VARCHAR(256) NULL,
    `patient_id` VARCHAR(256) NULL,
    `is_approved` INTEGER(11) NULL,
    `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `deleted` INTEGER(11) NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `users` (`id`, `full_name`, `birthday`, `role`, `api_token`, `created_at`, `updated_at`, `deleted`) VALUES (NULL, 'Fina Luis', '2021-05-07', '1', 'KS2hOKPvS5w8jESAOcfj', current_timestamp(), current_timestamp(), '0');
INSERT INTO `users` (`id`, `full_name`, `birthday`, `role`, `api_token`, `created_at`, `updated_at`, `deleted`) VALUES (NULL, 'Jose Granado', '2022-02-02', '2', 'XOAyb8MlfpXc5BPwbm99', current_timestamp(), current_timestamp(), '0');