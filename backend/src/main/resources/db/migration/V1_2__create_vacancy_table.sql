CREATE TABLE vacancy (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    salary_range VARCHAR(255),
    employment_type VARCHAR(50),
    posted_time_ago VARCHAR(100),
    tags TEXT, -- Comma-separated tags (e.g. "React, Node.js, TypeScript")
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);