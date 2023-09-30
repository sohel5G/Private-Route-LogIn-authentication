import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC_mjFA3z01U9qv1jbmAWkjrUFKuuTotcs",
    authDomain: "private-route-870fb.firebaseapp.com",
    projectId: "private-route-870fb",
    storageBucket: "private-route-870fb.appspot.com",
    messagingSenderId: "245700692947",
    appId: "1:245700692947:web:239b07471cb467ec0c3d26"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

