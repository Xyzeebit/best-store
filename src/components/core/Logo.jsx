import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex items-center justify-start gap-1">
    <div className="w-12 h-12 flex items-center justify-center antialiased rotate-[-15deg] bg-red-500 rounded-full font-bold text-xl text-white">
      <span>Be</span>
    </div>
    <div className="font-bold text-2xl text-green-900">
      <span>store</span>
    </div>
  </Link>
);

export default Logo;