import { useState, useEffect } from 'react';
import axios from 'axios';

const useInstagramPosts = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const apikey = 'apify_api_nevMnqFgEAE3D3JFB5GdCJoDehv8KO0uM1p5';
      const datasetURL = `https://api.apify.com/v2/datasets?token=${apikey}&unnamed=true&desc=true`;

      try {
        const response = await axios.get(datasetURL);
        const items = response?.data?.data?.items;

        if (items && items.length > 0) {
          const datasetID = items[0].id;
          const url = `https://api.apify.com/v2/datasets/${datasetID}/items?token=${apikey}&format=json`;
          const resp = await axios.get(url);

          // Filter out posts by checking if the caption contains "LOCATION" (case-insensitive)
          const filteredPosts = resp.data.filter((post) =>
            post.caption.toLowerCase().includes('location'),
          );

          setInstagramPosts(filteredPosts);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
    return () => {};
  }, []);

  return [instagramPosts, setInstagramPosts];
};

export default useInstagramPosts;
