import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({

    providers:[
        FacebookProvider({
            clientId: "662083005462678",
            clientSecret: "79de7ea82c2886406eb1f0ce2948ed78",
          })
    ],
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx6gts=",
});


