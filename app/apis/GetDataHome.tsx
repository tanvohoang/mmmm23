import http from "../utils/http"

export const  GetMenuData = ()=>http.post('HomePage/GetMainMenu')