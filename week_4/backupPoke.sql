    CREATE TABLE pokedex(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    primary_type VARCHAR(50),
    secondary_type VARCHAR(50),
    evolutionary_stage INTEGER,
    region_of_origin VARCHAR(50),
    height VARCHAR(25),
    weight VARCHAR(25),
    bst INTEGER
    );
    
    INSERT INTO pokedex(name, primary_type, secondary_type, evolutionary_stage, region_of_origin, height, weight, bst)
    VALUES
    ('Samurott', 'water', 'none', '3', 'Hisui', '4 feet 11 inches', '208 lbs', '528'),
    ('Watchog', 'normal', 'none', '2', 'Unova', '3 feet 7 inches', '60 lbs', '420'),
    ('Joltik', 'bug', 'electric', '1', 'Unova', '4 inches', '1.3 lbs', '319'),
    ('Krookodile', 'ground', 'dark', '3', 'Unova', '4 feet 11 inches', '212 lbs', '519'),
    ('Dwebble', 'bug', 'rock', '1', 'Unova', '1 feet', '32 lbs', '325'),
    ('Archen', 'rock', 'flying', '1', 'Unova', '1 feet 8 inches', '21 lbs', '401'),
    ('Tirtouga', 'water', 'rock', '1', 'Unova', '2 feet 4 inches', '17 lbs', '355'),
    ('Zoroark', 'dark', 'none', '2', 'Kalos', '5 feet 3 inches', '179 lbs', '510'),
    ('Deerling', 'normal', 'grass', '1', 'Unova', '2 feet', '43 lbs', '335'),
    ('Sawsbuck', 'normal', 'grass', '2', 'Unova', '6 feet 3 inches', '204 lbs', '475'),
    ('Galvantula', 'bug', 'electric', '2', 'Unova', '2 feet 7 inches', '32 lbs', '472'),
    ('Tynamo', 'electric', 'none', '1', 'Unova', '8 inches', '1 lb', '275'),
    ('Elektrik', 'electric', 'none', '2', 'Unova', '3 feet 11 inches', '49 lbs', '405'),
    ('Elektross', 'electric', 'none', '3', 'Unova', '6 feet 11 inches', '81 lbs', '515'),
    ('Axew', 'dragon', 'none', '1', 'Unova', '2 feet', '40 lbs', '320'),
    ('Fraxure', 'dragon', 'none', '2', 'Unova', '3 feet 3 inches', '80 lbs', '410'),
    ('Haxorus', 'dragon', 'none', '3', 'Unova', '5 feet 11 inches', '233 lbs', '540'),
    ('Druddigon', 'dragon', 'none', '1', 'Unova', '5 feet 3 inches', '306 lbs', '485'),
    ('Golett', 'ground', 'ghost', '1', 'Unova', '3 feet 3 inches', '203 lbs', '303'),
    ('Golurk', 'ground', 'ghost', '2', 'Unova', '9 feet 2 inches', '728 lbs', '483'),
    ('Cobalion', 'steel', 'fighting', '1', 'Unova', '6 feet 11 inches', '551.2 lbs', '580'),
    ('Terrakion', 'rock', 'fighting', '1', 'Unova', '6 feet 3 inches', '573 lbs', '580'),
    ('Virizion', 'grass', 'fighting', '1', 'Unova', '6 feet 7 inches', '441 lbs', '580'),
    ('Reshiram', 'dragon', 'fire', '1', 'Unova', '10 feet 6 inches', '728 lbs', '680'),
    ('Zekrom', 'dragon', 'electric', '1', 'Unova', '9 feet 6 inches', '761 lbs', '680');
    
    
    
    
    
    
    
    
    
    
    
    
    