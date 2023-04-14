import type { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { AppConfig } from '@/utils/AppConfig';

import 'cal-sans';

//import 'preline';

import { Footer4 } from '@/ui/themes/windkit/layout/footers';
import { NavBar2 } from '@/ui/themes/windkit/layout/navbars';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {

const router = useRouter();

return (

  <>

    {props.meta}

    <NavBar2 />

    <main className="content py-5 text-xl">{props.children}</main>

    <Footer4 />

    <Script src={`${router.basePath}/assets/scripts/preline.js`} />

  </>

  )

};

export { Main };

