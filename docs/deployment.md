# Nexus Assistant Deployment

## Production Environment

Platform:
Northflank

Repository:
vash-dev0p/nexus-assistant

Branch:
main

Region:
Europe-West (London)

## Runtime

Node.js 20.x

## Configuration

Build Context:
/bot

Build Method:
Buildpack

Network:
No ports required

Health Checks:
Disabled

Environment Variables:
BOT_TOKEN

## Database

SQLite

## Auto Deploy

Enabled

GitHub push -> automatic deployment

## Deployment Validation

- Bot responds to /start
- Notes CRUD works
- User profiles work
- Language settings work

## Deployment Date

2026-11-23

First successful cloud deployment.