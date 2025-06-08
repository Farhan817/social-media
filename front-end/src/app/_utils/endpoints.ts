type EnpointKeys = "login"|"nonce";


export const endpoints: Record<EnpointKeys, string> ={
    login:"/auth/verify",
    nonce:"/auth/nonce"
}