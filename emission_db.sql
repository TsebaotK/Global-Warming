-- Delete the US_city_emissions table if exists
DROP TABLE IF EXISTS US_cities_emissions;


-- Create a US_city_emissions table 
CREATE TABLE US_cities_emissions (
	Country VARCHAR NOT NULL,
	City VARCHAR NOT NULL,
	latitude FLOAT,
	longitude FLOAT,
	Inventory_Year VARCHAR,
	Emissions_Column_Number INT,	
	Emissions_Row_Number INT,	
	Emissions_Response_Answer FLOAT,
	Emissions_Data_Reported	INT,	
	Population INT
);



SELECT * FROM US_cities_emissions;


		