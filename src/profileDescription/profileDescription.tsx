import { useAuth } from '../hooks/useAuth';
import profilePicture from '../assets/images/profilePicture.jpg';

export default function ProfileDescription() {
  const { user } = useAuth();

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-1/2 py-4 mx-auto my-5 shadow-md gap-y-3">
        <span className="text-2xl text-purple-500">
          {user?.first_name} {user?.last_name}
        </span>
        <span className="text-2xl text-blue-500">{user?.email}</span>
      </div>
      <div className="w-1/3 px-4 py-2 mx-auto overflow-hidden rounded-md shadow-md">
        <img src={user?.profile_picture ?? profilePicture} />
      </div>
    </div>
  );
}
