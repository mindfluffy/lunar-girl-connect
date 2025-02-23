
import { Link } from 'react-router-dom';
import StarryBackground from '../components/StarryBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <StarryBackground />
      
      <div className="text-center space-y-6 max-w-3xl animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-moonIndigo-50">
          Moon is a Girl
        </h1>
        <p className="text-xl text-moonIndigo-200 max-w-2xl mx-auto">
          Découvrez la connexion profonde entre vos cycles et les phases de la lune
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/login"
            className="px-8 py-3 rounded-full bg-moonIndigo-50 text-moonIndigo-900 font-medium hover:bg-moonIndigo-100 transition-colors"
          >
            Commencer
          </Link>
          <Link
            to="/calendar"
            className="px-8 py-3 rounded-full border border-moonIndigo-700 text-moonIndigo-100 font-medium hover:bg-moonIndigo-800/50 transition-colors"
          >
            Explorer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
