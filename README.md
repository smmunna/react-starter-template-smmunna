## Start with your React.js Starter Template

#### Starter Template Features
🔰Installed these (Packages): 
   1. React with `Vite` [[Visit Link](https://vitejs.dev/guide/)]
   2. React Router v6 setup [[Visit Link](https://reactrouter.com/en/main/start/tutorial)]
   3. Tailwind CSS (Configuration) setup [[Visit Link](https://tailwindcss.com/docs/installation)]
   4. axios + axios interceptor setup [[Visit Link](https://axios-http.com/docs/intro)]
   5. Tanstack query/ React Query setup [[Visit Link](https://tanstack.com/query/latest)]
   6. react-helmet-async setup [[Visit Link](https://github.com/staylor/react-helmet-async#readme)]
   7. React Icons setup [[Visit Link](https://react-icons.github.io/react-icons/)]

#### New Component Features `components/ui`
   - `<PageTitle title={}/>` -- component takes a props as a `page title`

#### New CSS Features `utils/css`
   - `h1, h2, h3, h4, h5` styles hasbeen added
   - `all-center` className added. Following this: `<div className="all-center"><div>All Item will be center</div></div>`

#### Folder Structures
- `api` -> `secureApi.jsx` contains the axios interceptors configuration, just use your `server` URL
- `assets` -> Handle this folder for work with images/icons/others....
- `components` -> `ui` folder has some specific components, you can modify if you want
- `hooks` -> `demoHooks/useData.jsx` see the demos, for fetching the data from the server
- `layout` -> `MainLayout.jsx` follow this for any time of layout you want to make 
- `lib` -> `lib` if you want to make any library, then you can make here
- `pages` -> Inside the you can make any page
- `router` -> All of your routes will be here
- `shared` -> Login, Register, Header, Footer are available . You can customize
- `utils` -> `css/Fixed.css` some fixed are available, you can customize. Inside this you can keep any `js` file. 

#### How to use this Starter Template

   1. Clone this repository from this github repository
   2. Goto that project and run `npm install`
   ```javascript
      git clone https://github.com/smmunna/react-starter-template-smmunna.git
   ```
   3. Change your `folder name/project name` according to your own  
   4. Go to the project `diretory`
   ```javascript
      git remote rm origin
   ```
   5. Now run 
   ```javascript
      npm install 
   ```
**Now Start your Project**
  use the commandline
  ```javascript
   npm run dev
  ```
  Following URL Project will run-
  - ➜  Local:   http://localhost:5173/
  - ➜  Network: use --host to expose
  - ➜  press h + enter to show help

#### Requirements
1. Node.js version with v18+
2. VS Code Editor with recommended Extension
   1. JavaScript
   2. ES7+React/Redux/React Native
   3. Tailwind CSS
3. Optionally React Developer Tools

#### Scripts
- `npm run dev` for starting this project
- `npm run build` Compiles and bundles the app for deployment

#### License
Copyright © 2024-present Sm Munna.
   


