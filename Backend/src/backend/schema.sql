CREATE TABLE kommentaar (
    id INTEGER PRIMARY KEY,
    tund_id TEXT,    
    hinnang INTEGER CHECK(hinnang > 0 &&),
    text TEXT
);
