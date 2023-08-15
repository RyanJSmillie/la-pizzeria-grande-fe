import React, { useEffect, useState } from "react";
import InstaGrid from "./InstaGrid";
import { InstaImageId, InstaItem } from "../../../interfaces/InstaFeed";

const InstaFeed = () => {
  const [instaItems, setInstaItems] = useState([]);

  const userId = process.env.REACT_APP_INSTAGRAM_USER_ID;
  const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_CODE;
  const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;

  useEffect(() => {
    const fetchMedia = async (id: string) => {
      const mediaUrl = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,permalink`;

      const res = await fetch(mediaUrl);
      const json = await res.json();

      const instaItem: InstaItem = {
        permalink: json.permalink,
        mediaUrl: json.media_url,
      };

      return instaItem;
    };

    const doFetch = async () => {
      if (!userId || !accessToken) {
        console.log("userId or accessToken is undefined: ", {
          userId,
          accessToken,
        });
        return;
      }

      const res: Response = await fetch(instaUrl);
      const json: InstaImageId[] = (await res.json()).data;

      const fetchedItems = [];

      for (let i = 0; i < json.length && i < 3; i++) {
        const item = json[i];
        const itemId = item.id;
        const instaItem = await fetchMedia(itemId);
        fetchedItems.push(instaItem);
      }

      setInstaItems(fetchedItems);
    };

    doFetch();
  }, [userId, accessToken, instaUrl]);

  return <InstaGrid items={instaItems} />;
};

export default InstaFeed;
