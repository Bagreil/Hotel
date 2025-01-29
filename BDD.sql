-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hotel
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastanme` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room_id_idx` (`room_id`),
  CONSTRAINT `room_id` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collaborators`
--

DROP TABLE IF EXISTS `collaborators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collaborators` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `functions` varchar(255) DEFAULT NULL,
  `hotel_id` int DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_id_3_idx` (`hotel_id`),
  CONSTRAINT `hotel_id_3` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collaborators`
--

LOCK TABLES `collaborators` WRITE;
/*!40000 ALTER TABLE `collaborators` DISABLE KEYS */;
INSERT INTO `collaborators` VALUES (1,'Dupont','Jean','jean.dupont@example.com','0612345678','Manager',1,'admin','hashed_password1','2025-01-29 11:25:01','2025-01-29 11:25:01'),(2,'Martin','Sophie','sophie.martin@example.com','0623456789','Receptionist',2,'user','hashed_password2','2025-01-29 11:25:01','2025-01-29 11:25:01'),(3,'Lemoine','Paul','paul.lemoine@example.com','0634567890','Housekeeper',3,'user','hashed_password3','2025-01-29 11:25:01','2025-01-29 11:25:01'),(4,'Bernard','Julie','julie.bernard@example.com','0645678901','Receptionist',1,'user','hashed_password4','2025-01-29 11:25:01','2025-01-29 11:25:01'),(5,'Roux','Nicolas','nicolas.roux@example.com','0656789012','Manager',2,'admin','hashed_password5','2025-01-29 11:25:01','2025-01-29 11:25:01');
/*!40000 ALTER TABLE `collaborators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (1,'H001','Paris','123 Rue de Rivoli','REF001','2025-01-29 11:19:02','2025-01-29 11:19:02'),(2,'H002','Lyon','45 Avenue de la Gare','REF002','2025-01-29 11:19:02','2025-01-29 11:19:02'),(3,'H003','Marseille','78 Boulevard du Prado','REF003','2025-01-29 11:19:02','2025-01-29 11:19:02'),(4,'H004','Bordeaux','12 Quai des Chartrons','REF004','2025-01-29 11:19:02','2025-01-29 11:19:02'),(5,'H005','Nice','5 Promenade des Anglais','REF005','2025-01-29 11:19:02','2025-01-29 11:19:02');
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `options_bookings`
--

DROP TABLE IF EXISTS `options_bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `options_bookings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_option_id` int DEFAULT NULL,
  `booking_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room_option_id_idx` (`room_option_id`),
  CONSTRAINT `room_option_id` FOREIGN KEY (`room_option_id`) REFERENCES `room_options` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `options_bookings`
--

LOCK TABLES `options_bookings` WRITE;
/*!40000 ALTER TABLE `options_bookings` DISABLE KEYS */;
/*!40000 ALTER TABLE `options_bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_options`
--

DROP TABLE IF EXISTS `room_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_options` (
  `id` int NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `description` text,
  `hotel_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `price` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_id_2_idx` (`hotel_id`),
  CONSTRAINT `hotel_id_2` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_options`
--

LOCK TABLES `room_options` WRITE;
/*!40000 ALTER TABLE `room_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `room_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_types`
--

DROP TABLE IF EXISTS `room_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_types`
--

LOCK TABLES `room_types` WRITE;
/*!40000 ALTER TABLE `room_types` DISABLE KEYS */;
INSERT INTO `room_types` VALUES (1,'Standard',80,'Chambre standard avec un lit double','2025-01-29 11:19:02','2025-01-29 11:19:02'),(2,'Deluxe',120,'Chambre deluxe avec vue sur la ville','2025-01-29 11:19:02','2025-01-29 11:19:02'),(3,'Suite',200,'Suite avec balcon et jacuzzi','2025-01-29 11:19:02','2025-01-29 11:19:02');
/*!40000 ALTER TABLE `room_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hotel_id` int DEFAULT NULL,
  `number` int DEFAULT NULL,
  `room_type_id` varchar(255) DEFAULT NULL,
  `floor` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `hotel_id_idx` (`hotel_id`),
  CONSTRAINT `hotel_id` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,1,101,'1',1,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(2,1,102,'2',1,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(3,1,103,'3',2,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(4,1,104,'1',2,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(5,1,105,'2',3,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(6,2,201,'1',2,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(7,2,202,'3',2,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(8,2,203,'2',3,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(9,2,204,'1',4,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(10,2,205,'3',4,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(11,3,301,'2',3,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(12,3,302,'3',4,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(13,3,303,'1',5,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(14,3,304,'2',5,'2025-01-29 11:19:02','2025-01-29 11:19:02'),(15,3,305,'3',6,'2025-01-29 11:19:02','2025-01-29 11:19:02');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-29 11:25:49
