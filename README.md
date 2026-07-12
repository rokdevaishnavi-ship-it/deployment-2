# Deployment Masterclass

A simple Express.js application built to learn:

- Docker
- Docker Compose
- Docker Hub
- GitHub Actions
- Kubernetes
- CI/CD

## Run locally

```bash
npm install
npm run dev
```

## Run with Docker

```bash
docker build -t deployment-masterclass:v1 .
docker run -p 3000:3000 deployment-masterclass:v1
```