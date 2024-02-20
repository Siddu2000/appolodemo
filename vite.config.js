import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/graphql":{
        target:"https://www.tiger-one.eu/",
        changeOrigin:true
      }
    }
  }
})
