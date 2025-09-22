CREATE TABLE kommentaar (
    id INTEGER PRIMARY KEY,
    kommenteerija TEXT,    
    hinnang INTEGER CHECK(hinnang > 0 and hinnang < 6), -- rating from 1 to 5 
    kommentaar TEXT
);