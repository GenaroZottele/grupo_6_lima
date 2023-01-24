--
-- creacion de la base de datos ----
--
DROP DATABASE IF EXISTS limadb;
CREATE DATABASE limadb;
USE limadb;
--
-- Tabla de categorias para los usuarios----
--
/*
DROP TABLE IF EXISTS `user_type`;
*/
CREATE TABLE `user_type` (
`id` int unsigned NOT NULL AUTO_INCREMENT,
`name`varchar(100) COLLATE utf8_unicode_ci NOT NULL,
`created_at` timestamp NULL DEFAULT NULL,
`updated_at` timestamp NULL DEFAULT NULL,
`deleted_at` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Insercion de datos en tabla de categoria de usuarios ----
--
INSERT INTO `user_type` (`name`) VALUES ('Administrador'), ('Cliente');
--
-- Tabla de direcciones de clientes----
--
/*
DROP TABLE IF EXISTS `adress`;
*/
CREATE TABLE `adress` (
`id` int unsigned NOT NULL AUTO_INCREMENT,
`street`varchar(250) COLLATE utf8_unicode_ci NOT NULL,
`floor`varchar(250) COLLATE utf8_unicode_ci NOT NULL,
`office`varchar(250) COLLATE utf8_unicode_ci NOT NULL,
`created_at` timestamp NULL DEFAULT NULL,
`updated_at` timestamp NULL DEFAULT NULL,
`deleted_at` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Insercion de datos en tabla de direcciones ----
--
INSERT INTO `adress` (`street`,`floor`,`office`) VALUES ('Av. 9 de Julio 100', 'Piso 5 Depto A', 'Oficina Afip');
--
-- creacion de la tabla usuarios ----
--
/*
DROP TABLE IF EXISTS `users`;
*/
CREATE TABLE `users` (
`id` int unsigned NOT NULL AUTO_INCREMENT,
`full_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
`email`varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
`password`varchar(250) COLLATE utf8_unicode_ci NOT NULL, -- CONSULTAR TIPO DE DATO PARA CIFRAR LA CONTRASEÑA
`phone`int(20) unsigned NOT NULL,
`adress_id`int(99) unsigned NOT NULL,
`user_type_id` int(10) unsigned NOT NULL,
`avatar`  varchar(250) NULL,
`created_at` timestamp NULL DEFAULT NULL,
`updated_at` timestamp NULL DEFAULT NULL,
`deleted_at` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `users_user_type_id_foreign` (`user_type_id`),
CONSTRAINT `users_user_type_id_foreign` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`),
KEY `users_adress_id_foreign` (`adress_id`),
CONSTRAINT `users_adress_id_foreign` FOREIGN KEY (`adress_id`) REFERENCES `adress` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Insercion de datos en tabla de direcciones ----
--
INSERT INTO `users` (`full_name`,`email`,`password`,`phone`,`adress_id`,`user_type_id`,`avatar`) VALUES ('Juan Perez', 'jperez@gmail.com', '123456','156661235',1,2,'\Clientes\foto.jpg');
--
-- Creacion de la tabla de productos
--
/*
DROP TABLE IF EXISTS `products`;
*/
CREATE TABLE `products` (
`id` int unsigned NOT NULL AUTO_INCREMENT,
`name`varchar(250) COLLATE utf8_unicode_ci NOT NULL,
`price` float unsigned NOT NULL,
`discount` int(100) unsigned NOT NULL,
`description`varchar(6500) COLLATE utf8mb4_unicode_ci NOT NULL,
`image`varchar(250) COLLATE utf8_unicode_ci NOT NULL,
`status`char(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'A', -- (A) ACTIVE OR (I) INACTIVE 
`created_at` timestamp NULL DEFAULT NULL,
`updated_at` timestamp NULL DEFAULT NULL,
`deleted_at` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Insertar info de 1 producto ----
--
INSERT INTO `products` (`name`,`price`,`discount`,`description`,`image`) VALUES ('Clásica', '850', '10', 'Base: Mix de verdes. Aderezo: Ranch. Ingredientes: Pollo, huevo, zanahoria, queso sardo rayado, tomates cherrys.' , '\Productos\EnsaladaClasica.jpg');
INSERT INTO `products` (`name`,`price`,`discount`,`description`,`image`) VALUES ('Cala', '850', '10', 'Base: Rúcula y fideos(penne rigatti). Aderezo: Mostaza y miel. Ingredientes: Pollo, tomates secos, nueces, queso azul.' , '\Productos\EnsaladaCala.jpg');
--
-- Insertar tabla pedidos cabecera
--
/*
DROP TABLE IF EXISTS `order`;
*/
CREATE TABLE `order` (
`id` int unsigned NOT NULL AUTO_INCREMENT,
`user_id`int(10) unsigned NOT NULL,
`order_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`comment`varchar(6500) COLLATE utf8mb4_unicode_ci NULL,
`total`float unsigned NOT NULL,
`created_at` timestamp NULL DEFAULT NULL,
`updated_at` timestamp NULL DEFAULT NULL,
`deleted_at` timestamp NULL DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `order_user_id_foreign` (`user_id`),
CONSTRAINT `order_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
/*INSERT INTO `order` (`user_id`,`comment`,`total`) VALUES (1,'Sin lechuga',850);*/
--
-- Insertar tabla pedidos detalles
--
/*
DROP TABLE IF EXISTS `order_detail`;
*/
CREATE TABLE `order_detail` (
`order_id` int unsigned NOT NULL,
`product_id` int unsigned NOT NULL,
`price` float unsigned NOT NULL,
`quantity` int unsigned NOT NULL,
`created_at` timestamp NULL DEFAULT NULL,
`updated_at` timestamp NULL DEFAULT NULL,
`deleted_at` timestamp NULL DEFAULT NULL,
KEY `order_id_foreign` (`order_id`),
CONSTRAINT `order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
/*INSERT INTO `order_detail` (`order_id`,`product_id`,`price`,`quantity`) VALUES (1,2,850,1);*/
