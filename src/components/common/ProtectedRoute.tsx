import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase"; // ajusta la ruta según tu proyecto

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const role = docSnap?.data()?.role;
        setIsAdmin(role === "admin");
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/login" />;
  if (!isAdmin) return <Navigate to="/" />;

  return children;
}
