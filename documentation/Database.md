# Database Documentation

## Schema

```sql
CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY,
      user_name TEXT,
      lesson_name TEXT, 
      rating INTEGER CHECK(rating > 0 and rating < 6), -- rating from 1 to 5 
      comment TEXT
    );
```



