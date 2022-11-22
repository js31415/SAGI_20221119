import { Button, Heading, Input, Select, Stack, Text } from '@chakra-ui/react';
import { useCategories } from 'api/category';
import { VideoPayload } from 'api/interfaces';
import { useVideoUpload } from 'api/video/video.hooks';
import Layout from 'components/layout.component';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toBase64 } from 'utils';

const initialForm: VideoPayload = {
  title: '',
  categoryId: '',
  file: {
    fileName: '',
    contentType: '',
    data: '',
  },
};

export default function UploadPage() {
  const navigate = useNavigate();
  const { data: categories, isLoading } = useCategories();
  const [error, setError] = useState('');
  const { mutate: uploadVideo, isLoading: videoUploadIsLoading } =
    useVideoUpload();
  const [form, setForm] = useState(initialForm);

  const formValidation = Object.values(form).filter((attr) => attr === '');
  const formIsInvalid = formValidation.length > 0;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [event.target.name]: event.target.value });

  const hanleChangeVideoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0];
    const data = await toBase64(file);

    if (file && data) {
      setForm({
        ...form,
        file: {
          ...form.file,
          fileName: file.name,
          contentType: file.type,
          data: String(data),
        },
      });
    }
  };

  const handleSubmit = () => {
    if (!formIsInvalid) {
      uploadVideo(form, {
        onSuccess: () => {
          navigate('/');
        },
        onError: () => {
          setError('Opps something went wrong please try again later.');
        },
      });
    }
  };

  if (isLoading) {
    return <>......Loading</>;
  }

  return (
    <Layout>
      <>
        <Stack spacing={3}>
          <Heading>Upload your video</Heading>
          <Stack spacing={3}>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Video title"
              value={form.title}
              size="lg"
              type="text"
            />
            <Input
              onChange={hanleChangeVideoUpload}
              size="lg"
              type="file"
              accept="video/mp4, video/quicktime"
            />
            <Select
              name="categoryId"
              onChange={handleInputChange}
              value={form.categoryId}
              placeholder="Choose a category"
            >
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
            <Button
              disabled={videoUploadIsLoading || formIsInvalid}
              onClick={handleSubmit}
              alignSelf={'flex-start'}
            >
              Upload
            </Button>
            {error && <Text>{error}</Text>}
            {videoUploadIsLoading && (
              <Text>Please wait video is uploading....</Text>
            )}
          </Stack>
        </Stack>
      </>
    </Layout>
  );
}
