# Task-5 - LocalStorage User Management

This Angular task keeps a user list in localStorage instead of using a mock service or API.

## Screens

- `/users`: lists all users and shows add/edit/detail actions.
- `/users/:username`: shows all details for the selected user.
- `/users/new`: shows the form for adding a user.
- `/users/:username/edit`: shows the same form for editing a user.

## Data Storage

The first page load seeds localStorage with the JSONPlaceholder user shape. Adding or editing a user updates the stored data.

## Refactors

- Detail and edit routes use `username` instead of `id`.
- Username lookup and duplicate username validation are handled by the storage service.
- The user form reuses one empty form factory for add mode.

## Run

```bash
npm install
npm start
```
