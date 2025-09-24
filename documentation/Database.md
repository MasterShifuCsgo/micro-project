# Database Documentation

## Schema

```sql
CREATE TABLE IF NOT EXISTS kommentaar (
      id INTEGER PRIMARY KEY,
      tunni_nimetus TEXT, 
      hinnang INTEGER CHECK(hinnang > 0 and hinnang < 6), -- rating from 1 to 5 
      kommentaar TEXT
    );
```



