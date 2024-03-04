import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/graphql":{
        target:"https://www.tiger-one.eu/",
        // target:"https://staging.tiger-one.eu/",
        // target:"https://staging.seedsman.com/",
        changeOrigin:true
      }
    }
  }
})
