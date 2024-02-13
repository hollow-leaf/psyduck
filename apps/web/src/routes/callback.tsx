import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 如果你使用React Router

const TwitchCallbackPage: React.FC = () => {
  const navigate = useNavigate();
  const queryString = window.location.hash.substring(1);
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('access_token');
  console.log(code)
  useEffect(() => {
    // 從URL中獲取授權碼
    if (code) {
      // 向Twitch發送請求以獲取存取權杖
      fetch(`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=74hb97lvv3rf6dnryttjdlq4omz44t&redirect_uri=http://localhost:5173/auth/callback&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // 處理存取權杖，例如將其存儲在狀態中或本地存儲中
        // 這裡可能需要一些後續處理
        // 導向回TwitchAuth頁面或其他頁面
        navigate('/twitchtest');
      })
      .catch(error => console.error('Error fetching Twitch access token:', error));
    }else{
        console.log('can not get code')
    }
  }, [code]);

  return (
    <div>
      <p>處理中...</p>
    </div>
  );
};

export default TwitchCallbackPage;