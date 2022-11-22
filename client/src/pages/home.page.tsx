import { Button, Heading, Stack } from '@chakra-ui/react';
import Layout from 'components/layout.component';
import VideoList from 'components/video-list.component';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Stack>
        <Button onClick={() => navigate('/upload')} alignSelf={'flex-end'}>
          Upload
        </Button>
        <Stack spacing={5}>
          <Heading>Video List</Heading>
          <VideoList />
        </Stack>
      </Stack>
    </Layout>
  );
}
