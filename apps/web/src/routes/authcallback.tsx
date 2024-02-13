import React, { useEffect, useState } from 'react';

const TwitchAuth: React.FC = () => {
  const [twitchData, setTwitchData] = useState<any>({});
  const clientId: string = process.env.CLIENT_ID
  const clientSecret: string = process.env.CLIENT_SECRET
  const redirectUri: string = process.env.API_REDIRECT_URI
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('access_token');
    console.log(code)
    if (code) {
      fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}`, {
        method: 'POST'
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Now you have access token, use it to fetch user data
        fetch('https://api.twitch.tv/helix/users', {
          headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${data.access_token}`
          }
        })
        .then(response => response.json())
        .then(userData => {
          console.log(userData);
          setTwitchData(userData);
        })
        .catch(error => console.error('Error fetching Twitch user data:', error));
      })
      .catch(error => console.error('Error fetching Twitch access token:', error));
    }
  }, []);

  const handleLogin = () => {
    window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`;
  };

  return (
    <div>
      {twitchData.display_name ? (
        <div>
          <h1>Welcome, {twitchData.display_name}</h1>
          <img src={twitchData.profile_image_url} alt="Twitch Profile" />
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Twitch</button>
      )}
    </div>
  );
};

export default TwitchAuth;