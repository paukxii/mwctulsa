// import { useEffect, useState } from 'react';
import SectionContainer from '../../components/SectionContainer';
import Iframe from './Iframe';
import { SectionHeader } from '../../components/SectionHeader';

export default function EventSection() {

  // This is for most recent 10 videos 
  // const baseUrl =
  //   'https://api.rss2json.com/v1/api.json?rss_url=' +
  //   encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=');
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const data = await fetch(`${baseUrl}UC3JGrNBH9_uXFsah4w1g-bw`);
  //     // console.log( await data.json())
  //     const videos = await data.json();
  //     setVideos(videos.items);
  //      console.log(videos.items)
  //   };

  //   fetchVideos().catch(console.error);
  // }, []);

  return (
    <SectionContainer id='event' bgColor=''>
      <SectionHeader>
        Live/Recent<br />
        Stream
      </SectionHeader>
      <Iframe yturl='https://www.youtube.com/embed?listType=playlist&cc_load_policy=1&list=UU3JGrNBH9_uXFsah4w1g-bw'/>
    </SectionContainer>
  );
}