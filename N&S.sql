-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: neigeetsoleil_v2
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activite`
--

DROP TABLE IF EXISTS `activite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activite` (
  `idActivite` int(11) NOT NULL AUTO_INCREMENT,
  `Libelle` varchar(255) NOT NULL,
  `Tarif` decimal(10,2) NOT NULL,
  PRIMARY KEY (`idActivite`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `associer`
--

DROP TABLE IF EXISTS `associer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `associer` (
  `idAssocier` int(11) NOT NULL AUTO_INCREMENT,
  `idReservation` int(11) NOT NULL,
  `idSaison` int(11) NOT NULL,
  PRIMARY KEY (`idAssocier`),
  KEY `idReservation` (`idReservation`),
  KEY `idSaison` (`idSaison`),
  CONSTRAINT `associer_ibfk_1` FOREIGN KEY (`idReservation`) REFERENCES `reservation` (`idReservation`) ON DELETE CASCADE,
  CONSTRAINT `associer_ibfk_2` FOREIGN KEY (`idSaison`) REFERENCES `saison` (`idSaison`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `catalogue`
--

DROP TABLE IF EXISTS `catalogue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogue` (
  `idCatalogue` int(11) NOT NULL AUTO_INCREMENT,
  `Annee` int(11) NOT NULL,
  `DatePublication` date NOT NULL,
  PRIMARY KEY (`idCatalogue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contrat`
--

DROP TABLE IF EXISTS `contrat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contrat` (
  `idContrat` int(11) NOT NULL AUTO_INCREMENT,
  `DateSignature` date NOT NULL,
  `Duree` int(11) NOT NULL,
  `MontantTotal` decimal(10,2) NOT NULL,
  `DateFin` date NOT NULL,
  `idProprietaire` int(11) DEFAULT NULL,
  PRIMARY KEY (`idContrat`),
  KEY `idProprietaire` (`idProprietaire`),
  CONSTRAINT `contrat_ibfk_1` FOREIGN KEY (`idProprietaire`) REFERENCES `proprietaire` (`idProprietaire`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `definir`
--

DROP TABLE IF EXISTS `definir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `definir` (
  `idDefinir` int(11) NOT NULL AUTO_INCREMENT,
  `idSaison` int(11) NOT NULL,
  `TarifMinSaison` decimal(10,2) DEFAULT NULL,
  `TarifMaxSaison` decimal(10,2) DEFAULT NULL,
  `TarifMoySaison` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idDefinir`),
  KEY `idSaison` (`idSaison`),
  CONSTRAINT `definir_ibfk_1` FOREIGN KEY (`idSaison`) REFERENCES `saison` (`idSaison`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `equipement`
--

DROP TABLE IF EXISTS `equipement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equipement` (
  `idEquipement` int(11) NOT NULL AUTO_INCREMENT,
  `NomEquipement` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `Quantite` int(11) NOT NULL,
  PRIMARY KEY (`idEquipement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `equiper`
--

DROP TABLE IF EXISTS `equiper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equiper` (
  `idEquiper` int(11) NOT NULL AUTO_INCREMENT,
  `idEquipement` int(11) NOT NULL,
  `idHabitation` int(11) NOT NULL,
  `Quantite` int(11) NOT NULL,
  PRIMARY KEY (`idEquiper`),
  KEY `idEquipement` (`idEquipement`),
  KEY `idHabitation` (`idHabitation`),
  CONSTRAINT `equiper_ibfk_1` FOREIGN KEY (`idEquipement`) REFERENCES `equipement` (`idEquipement`) ON DELETE CASCADE,
  CONSTRAINT `equiper_ibfk_2` FOREIGN KEY (`idHabitation`) REFERENCES `habitations` (`idHabitation`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `etredetype`
--

DROP TABLE IF EXISTS `etredetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `etredetype` (
  `idTypeRelation` int(11) NOT NULL AUTO_INCREMENT,
  `idHabitation` int(11) NOT NULL,
  `idType` int(11) NOT NULL,
  PRIMARY KEY (`idTypeRelation`),
  KEY `idHabitation` (`idHabitation`),
  KEY `idType` (`idType`),
  CONSTRAINT `etredetype_ibfk_1` FOREIGN KEY (`idHabitation`) REFERENCES `habitations` (`idHabitation`) ON DELETE CASCADE,
  CONSTRAINT `etredetype_ibfk_2` FOREIGN KEY (`idType`) REFERENCES `typelocation` (`idType`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `habitations`
--

DROP TABLE IF EXISTS `habitations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `habitations` (
  `idHabitation` int(11) NOT NULL AUTO_INCREMENT,
  `NumApp` varchar(50) DEFAULT NULL,
  `Adresse` varchar(255) NOT NULL,
  `Immeuble` varchar(50) DEFAULT NULL,
  `Capacite` int(11) NOT NULL,
  `Surface` decimal(10,2) NOT NULL,
  `Complement` varchar(255) DEFAULT NULL,
  `Orientation` varchar(50) DEFAULT NULL,
  `Balcon` tinyint(1) DEFAULT NULL,
  `idContrat` int(11) DEFAULT NULL,
  `idProprietaire` int(11) DEFAULT NULL,
  `idCatalogue` int(11) DEFAULT NULL,
  PRIMARY KEY (`idHabitation`),
  KEY `idContrat` (`idContrat`),
  KEY `idProprietaire` (`idProprietaire`),
  KEY `fk_catalogue` (`idCatalogue`),
  CONSTRAINT `fk_catalogue` FOREIGN KEY (`idCatalogue`) REFERENCES `catalogue` (`idCatalogue`) ON DELETE SET NULL,
  CONSTRAINT `habitations_ibfk_1` FOREIGN KEY (`idContrat`) REFERENCES `contrat` (`idContrat`) ON DELETE SET NULL,
  CONSTRAINT `habitations_ibfk_2` FOREIGN KEY (`idProprietaire`) REFERENCES `proprietaire` (`idProprietaire`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `locataire`
--

DROP TABLE IF EXISTS `locataire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `locataire` (
  `idLocataire` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `Telephone` varchar(15) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idLocataire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mandater`
--

DROP TABLE IF EXISTS `mandater`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mandater` (
  `idMandater` int(11) NOT NULL AUTO_INCREMENT,
  `idProprietaire` int(11) NOT NULL,
  `idLocataire` int(11) NOT NULL,
  PRIMARY KEY (`idMandater`),
  KEY `idProprietaire` (`idProprietaire`),
  KEY `idLocataire` (`idLocataire`),
  CONSTRAINT `mandater_ibfk_1` FOREIGN KEY (`idProprietaire`) REFERENCES `proprietaire` (`idProprietaire`) ON DELETE CASCADE,
  CONSTRAINT `mandater_ibfk_2` FOREIGN KEY (`idLocataire`) REFERENCES `locataire` (`idLocataire`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `proprietaire`
--

DROP TABLE IF EXISTS `proprietaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proprietaire` (
  `idProprietaire` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`idProprietaire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `realiser`
--

DROP TABLE IF EXISTS `realiser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `realiser` (
  `idStation` int(11) NOT NULL,
  `idActivite` int(11) NOT NULL,
  PRIMARY KEY (`idStation`,`idActivite`),
  KEY `idActivite` (`idActivite`),
  CONSTRAINT `realiser_ibfk_1` FOREIGN KEY (`idStation`) REFERENCES `station` (`idStation`) ON DELETE CASCADE,
  CONSTRAINT `realiser_ibfk_2` FOREIGN KEY (`idActivite`) REFERENCES `activite` (`idActivite`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `region` (
  `idRegion` int(11) NOT NULL AUTO_INCREMENT,
  `NomRegion` varchar(100) NOT NULL,
  `Libelle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idRegion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservation` (
  `idReservation` int(11) NOT NULL AUTO_INCREMENT,
  `DateReservation` date NOT NULL,
  `DateArrivee` date NOT NULL,
  `DateDepart` date NOT NULL,
  `idHabitation` int(11) DEFAULT NULL,
  PRIMARY KEY (`idReservation`),
  KEY `idHabitation` (`idHabitation`),
  CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`idHabitation`) REFERENCES `habitations` (`idHabitation`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `saison`
--

DROP TABLE IF EXISTS `saison`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saison` (
  `idSaison` int(11) NOT NULL AUTO_INCREMENT,
  `NomSaison` varchar(100) NOT NULL,
  `DateDebut` date NOT NULL,
  `DateFin` date NOT NULL,
  PRIMARY KEY (`idSaison`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `situer`
--

DROP TABLE IF EXISTS `situer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `situer` (
  `idSituer` int(11) NOT NULL AUTO_INCREMENT,
  `idStation` int(11) NOT NULL,
  `idRegion` int(11) NOT NULL,
  PRIMARY KEY (`idSituer`),
  KEY `idStation` (`idStation`),
  KEY `idRegion` (`idRegion`),
  CONSTRAINT `situer_ibfk_1` FOREIGN KEY (`idStation`) REFERENCES `station` (`idStation`) ON DELETE CASCADE,
  CONSTRAINT `situer_ibfk_2` FOREIGN KEY (`idRegion`) REFERENCES `region` (`idRegion`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `station`
--

DROP TABLE IF EXISTS `station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `station` (
  `idStation` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `TelMairie` varchar(15) DEFAULT NULL,
  `NbHabitants` int(11) DEFAULT NULL,
  `NbTouristes_ete` int(11) DEFAULT NULL,
  `NbSkieurs_hiver` int(11) DEFAULT NULL,
  PRIMARY KEY (`idStation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `typelocation`
--

DROP TABLE IF EXISTS `typelocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `typelocation` (
  `idType` int(11) NOT NULL AUTO_INCREMENT,
  `CodeType` varchar(50) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `SurfaceMoy` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`idType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-19 14:30:21
