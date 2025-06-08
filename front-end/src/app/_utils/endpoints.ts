type EnpointKeys = "login"|"userCreate"|"posts";


export const endpoints: Record<EnpointKeys, string> ={
    login:"/auth/verify",
    userCreate:"/users",
    posts:"/posts"
}