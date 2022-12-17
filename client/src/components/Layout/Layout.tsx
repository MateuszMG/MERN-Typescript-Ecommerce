import { Container, PageWrapper } from './Layout.styled';
import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navigation />
      <PageWrapper> {children}</PageWrapper>
      <Footer />
    </Container>
  );
};
