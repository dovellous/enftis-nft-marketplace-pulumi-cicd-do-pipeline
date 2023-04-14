
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { Content10, Content25, Content17 } from '@/ui/themes/windkit/components/contents/contents';
import { Header16, Header19, Header5 } from '@/ui/themes/windkit/layout/headers';

const Index = () => {
  
  return (

    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >

      <Header19 />

      <Content10 />
      <Content25 />
      <Content17 />
      <Content10 />

    </Main>

  );

};

export default Index;
