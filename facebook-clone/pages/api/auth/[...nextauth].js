import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({

    providers:[
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
          })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          return true
        },
        async redirect({ url, baseUrl }) {
          return baseUrl
        }
    }
});


