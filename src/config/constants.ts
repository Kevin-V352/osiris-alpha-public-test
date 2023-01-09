import * as dotenv from 'dotenv'

dotenv.config();

export const HYGRAPH_PROJECT_API = process.env.HYGRAPH_PROJECT_API || '';
export const HYGRAPH_PROD_AUTH_TOKEN = process.env.HYGRAPH_PROD_AUTH_TOKEN || '';