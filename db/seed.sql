CREATE TABLE houses (
id SERIAL PRIMARY KEY,
name VARCHAR(500),
address VARCHAR(500),
city VARCHAR(500),
state VARCHAR(500),
zip INTEGER
);

INSERT INTO houses (name,address,city,state,zip)
VALUES('Eric', '123 Mine Rd', 'Pleasant Grove', 'UT', 84320),
('Alix', '321 Marla St', 'Eagle Mountain', 'UT', 84320),
('Andrew', '12 Roman ln', 'Denver', 'CA', 80014);