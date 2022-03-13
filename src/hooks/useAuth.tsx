import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { RegularPopupVariants } from '../constants/componentVariants.constants';
import { Endpoints } from '../constants/endpoint.constants';
import { RoutePaths } from '../constants/route.constants';
import { SessionKeys } from '../constants/session.constants';
import { IUser } from '../interfaces/user.interfaces';
import { postData } from '../services/request.services';
import { usePopup } from './usePopup';
import useStorage from './useStorage';

interface IAuthContext {
  user: null | IUser;
  login: (userData: FieldValues) => void;

  logout: () => void;
  loading: boolean;
}

export const authContext = createContext<IAuthContext>({
  user: null,
  loading: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  return useContext(authContext);
};

function useAuthProvider() {
  const [user, setUser] = useState<null | IUser>(null);
  const [loading, setLoading] = useState(false);
  const { providePopupSettings } = usePopup();
  const navigate = useNavigate();
  const {
    saveDataToStorage,
    // getDataFromStorage,
    removeDataFromStorage,
  } = useStorage();

  // const userIdFromSession = getDataFromStorage(SessionKeys.user);

  const login = async (userData: FieldValues) => {
    setLoading(true);
    const { data, status, message } = await postData(
      Endpoints.baseUrl('login'),
      userData
    );

    const isSuccess = status === 'success';

    providePopupSettings({
      isVisible: true,
      text: message,
      popupVariant: isSuccess
        ? RegularPopupVariants.SUCCESS
        : RegularPopupVariants.ERROR,
    });

    if (isSuccess) {
      setUser(data);
      saveDataToStorage(SessionKeys.user, data.id);
    }

    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    removeDataFromStorage(SessionKeys.user);
  };

  useEffect(() => {
    if (user) {
      navigate(RoutePaths.HOME);
    }
  }, [user]);

  return {
    user,
    loading,
    login,
    logout,
  };
}

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const authData = useAuthProvider();

  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
};
