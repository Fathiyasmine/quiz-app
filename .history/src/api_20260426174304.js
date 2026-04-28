import axios from "axios";
//axios est une bibliothèque de client HTTP qui facilite les requêtes vers une API. Nous créons une instance d'axios avec une baseURL pour éviter de répéter l'URL de base à chaque requête. Ensuite, nous utilisons un intercepteur pour ajouter automatiquement le token d'authentification à chaque requête si le token est présent dans le localStorage.
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Ajoute automatiquement le token à chaque requête
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
