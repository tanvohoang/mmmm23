import http from "../utils/http"

export const  GetMenuData = ()=>http.post('HomePage/GetMainMenu');
export const GetItemServices = (id) =>http.post(`HomePage/GetItem?id=${id}`);