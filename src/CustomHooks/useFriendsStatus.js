import { useState, useEffect } from 'react';

const ChatAPI = {
  subscribeToFriendStatus: () => { },
  unsubscribeFromFriendStatus: () => { },
};

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

export default useFriendStatus;
