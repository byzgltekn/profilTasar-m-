# Task-5 - LocalStorage User Management

This Angular task keeps a user list in localStorage instead of using a mock service or API.

## Screens

- `/users`: lists all users and shows add/edit/detail actions.
- `/users/:id`: shows all details for the selected user.
- `/users/new`: shows the form for adding a user.
- `/users/:id/edit`: shows the same form for editing a user.

## Data Storage

The first page load seeds localStorage with sample users. Adding or editing a user updates the stored data.

## Run

```bash
npm install
npm start
```
