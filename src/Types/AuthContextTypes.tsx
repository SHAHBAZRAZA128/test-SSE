export interface AuthContextTypes  {
    user:any,
    login: (userData:any) => void,
    logout : () => void,

}