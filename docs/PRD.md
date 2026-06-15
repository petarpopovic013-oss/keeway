# Product Requirements Document (PRD) - Keeway Web App

## 1. Uvod
Ovaj dokument definiše obim posla (Scope of Work) za izradu web aplikacije za Keeway motore u Srbiji. Aplikacija služi kao digitalni katalog sa detaljnim specifikacijama modela, uz prateći Admin panel za upravljanje sadržajem.

## 2. Tehnološki Stak
- **Frontend / Framework:** Next.js (App Router), React, Tailwind CSS. Dizajn je implementiran na osnovu Keeway specifičnog rešenja opisanog u `design.md` (Zuume font, Keeway Orange `#F54308`, Hero sekcije).
- **Backend / Baza podataka:** Supabase (PostgreSQL baza + Supabase Storage za slike). Baza se deli sa Morbidelli sajtom, ali se koriste odvojene tabele.
- **Autentifikacija:** `.env` lozinka za pristup Admin panelu.

## 3. Struktura Web Aplikacije (Javni deo)
Javni deo sajta namenjen je posetiocima i potencijalnim kupcima. Arhitektura funkcionalnosti je ista kao kod Morbidelli sajta, ali su vizuelni elementi (boje, fontovi, raspored) prilagođeni Keeway brendu:
- **Početna stranica (Homepage):** Full-screen Hero sekcija sa video pozadinom (`hero-teaser.mp4`). Prikaz izdvojenih/najpopularnijih modela motora sa dinamičnim hover animacijama i Newsletter modulom.
- **Katalog motora:** Lista svih dostupnih modela sa osnovnim informacijama (slika, naziv, kratak opis, cena). Cist visokokontrastni crno-beli dizajn sa `Keeway Orange` akcentima.
- **Stranica motora (Detalji):** Prikaz detaljnih informacija o specifičnom modelu, velikih slika i sekcije sa detaljnim specifikacijama. Svi naslovi koriste agresivni `Zuume` font u Italic stilu.
- **Kontakt:** Kontakt forma i informacije (adresa, telefon, email).

## 4. Admin Panel
Admin panel omogućava vlasnicima sajta lako ažuriranje ponude motora.
- **Pristup:** Zaštićena ruta (npr. `/admin`). Autentifikacija se vrši unosom jedne glavne lozinke koja je bezbedno smeštena u `.env` fajlu aplikacije (bez kompleksnog sistema za upravljanje korisnicima).
- **CRUD Operacije:**
  - **Dodavanje (Create):** Unos novog modela motora sa svim specifikacijama.
  - **Prikaz (Read):** Tabela svih unetih motora za lak pregled.
  - **Izmena (Update):** Ažuriranje cena, specifikacija, opisa.
  - **Brisanje (Delete):** Uklanjanje motora iz ponude.
- **Upload Slika:** Slike se upload-uju direktno sa računara kroz Admin formu. Smeštaju se i serviraju preko Supabase Storage-a.

## 5. Struktura Baze Podataka (Supabase)
Glavna tabela `motorcycles` će sadržati sledeće informacije (okvirno):
- `id` (UUID, Primary Key)
- `name` (String) - Naziv modela
- `slug` (String) - URL-friendly naziv (npr. `keeway-t1002vx`)
- `price` (String/Number) - Cena motora
- `short_description` (Text) - Kratak opis za prikaz u katalogu
- `image_url` (String) - Link ka glavnoj slici iz Supabase Storage-a
- `specifications` (JSONB) - Fleksibilno polje za čuvanje detaljnih specifikacija koje će biti precizno definisane (npr. zapremina, snaga, težina, visina sedišta, kapacitet rezervoara, itd.). Korišćenje JSONB formata omogućava dinamičko dodavanje novih specifikacija po potrebi.
- `created_at` (Timestamp)

## 6. Sledeći Koraci za Implementaciju
1. Postavljanje Next.js projekta i kreiranje Supabase baze (tabele `motorcycles` i Storage bucket-a).
2. Razvoj zaštićenog Admin panela (CRUD funkcionalnosti i `.env` zaštita).
3. Integracija frontend dizajna za javne stranice (Početna, Katalog, Detalji, Kontakt).
4. Povezivanje javnog dela sajta sa Supabase bazom radi prikaza unetih podataka.
