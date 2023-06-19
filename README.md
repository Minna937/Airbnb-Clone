# Airbnb-clone

Live site here: https://minna-first-project.vercel.app

This is a repository for a Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.

## TechStack

### Languages

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### Frameworks and Libraries

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Database:

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

### Hosting:

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

# Features

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

## Homepage
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/11.png?raw=true">

## Sign up
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/signup.png?raw=true">

## Login
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/login.png?raw=true">

## Airbnb your home
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/post1.png?raw=true">
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/post2.png?raw=true">
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/post3.png?raw=true">
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/post4.png?raw=true">

## Search properties
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/search.png?raw=true">

## Book a property
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/booking.png?raw=true">

## Managing properties
<img width="1322" alt="Screen Shot 2023-05-30" src="https://github.com/Minna937/Airbnb-Clone/blob/main/public/screenshots/myproperties.png?raw=true">

# Getting started
### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-airbnb-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |



