-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2020 at 08:52 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `omakase`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `Account_id` int(11) NOT NULL,
  `Customer_id` int(11) NOT NULL,
  `Trip_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`Account_id`, `Customer_id`, `Trip_id`) VALUES
(80, 23, 15),
(81, 23, 15);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `Customer_id` int(11) NOT NULL,
  `C_Name` varchar(60) NOT NULL,
  `C_Email` varchar(60) NOT NULL,
  `C_TelNo` varchar(10) NOT NULL,
  `C_Username` varchar(32) NOT NULL,
  `C_Password` varchar(32) NOT NULL,
  `C_Trip_List` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`Customer_id`, `C_Name`, `C_Email`, `C_TelNo`, `C_Username`, `C_Password`, `C_Trip_List`) VALUES
(1, 'admin', 'admin@test.com', '1234567890', 'admin', 'test', ''),
(23, 'test', 'test@test.com', '1234567890', 'test', 'test', '');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `Employee_id` int(11) NOT NULL,
  `Restaurant_id` int(11) NOT NULL,
  `E_title` varchar(20) NOT NULL,
  `E_Salary` int(11) NOT NULL,
  `E_DateOfHire` date NOT NULL,
  `E_Name` varchar(30) NOT NULL,
  `E_Address` text NOT NULL,
  `E_TelNo` varchar(10) NOT NULL,
  `E_Age` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `Restaurant_id` int(11) NOT NULL,
  `R_OwnerName` varchar(30) NOT NULL,
  `R_Location` text NOT NULL,
  `R_TelNo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`Restaurant_id`, `R_OwnerName`, `R_Location`, `R_TelNo`) VALUES
(1, 'Prayut Tung', 'CMU T.Suthep D.Mueng ChiangMai 50200', '1234567890');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `Supplier_id` int(11) NOT NULL,
  `Restaurant_id` int(11) NOT NULL,
  `S_Name` varchar(30) NOT NULL,
  `S_address` longtext NOT NULL,
  `S_TelNo` varchar(10) NOT NULL,
  `S_Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trip_detail`
--

CREATE TABLE `trip_detail` (
  `Trip_id` int(11) NOT NULL,
  `T_name` varchar(200) NOT NULL,
  `T_description` varchar(200) NOT NULL,
  `T_date` date NOT NULL,
  `T_price` float NOT NULL,
  `T_seat` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trip_detail`
--

INSERT INTO `trip_detail` (`Trip_id`, `T_name`, `T_description`, `T_date`, `T_price`, `T_seat`) VALUES
(15, 'Bronze', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor pharetra dictum. In vitae efficitur mi. Nullam lacinia maximus odio ac imperdiet. Aliquam erat volutpat. Proin elementum commodo', '2020-09-26', 2499, 2),
(18, 'Silver', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor pharetra dictum. In vitae efficitur mi. Nullam lacinia maximus odio ac imperdiet. Aliquam erat volutpat. Proin elementum commodo', '2020-09-27', 3499, 0),
(20, 'Gold', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor pharetra dictum. In vitae efficitur mi. Nullam lacinia maximus odio ac imperdiet. Aliquam erat volutpat. Proin elementum commodo', '2020-09-28', 5499, 0),
(21, 'Platinum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor pharetra dictum. In vitae efficitur mi. Nullam lacinia maximus odio ac imperdiet. Aliquam erat volutpat. Proin elementum commodo', '2020-09-30', 7599, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`Account_id`),
  ADD KEY `FK_customer_id2` (`Customer_id`),
  ADD KEY `FK_trip_id` (`Trip_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`Customer_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`Employee_id`),
  ADD KEY `FK_restaurant_id2` (`Restaurant_id`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`Restaurant_id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`Supplier_id`),
  ADD KEY `FK_restaurant_id` (`Restaurant_id`);

--
-- Indexes for table `trip_detail`
--
ALTER TABLE `trip_detail`
  ADD PRIMARY KEY (`Trip_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `Account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `Customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `Employee_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `Supplier_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trip_detail`
--
ALTER TABLE `trip_detail`
  MODIFY `Trip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `FK_customer_id2` FOREIGN KEY (`Customer_id`) REFERENCES `customers` (`Customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_trip_id` FOREIGN KEY (`Trip_id`) REFERENCES `trip_detail` (`Trip_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FK_restaurant_id2` FOREIGN KEY (`Restaurant_id`) REFERENCES `restaurant` (`Restaurant_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `supplier`
--
ALTER TABLE `supplier`
  ADD CONSTRAINT `FK_restaurant_id` FOREIGN KEY (`Restaurant_id`) REFERENCES `restaurant` (`Restaurant_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
