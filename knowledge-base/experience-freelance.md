# Freelance & Client Projects (May 2022 – Aug 2024)

## Overview

Approximately 3 years of freelance work building Python/FastAPI backends, Telegram bots and Mini Apps, and CRM/API integrations. Sole ownership of stack and delivery — from MVP to production.

## Svobodno (Freeup) — Telegram Mini App for Service Booking

A Telegram Mini App MVP for booking discounted/hot service slots. Built solo in ~3 months.

**Features:**
- Map-based slot discovery and 2-tap booking (instead of phone calls)
- Customer, partner, and admin cabinets
- YClients integration (create/cancel/reschedule bookings)

**Stack:** Python (FastAPI), Go (background processing/notifications service), PostgreSQL, Redis, React/Vite/Tailwind, Docker/nginx, GitHub Actions CI/CD

**Impact:** The MVP helped the client attract investment.

## Double Kiss — Telegram Mini App for Billiard Club

Replaced phone-based booking with a Telegram Mini App.

**Features:**
- Contact-based registration via requestContact() + JWT
- YClients integration (bookings) + YClients Loyalty (bonus debit/credit)
- Elo match system (K=20) with idempotent bonus settlement
- Raised booking conversion by replacing phone calls

**Stack:** Python, FastAPI, Alembic, Redis, arq worker, nginx, Docker

## CIAN Mole — Commercial Real Estate Analytics

A commercial real estate analytics platform for screening auction properties.

**Features:**
- Auction/torgi data + CIAN listings + geocoding
- Searchable property catalog with economics calculations
- Per-property report: price/m², capitalization, yield, payback period
- Telegram bot for daily use

**Stack:** Python, FastAPI, PostgreSQL, Redis, Telegram Bot, geocoding

**Impact:**
- Property economics evaluation reduced to ~10 minutes
- District-level market analysis reduced to 7–10 minutes
- Replaced manual multi-source cross-checks
