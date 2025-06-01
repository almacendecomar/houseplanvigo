
// src/authService.ts
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

// Iniciar sesión con email y contraseña
export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Registrar nuevo usuario
export const register = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Cerrar sesión
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
