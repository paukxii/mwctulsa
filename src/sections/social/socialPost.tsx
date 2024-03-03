import { useState, useEffect } from 'react';

interface IFacebookPost {
  id: string;
  created_time: string;
  message: string;
}

const useFacebookData = (facebookPageId: string) => {
  const [facebookData, setFacebookData] = useState<IFacebookPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFacebookData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://graph.facebook.com/${facebookPageId}/posts?fields=id,created_time,message&access_token=${process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN}`
    );
    const data = await response.json();
    setFacebookData(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFacebookData();
  }, []);

  return { facebookData, isLoading };
};

export default useFacebookData;