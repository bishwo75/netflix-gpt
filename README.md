

May 12th Sunday 2024 
Learning Episode - 14 | NetflixGPT - The Beginnig !!  Namaste React 

What we covered here:
- Create React App
- configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign up form
- Form Validation
- useRef hook



- created this app using create-react-app 

- Push this app to my github repo 
 from the repo, run these command on terminal:
 git remote add origin https://github.com/bishwo75/netflix-gpt.git
git branch -M main
git push -u origin main



Our plan/approach to develop netflix:
#Features
- Login / SignUp page
 - Sign In / Sign Up form 
 - once logged in, rediect to browse page

- Browse (after authentication)
  - Header
  - Main Movie
   - Trailer in Background
   - Title & Description
   - Movie Suggestions
     - MovieLists * n 

- NetflexGPT
 - Search Bar
 - Movie Suggestions 

Setup Tailwind css as below: Install below:
npm install -D tailwindcss
npx tailwindcss init
- once you install above, it will automatically add a tailwind.congig.js file on our folder
- now, we need to configure path:
- go to tailwind.config.js file and add below's:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- now write these 3 things in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

that is all, tailwind css is installed on our app !

install React router dom: npm i -D react-router-dom
create a routing on Body. 

On Head, add Netflix logo
- Build Login form 

create a sign-up form too - on the same form, togle for sign in and sign-up
- use formik library from formik.org or some any other if you have a lot of form fields for validation

- Form validation: 

- Building Authentication: 1:58:00 
- for backend, we will be using google firebase


https://netflixgpt-1c313.web.app/
http://192.168.1.144:3000/

https://console.firebase.google.com/project/netflixgpt-1c313/overview

