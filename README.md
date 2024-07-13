# Netflix Clone
Netflix Clone using React and Firebase for Authentication

### Clone this Repository using:
```powershell
git clone https://github.com/ars1mm/netflix-app.git
```
After cloning the repository, you will need to setup .env so for that use the following commands

```powershell
cd .\netflix_clone\
New-Item -Path ".\.env" -ItemType "File"
```
### After adding the .env, you will have to provide your own Keys!
Your .env file should look like this
```env
VITE_API_KEY= REPLACE THIS 
VITE_AUTH_DOMAIN= REPLACE THIS 
VITE_PROJECT_ID= REPLACE THIS
VITE_STORAGE_BUCKET= REPLACE THIS
VITE_MESSAGING_SENDER_ID= REPLACE THIS
VITE_APP_ID= REPLACE THIS
```
### To Install Dependencies use:
```powershell
npm install
```
To run this use:
```powershell
npm run dev
```
This will install neccesary dependencies listed on package.json
### package.json should look like this:
```json
{
  "name": "netflix_clone",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "firebase": "^10.12.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-firebase-hooks": "^5.1.1",
    "react-router-dom": "^6.24.1",
    "react-toastify": "^10.0.5"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "vite": "^5.3.1"
  }
}
```