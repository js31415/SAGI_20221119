import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react';
import { IVideo } from 'api/interfaces';

export default function CompactVideoCard(props: IVideo) {
  const { fileUrl, thumbnailUrl, title, category } = props;

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '940px' }}
        height={{ sm: '476px', md: '27rem' }}
        direction={{ base: 'column', md: 'row' }}
        boxShadow={'2xl'}
        padding={4}
      >
        <Box>
          <video
            title={title}
            width="620"
            src={fileUrl}
            poster={thumbnailUrl}
            controls
          />
        </Box>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {title}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {category.name}
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
