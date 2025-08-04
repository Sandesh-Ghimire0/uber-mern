# User API Documentation

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
-   `password` must be at least 6 characters


## Endpoint

**GET** `/users/profile`

---

### Description

Retrieve the profile information of the currently authenticated user.

---

### Request

- Requires authentication (JWT token in cookie or `Authorization` header).
- No request body required.

---

### Responses

| Status Code | Description                      | Example Response Body                |
| ----------- | -------------------------------- | ------------------------------------ |
| 200         | Profile fetched successfully     | `{ "user": { ...user fields... } }` |
| 401         | Unauthorized or invalid token    | `{ "error": "Unauthorized access" }` |
| 500         | Server error                     | `{ "error": "Error message" }`       |

---

### Notes

- You must be logged in and provide a valid JWT token.
- Returns the user object associated with the authenticated token.

---

## Endpoint

**POST** `/users/logout`

---

### Description

Logs out the currently authenticated user by blacklisting their JWT token and clearing the authentication cookie.

---

### Request

- Requires authentication (JWT token in cookie or `Authorization` header).
- No request body required.

---

### Responses

| Status Code | Description                      | Example Response Body                       |
| ----------- | -------------------------------- | ------------------------------------------- |
| 200         | Logout successful                | `{ "message": "Logged out successfully" }`  |
| 401         | Unauthorized or invalid token    | `{ "error": "Unauthorized access" }`        |
| 500         | Server error                     | `{ "error": "Error message" }`              |

---

### Notes

- The token is blacklisted for 24 hours and cannot be used again.
- The authentication cookie is cleared

## Captain API Endpoints

---

### Register Captain

**POST** `/captains/register`

---

#### Description

Register a new captain by providing their name, email, password, and vehicle details.  
Returns a JWT token and the created captain object on success.

---

#### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)",
  "vehicle": {
    "color": "string (min 3 chars, required)",
    "plate": "string (min 3 chars, required)",
    "capacity": "number (min 1, required)",
    "vehicleType": "string (car | bike | auto, required)"
  }
}
```

##### Example

```json
{
  "fullname": {
    "firstname": "Bob",
    "lastname": "Driver"
  },
  "email": "bob.driver@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

#### Responses

| Status Code | Description                  | Example Response Body                      |
| ----------- | ---------------------------- | ------------------------------------------ |
| 201         | Captain registered successfully | `{ "token": "...", "captain": { ... } }` |
| 400         | Validation error             | `{ "errors": [ ... ] }`                   |
| 500         | Server error                 | `{ "error": "Error message" }`            |

---

#### Notes

- `firstname` is required and must be at least 3 characters.
- `lastname` is optional but must be at least 3 characters if provided.
- `email` must be a valid email address.
- `password` must be at least 6 characters.
- `vehicle.color` and `vehicle.plate` must be at least 3 characters.
- `vehicle.capacity` must be a number and at least 1.
- `vehicle.vehicleType` must be one of: `car`, `bike`, or `auto`
