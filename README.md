# RajKumar Travels — Website

A full, responsive taxi & tour agency website built with **React (Vite) + Bootstrap 5 + custom CSS**.

Covers: Airport Transfer, Outstation Trips, Temple Tours, Hill Station Tours, Local Taxi Service,
Group Travel — plus a booking form that emails you directly using **EmailJS** (no backend server needed).

---

## 1. Install & run locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd rajkumar-travels
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

To build the production-ready static site:

```bash
npm run build
```

This creates a `dist/` folder — upload that folder's contents to any hosting (Hostinger,
Netlify, Vercel, GitHub Pages, etc.) and your site is live.

---

## 2. Set up the booking form (EmailJS) — REQUIRED

Right now the "Send Message" button will show a message saying email isn't configured yet.
To make bookings land in your inbox, do this **one-time setup** (takes ~5 minutes, free):

1. Go to **https://www.emailjs.com/** and create a free account.
2. Click **Add New Service** → choose **Gmail** (or your email provider) → connect the
   Gmail account where you want to receive bookings (`demo@gmail.com` → replace with your real email).
   This gives you a **Service ID** (e.g. `service_abc1234`).
3. Click **Email Templates** → **Create New Template**. Use variables like this in the template body:

   ```
   New booking request from RajKumar Travels website

   Name: {{from_name}}
   Phone: {{phone}}
   Email: {{email}}
   Service Required: {{service}}
   Message: {{message}}
   ```

   Save it — this gives you a **Template ID** (e.g. `template_xyz789`).
4. Go to **Account → General** and copy your **Public Key**.
5. In the project folder, rename `.env.example` to **`.env`** and fill in the three values:

   ```
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. Restart `npm run dev` (or rebuild with `npm run build`). The booking form will now send
   real emails straight to your inbox whenever a customer submits it.

> The free EmailJS plan allows 200 emails/month, which is enough for most small agencies to start.

---

## 3. Where to change things

| What you want to change | File |
|---|---|
| Phone number / email / address (shown everywhere) | Search for `+911234567890` / `demo@gmail.com` — appears in `Header.jsx`, `Hero.jsx`, `BookingForm.jsx`, `Footer.jsx`, `FloatingButtons.jsx`, `CtaBanner.jsx` |
| About Us text | `src/components/About.jsx` |
| Services list & descriptions | `src/components/Services.jsx` |
| Fleet cars (names, seats, fuel type) | `src/components/Fleet.jsx` — the `FLEET` array at the top |
| Fleet car photos | Replace `<SedanArt/>`, `<MpvArt/>`, `<SuvArt/>` illustrations with `<img src={...} />` once you have real photos — drop the photos into `src/assets/images/` |
| Temple / hill station photos & names | `src/components/Destinations.jsx` — the `TEMPLES` and `HILLS` arrays. Drop new photos into `src/assets/images/` and `import` them at the top like the existing ones |
| Customer reviews | `src/components/Testimonials.jsx` — the `REVIEWS` array |
| Colours, fonts, spacing | `src/styles/index.css` — all colours are CSS variables at the very top (`--navy`, `--amber`, etc.) |
| Booking form service dropdown options | `src/components/BookingForm.jsx` — the `SERVICE_OPTIONS` array |

---

## 4. Images already included

`src/assets/images/` currently has 4 temple photos you provided (Prem Mandir, ISKCON, Chandrodaya
Mandir, Lotus/Pagal Baba Mandir) — these are used in the About section and the Temple Tours tab.

Hill station cards and the fleet cars currently use custom illustrations/placeholders instead of
photos, since real stock/brand photos can't be safely included in a commercial site without a
license. Add your own photos to `src/assets/images/` any time and swap them in as shown above.

---

## 5. Tech stack

- **React 18** + **Vite** (fast dev server & build)
- **Bootstrap 5** (grid & base utilities) with a fully custom design system on top
- **EmailJS** for the booking form (client-side only, no backend required)
- Plain CSS with variables — no Tailwind/SCSS build step needed

---

## 6. Folder structure

```
rajkumar-travels/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/images/       ← temple photos live here
│   ├── components/          ← one file per website section
│   ├── styles/index.css     ← all design tokens & styles
│   ├── App.jsx               ← assembles all sections
│   └── main.jsx               ← React entry point
├── index.html
├── package.json
├── vite.config.js
├── .env.example              ← rename to .env and add EmailJS keys
└── README.md                 ← this file
```
