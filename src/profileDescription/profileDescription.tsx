import React from 'react';

import { useAuth } from '../hooks/useAuth';

export default function ProfileDescription() {
  const { user } = useAuth();

  console.log('user', user);

  return (
    <div>
      <div>
        <img src={user?.profile_picture} />
      </div>
    </div>
  );
}
