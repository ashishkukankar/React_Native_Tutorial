import axios from "axios";

export const fetchApi=()=> {
 return axios.get('https://dummyjson.com/recipes')

}