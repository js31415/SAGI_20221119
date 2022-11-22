import { Stack, Text } from '@chakra-ui/react';
import { useVideos } from 'api/video/video.hooks';
import React from 'react';
import CompactVideoCard from './compact-video-card.component';

export default function VideoList() {
  const { data: videos, isLoading } = useVideos();

  if (isLoading) {
    return <Text>Video list is loading....</Text>;
  }

  return (
    <Stack>
      {videos?.map((video) => (
        <React.Fragment key={video.id}>
          <CompactVideoCard {...video} />
        </React.Fragment>
      ))}
    </Stack>
  );
}
