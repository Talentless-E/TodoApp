import { NewsBox, AnimatedTypography } from "./NewsFeedStyles";
import React, { useState} from "react";
import { useQuery } from "react-query";

const fetchNews = async (pageNum) => {
   return await fetch(
      `${
        import.meta.env.VITE_API_URL
     }everything?q=programming&pageSize=1&page=${pageNum}&searchIn=title&apiKey=${
        import.meta.env.VITE_API_KEY
     }`
   ).then(res => {
    if (res.status !== 200){
        throw new Error('Failed to fetch', res.status)
    }
    return res.json();
   })
};

const NewsFeed = () => {
   const [text, setText] = useState('');
   const [pageNum, setPageNum] = useState(1);
   const { isError } = useQuery(["news", pageNum], () => fetchNews(pageNum),{
    onSuccess: (data) => {
        setText(data.articles[0].title)
        const refetchData = setInterval(() => {
            setPageNum(prev => prev + 1)
        }, 15000)
        return () => clearInterval(refetchData)
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false
   },
   );
   return (
      <NewsBox>
         <AnimatedTypography>{isError ? 'Seems we reached news limit for today, sry buddy :(' : text}</AnimatedTypography>
      </NewsBox>
   );
};

export default NewsFeed;
