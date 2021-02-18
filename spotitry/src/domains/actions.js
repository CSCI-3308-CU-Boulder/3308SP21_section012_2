
export const STORE_TOKEN = 'Store Token'

export function StoreToken(token){
    return{
        type: STORE_TOKEN,
        token
    }
}