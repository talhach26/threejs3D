[# threejs3D](https://www.youtube.com/watch?v=tllZWCQZ9_0&list=RDCMUCmXmlB4-HJytD7wek0Uo97A&start_radio=1 
1. for init project => npm create vite@latest in client folder
2. npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion
3. intall tailwind => 
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    => replace config with
    /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],
      theme: {
         extend: {},
       },
      plugins: [],
    }
    => add this to index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
4. npm run dev   

in canvas folder explanation of foler structure:
. Backdrop.jsx => this is for 3D model shadow
. CameraRig.jsx => this is for position of CameraRig
. shirt.jsx => this is actually our model in .glb format


For Server
1. npm init -y
2. chnge package.json to 
"scripts": {
    "start": "nodemon index"
  },
3. "type": "module", for import like react
4. npm install cloudinary cors dotenv express mongoose nodemon openai
5. https://platform.openai.com/account/api-key for open ai key  )https://www.youtube.com/watch?v=tllZWCQZ9_0&list=RDCMUCmXmlB4-HJytD7wek0Uo97A&start_radio=1 
1. for init project => npm create vite@latest in client folder
2. npm install three @react-three/fiber @react-three/drei maath valtio react-color framer-motion
3. intall tailwind => 
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    => replace config with
    /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],
      theme: {
         extend: {},
       },
      plugins: [],
    }
    => add this to index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
4. npm run dev   

in canvas folder explanation of foler structure:
. Backdrop.jsx => this is for 3D model shadow
. CameraRig.jsx => this is for position of CameraRig
. shirt.jsx => this is actually our model in .glb format


For Server
1. npm init -y
2. chnge package.json to 
"scripts": {
    "start": "nodemon index"
  },
3. "type": "module", for import like react
4. npm install cloudinary cors dotenv express mongoose nodemon openai
5. https://platform.openai.com/account/api-key for open ai key  
