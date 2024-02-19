import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({ 
        clientId: '419927363606-4j6tg3ris40oljhe7a63g3afq0849ve6.apps.googleusercontent.com',   // process.env.GOOGLE_CLIENT_ID
        clientSecret: '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'                    //  process.env.GOOGLE_CLIENT_SECRET
      })
    // ...add more providers here
  ],
  secret: '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'
}

export default NextAuth(authOptions);