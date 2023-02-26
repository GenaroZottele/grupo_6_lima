-- creacion de la base de datos ----
--
DROP DATABASE IF EXISTS `limadb`;
CREATE DATABASE `limadb`;
USE `limadb`;
--
-- Tabla de categorias para los usuarios----
--
/*
DROP TABLE IF EXISTS user_type;
*/
CREATE TABLE `user_type` (
id int unsigned NOT NULL AUTO_INCREMENT,
name varchar(100) COLLATE utf8_unicode_ci NOT NULL,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
deleted_at timestamp NULL DEFAULT NULL,
PRIMARY KEY (id)
)ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Tabla de direcciones de clientes----
--
/*
DROP TABLE IF EXISTS adress;
*/
CREATE TABLE `adress` (
id int unsigned NOT NULL AUTO_INCREMENT,
street varchar(250) COLLATE utf8_unicode_ci NOT NULL,
floor varchar(250) COLLATE utf8_unicode_ci NOT NULL,
office varchar(250) COLLATE utf8_unicode_ci NOT NULL,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
deleted_at timestamp NULL DEFAULT NULL,
PRIMARY KEY (id)
)ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- creacion de la tabla usuarios ----
--
/*
DROP TABLE IF EXISTS users;
*/
CREATE TABLE `users` (
id int unsigned NOT NULL AUTO_INCREMENT,
full_name varchar(200) COLLATE utf8_unicode_ci NOT NULL,
email varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
password varchar(250) COLLATE utf8_unicode_ci NOT NULL, -- CONSULTAR TIPO DE DATO PARA CIFRAR LA CONTRASEÑA
phone int(20) unsigned NOT NULL,
adress_id int(99) unsigned NOT NULL,
user_type_id int(10) unsigned NOT NULL,
avatar varchar(250) NULL,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
deleted_at timestamp NULL DEFAULT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Creacion de la tabla de productos
--
/*
DROP TABLE IF EXISTS products;
*/
CREATE TABLE `products` (
id int unsigned NOT NULL AUTO_INCREMENT,
amount int(1) unsigned NOT NULL DEFAULT 1,
name varchar(250) COLLATE utf8_unicode_ci NOT NULL,
price float unsigned NOT NULL,
discount int(100) unsigned NOT NULL,
description varchar(6500) COLLATE utf8mb4_unicode_ci NOT NULL,
image varchar(250) COLLATE utf8_unicode_ci NOT NULL,
status char(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'A', -- (A) ACTIVE OR (I) INACTIVE
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
deleted_at timestamp NULL DEFAULT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Creacion de la tabla de order
--
/*
DROP TABLE IF EXISTS order;
*/
CREATE TABLE `order` (
id int unsigned NOT NULL AUTO_INCREMENT,
user_id int(10) unsigned NOT NULL,
order_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
comment varchar(6500) COLLATE utf8mb4_unicode_ci NULL,
total float unsigned NOT NULL,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
deleted_at timestamp NULL DEFAULT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
-- Creacion de la tabla de order_detail
--
/*
DROP TABLE IF EXISTS order_detail;
*/
CREATE TABLE `order_detail` (
order_id int unsigned NOT NULL,
product_id int unsigned NOT NULL,
price float unsigned NOT NULL,
quantity int unsigned NOT NULL,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
deleted_at timestamp NULL DEFAULT NULL,
KEY order_id_foreign (order_id)
) ENGINE=InnoDB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
--
