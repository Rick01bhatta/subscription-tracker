import { config } from "dotenv";   
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });  // Load environment variables from .env file based on NODE_ENV
export const {PORT, NODE_ENV,MONGODB_URI,JWT_SECRET,JWT_EXPIRES_IN,ARCJET_KEY,ARCJET_ENV,QSTASH_URL,QSTASH_TOKEN,EMAIL_PASSWORD,SERVER_URL} = process.env; // Export the PORT variable for use in other parts of the application