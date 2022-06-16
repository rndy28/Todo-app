import  { createRoot } from 'react-dom/client';
import App from 'App';


createRoot(document.getElementById('app')!).render(
  //https://github.com/atlassian/react-beautiful-dnd/issues/2350
  // until the issue is fixed, i am leaving this as it is
  <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
