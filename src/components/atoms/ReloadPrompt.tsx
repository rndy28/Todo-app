import styled from 'styled-components';
import { useRegisterSW } from 'virtual:pwa-register/react';

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 0;
  height: 0;
`;

const Toast = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
`;

const Message = styled.div`
  margin-bottom: 8px;
`;

const CloseButton = styled.button`
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
`;


const ReloadPrompt = () => {
  // replaced dynamically
  const buildDate = '__DATE__';
  // replaced dyanmicaly
  const reloadSW = '__RELOAD_SW__';

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // @ts-expect-error just ignore
      if (reloadSW === 'true') {
        r &&
          setInterval(() => {
            // eslint-disable-next-line no-console
            console.log('Checking for sw update');
            r.update();
          }, 20000 /* 20s for testing purposes */);
      } else {
        // eslint-disable-next-line prefer-template,no-console
        console.log('SW Registered: ' + r);
      }
    },
    onRegisterError(error) {
      // eslint-disable-next-line no-console
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <Container>
      {(offlineReady || needRefresh) && (
        <Toast>
          <Message>
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>
                New content available, click on reload button to update.
              </span>
            )}
          </Message>
          {needRefresh && (
            <CloseButton
              className="ReloadPrompt-toast-button"
              onClick={() => updateServiceWorker(true)}
            >
              Reload
            </CloseButton>
          )}
          <CloseButton onClick={close}>Close</CloseButton>
        </Toast>
      )}
    </Container>
  );
};

export default ReloadPrompt;
