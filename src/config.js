const isDev = process.env.NODE_ENV !== "production"
export default {
    API_ENDPOINT: isDev  ? "http://localhost:8000/api" : 'https://nameless-citadel-92074.herokuapp.com/api', 
    TOKEN_KEY: 'test-jwt-secret'
  }