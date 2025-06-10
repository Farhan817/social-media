type EnpointKeys = "login"|"userCreate"|"posts"|"like";


export const endpoints: Record<EnpointKeys, string> ={
    login:"/auth/verify",
    userCreate:"/users",
    posts:"/posts",
    like:"/likes"
}