import axios from "axios";
import api from "helper/Api";

export async function homeService() {
    api.post("/getHomeServices").then(res => {
        return res.data.data;
    
})}

export function getServies() {
    
}
