import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@/models/store';
import { remInit } from '@/utils/rem';
import '@/assets/less/global.less';

const Home = lazy(() => import(/* webpackChunkName:"home" */ '@/pages/Home'));
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>加载中.....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
);

// PWA
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// rem
remInit();
