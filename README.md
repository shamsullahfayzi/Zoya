# Zoya Clinic — Patient & Appointment Manager

**An Angular admin app for registering patients, booking clinic services and tracking follow-up calls.**
My first healthcare frontend (2024), built for the Zoya clinic.

![Angular](https://img.shields.io/badge/Angular_16-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular_Material-3F51B5?logo=angular&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white)

<!-- Add screenshots (dummy data only): patient list, new-patient form, admin services -->

---

## Features

- **Patient registration** — name, province, contact number, service, price, calling date, appointment date, status and remarks
- **Patient list** — sortable, paginated Angular Material table of every patient and their appointment
- **Service catalogue** — admins manage the clinic's services and prices
- **User management** — admin screens for staff accounts
- **JWT login** with an `AuthGuard` that can restrict routes by the token's role claim, plus a *Forbidden* page
- **Auth interceptor** — attaches the bearer token to every API call and logs the user out when the token expires
- **Admin dashboard charts** with ApexCharts

## Tech stack

Angular 16 · TypeScript · Angular Material & CDK · RxJS · `@auth0/angular-jwt` · ApexCharts · Bootstrap

## Structure

```
src/app/
  login/            JWT login
  auth/             route guard + HTTP interceptor
  home/             landing page
  new-patient/      registration form
  list-patients/    patient table
  admin/            dashboard charts, users & services management
  forbidden/        shown when a role isn't allowed
  service/          user/session service
```

## Run it

The frontend expects the clinic's ASP.NET Core Web API at `https://localhost:7158/api/` (not part of this repository).

```bash
git clone https://github.com/shamsullahfayzi/Zoya.git
cd Zoya
npm install
npx ng serve
```

Open http://localhost:4200.

## What I'd do differently now

This project led directly to [REDMARS](https://github.com/shamsullahfayzi/REDMARS), a full hospital system. Lessons carried over: keep the API URL in environment config rather than in components, store tokens in httpOnly cookies instead of `localStorage`, and apply role checks to every route and enforce them on the server, not only in the UI.

## Author

**Shamsullah Fayzi** · [GitHub](https://github.com/shamsullahfayzi)
