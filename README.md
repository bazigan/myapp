# MyApp

Simple Node.js + Express web app with three routes and Jest tests.

Usage

1. Install dependencies

```powershell
cd d:\myapp
npm install
```

2. Run the app

```powershell
npm start
# opens at http://localhost:3000
```

3. Run tests

```powershell
npm test
```

Docker

Build image:

```powershell
docker build -t myapp:latest .
```

Run with docker-compose:

```powershell
docker-compose up --build
```

Notes

- The server exposes routes: `/`, `/app1`, `/app2`.
- Tests use `supertest` and `jest`.
