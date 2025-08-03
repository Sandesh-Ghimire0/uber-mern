# Backend API Documentation

## Endpoint

**POST** `/users/register`

---

### Description

Register a new user by providing their first name, optional last name, email, and password.  
Returns a JWT token and the created user object on success.

---

### Request Body

Send a JSON object with the following structure:

```json
{
    "fullname": {
        "firstname": "string (min 3 chars, required)",
        "lastname": "string (min 3 chars, optional)"
    },
    "email": "string (valid email, required)",
    "password": "string (min 6 chars, required)"
}
```

#### Example

```json
{
    "fullname": {
        "firstname": "Alice",
        "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "password": "strongPassword123"
}
```

---

### Responses

| Status Code | Description                  | Example Response Body                 |
| ----------- | ---------------------------- | ------------------------------------- |
| 201         | User registered successfully | `{ "token": "...", "user": { ... } }` |
| 400         | Validation error             | `{ "errors": [ ... ] }`               |
| 500         | Server error                 | `{ "error": "Error message" }`        |

---

### Notes

-   `firstname` is required and must be at least 3 characters.
-   `lastname` is optional but must be at least 3 characters if provided.
-   `email` must be a valid email address.
-   `password` must be at 6 characters

```json
{
    "fullname": {
        "firstname": "string (min 3 chars, required)",
        "lastname": "string (min 3 chars, optional)"
    },
    "email": "string (valid email, required)",
    "password": "string (min 6 chars, required)"
}
```

## Endpoint

**POST** `/users/login`

---

### Description

Authenticate an existing user using their email and password.  
Returns a JWT token and the user object on successful login.

---

### Request Body

Send a JSON object with the following structure:

```json
{
    "email": "string (valid email, required)",
    "password": "string (min 6 chars, required)"
}
```

#### Example

```json
{
    "email": "alice.smith@example.com",
    "password": "strongPassword123"
}
```

---

### Responses

| Status Code | Description               | Example Response Body                      |
| ----------- | ------------------------- | ------------------------------------------ |
| 200         | Login successful          | `{ "token": "...", "user": { ... } }`      |
| 400         | Validation error          | `{ "errors": [ ... ] }`                    |
| 401         | Invalid email or password | `{ "error": "Invalid email or password" }` |
| 500         | Server error              | `{ "error": "Error message" }`             |

---

### Notes

-   `email` must be a valid email address.
-   `password` must be at
