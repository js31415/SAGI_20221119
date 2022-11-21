import { Container } from '@chakra-ui/react';
import { ReactElement } from 'react';

export default function Layout(props: { children: ReactElement }): JSX.Element {
  const { children } = props;
  return (
    <Container pt={10} maxWidth={'8xl'}>
      {children}
    </Container>
  );
}
