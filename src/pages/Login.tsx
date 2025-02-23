
import { useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { signInWithEmail, signInWithGoogle, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      await signInWithEmail(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-up">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-moonIndigo-50">Bienvenue</h2>
          <p className="mt-2 text-moonIndigo-200">
            {isLogin
              ? "Connectez-vous pour commencer votre voyage lunaire"
              : "Créez un compte pour commencer votre voyage lunaire"}
          </p>
        </div>

        <div className="mt-8 space-y-6 bg-moonIndigo-800/30 backdrop-blur-lg p-8 rounded-2xl border border-moonIndigo-700/50">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-moonIndigo-100"
              >
                Adresse email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-moonIndigo-700 rounded-md shadow-sm bg-moonIndigo-900/50 text-moonIndigo-100 placeholder-moonIndigo-400 focus:outline-none focus:ring-2 focus:ring-moonIndigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-moonIndigo-100"
              >
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-moonIndigo-700 rounded-md shadow-sm bg-moonIndigo-900/50 text-moonIndigo-100 placeholder-moonIndigo-400 focus:outline-none focus:ring-2 focus:ring-moonIndigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-moonIndigo-900 bg-moonIndigo-50 hover:bg-moonIndigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-moonIndigo-500 transition-colors"
              >
                {isLogin ? "Se connecter" : "S'inscrire"}
              </button>
            </div>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-moonIndigo-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-moonIndigo-900 text-moonIndigo-300">
                Ou continuer avec
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={() => signInWithGoogle()}
              className="w-full flex justify-center items-center py-2 px-4 border border-moonIndigo-700 rounded-md shadow-sm text-sm font-medium text-moonIndigo-100 bg-moonIndigo-800/30 hover:bg-moonIndigo-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-moonIndigo-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
          </div>

          <div className="text-center mt-4">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-moonIndigo-300 hover:text-moonIndigo-100"
            >
              {isLogin
                ? "Pas encore de compte ? S'inscrire"
                : "Déjà un compte ? Se connecter"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
