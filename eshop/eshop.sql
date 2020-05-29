-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 12, 2020 at 05:09 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created`, `modified`) VALUES
(1, 'iPhone', '0000-00-00 00:00:00', '2020-05-07 15:33:54'),
(2, 'SAMSUNG', '0000-00-00 00:00:00', '2020-05-07 15:33:54'),
(3, 'Asus', '0000-00-00 00:00:00', '2020-05-07 15:33:54'),
(6, 'Philips', '0000-00-00 00:00:00', '2020-05-07 15:33:54');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(12) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `price` int(8) NOT NULL,
  `category_id` int(10) NOT NULL,
  `created` datetime NOT NULL,
  `modfied` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category_id`, `created`, `modfied`) VALUES
(1, 'iPhone 6', 'Old but works fine.', 100, 1, '0000-00-00 00:00:00', '2020-05-07 15:29:00'),
(2, 'Samsung S20', 'New best camera phone', 1200, 2, '0000-00-00 00:00:00', '2020-05-07 15:29:00'),
(3, 'asdasdasd', 'dfgdfg', 50, 3, '2020-05-08 17:54:22', '2020-05-08 15:54:22'),
(4, 'sdfsf', 'dfgdfg', 2147483647, 6, '2020-05-08 17:55:09', '2020-05-08 15:55:09'),
(5, 'sdfsf', 'dfgdfg', 2147483647, 6, '2020-05-08 18:03:43', '2020-05-08 16:03:43'),
(6, 'asdas', 'fgh', 888, 1, '2020-05-08 18:09:22', '2020-05-08 16:09:22'),
(7, 'iPhone X', 'dfgdfgdf', 2147483647, 1, '2020-05-08 18:09:47', '2020-05-08 16:09:47'),
(8, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:41', '2020-05-08 16:38:41'),
(9, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:47', '2020-05-08 16:38:47'),
(10, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:48', '2020-05-08 16:38:48'),
(11, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:49', '2020-05-08 16:38:49'),
(12, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:49', '2020-05-08 16:38:49'),
(13, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:50', '2020-05-08 16:38:50'),
(14, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:50', '2020-05-08 16:38:50'),
(15, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:50', '2020-05-08 16:38:50'),
(16, 'asdasdas', 'dgfgh', 8558, 1, '2020-05-08 18:38:51', '2020-05-08 16:38:51'),
(17, 'asdasdas', 'dgfgh', 8558, 5, '2020-05-08 18:38:52', '2020-05-08 16:38:52'),
(18, 'asdasdas', 'dgfgh', 8558, 4, '2020-05-08 18:38:52', '2020-05-08 16:38:52'),
(19, 'ssssssssssss', 'dgfgh', 8558, 1, '2020-05-08 18:38:53', '2020-05-08 16:38:53'),
(20, 'asdas', 'asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ', 0, 3, '2020-05-08 19:24:17', '2020-05-08 17:24:17'),
(21, 'dfgdfg', 'dfgdfgdfg', 0, 0, '2020-05-11 17:07:52', '2020-05-11 15:07:52'),
(22, 'dfgdfg', 'dfgdfgdfg', 0, 0, '2020-05-11 17:07:52', '2020-05-11 15:07:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
