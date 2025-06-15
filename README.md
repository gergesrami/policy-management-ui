# Policy Management Ui

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.


This is the frontend project for the **Policy Management Application**, built using **Angular 17**. It is connected to a secure ASP.NET Core backend and enables users to manage **policies** and **policy types** via a user-friendly web interfac.

This project uses:
- Latest Angular for the front-end. 
- Bootstrap for CSS styling. 


## What you should have before running this project?


- [Node.js (18+ recommended)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli):
  
```bash
npm install -g @angular/cli
```

## How to setup and run the project?

### First step :
Download the project as ZIP from **Github** and the extract it in a specific folder.

Or clone the repository.

```bash
git clone <link-from-github>
cd policy-management-ui
```

### Second step:
Install the dependencies:

```bash
npm install
```

### Third step:

Check `environment.ts` and update it if you have changed the Backend ports.

### Fourth step:
Run the frontend server:

```bash
ng serve
```

This will run the Frontend in these URLS 
http://localhost:4200/, based on the `launch.json`, if already in use, you can change the ports.


## How things work in this application ?

This application runs based on a standard architecture using Angular version 20.

We are using layered structure, meaning we have **Standalone Components**, **Authentication Service**, **HTTP Interceptor**, **Route Guards**, **Routing and Navgation**.

### Standalone Components
Each page has it own component, and it own logic and services.

### Authentication Service
A service to handle Authentication with the backend ensuringg the user is logged in the pages. also handles login/logout and token storage.

### HTTP Interceptor
Intecepts every outgoing HTTP Call to the server adding to it the Authorization Bearer header.

### Route Guards
Handling user accessing pages without authorization, redirects to login if the user is logged out.

### Routing and Navgation

Configures the routes for the pages and components.



## What things to work on in the future ?

- Add user role-based UI (admin, viewer...)
- Pagination and filtering for the policy list
- Unit testing.
- Responsive improvements for mobile screens.
- Error boundary UI for network/server errors.
- Language/locale selector.
