DROP TABLE if EXISTS todo;
CREATE TABLE IF NOT EXISTS todo(
  id SERIAL PRIMARY KEY,
  task VARCHAR(50) NOT NULL,
  completed BOOLEAN DEFAULT false,
  priority SERIAL
)