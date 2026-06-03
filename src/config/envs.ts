import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  // PORT: get('PORT').required().asPortNumber(),
  // PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
  PORT: process.env.PORT || '3000',
  PUBLIC_PATH: process.env.PUBLIC_PATH

}