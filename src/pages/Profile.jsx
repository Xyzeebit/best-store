import { Layout } from "../components/core"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.user);
  const navigate = useNavigate();

    useEffect(() => {
        if (!user.isLoggedIn) {
          navigate("/");
        }
    }, [navigate, user.isLoggedIn]);

    useEffect(() => {
        document.title = `Bestore | Account`;
    }, [])
  
  return (
    <Layout renderHeader={true}>
      {user && user.isLoggedIn && (
        <div className="px-4 md:px-16 py-16">
        <div className="rounded overflow-hidden  bg-white shadow">
          <h1 className="px-4 py-6 mb-4 bg-gray-300 font-bold text-green-900">
            User profile
          </h1>
          <div className="text-red-500 font-bold text-3xl m-auto w-28 h-28 bg-white rounded-full flex justify-center items-center border-2">
            {user.name.split(' ')[0].substring(0, 1)}{user.name.split(' ')[1].substring(0, 1)}
          </div>
          <p className="text-center font-semibold p-4">{user.name}</p>
          <hr />
          <div className="p-4">
            <Link
              className="font-semibold border-2 border-gray-300 bg-white rounded-3xl px-8 py-2 text-sm hover:bg-gray-300"
              to="/signout">
              Sign out
            </Link>
          </div>
        </div>
        </div>
      )}
    </Layout>
  );
}

export default Profile;