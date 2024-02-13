import { redirect } from "react-router-dom";

export function getAuthToken() {
    const isAuthenticated = localStorage.getItem('swiftlypro_token');
    if (!isAuthenticated) return null;

    return isAuthenticated;
};


export function tokenLoader() {
    return getAuthToken();
}

export function checkTokenLoader() {
    const isAuthenticated = getAuthToken();
  
    if (!isAuthenticated) {
      return redirect('/');
    }
  
    return null;
}