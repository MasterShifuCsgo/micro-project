# Database Documentation

## Schema

```sql
CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY,
      lesson_name TEXT, 
      rating INTEGER CHECK(hinnang > 0 and hinnang < 6), -- rating from 1 to 5 
      comment TEXT
    );
```



