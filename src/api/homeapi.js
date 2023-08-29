import axios from "axios";

const Axioshome = axios.create({
  baseURL: "https://padmeexii.pythonanywhere.com/api",
});
export { Axioshome };
