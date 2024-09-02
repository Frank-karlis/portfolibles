import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import {Auth} from "@auth/core"
 
export const { handlers,auth,signIn,signOut } = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRECT
    }),
    TwitterProvider({
        clientId:process.env.TWITTER_CLIENT_ID,
        clientSecret:process.env.TWITTER_CLIENT_SECRET,
    }),
    
    // FacebookProvider({
    //     clientId: process.env.FACEBOOK_CLIENT_ID,
    //     clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
    // }),
],
});

