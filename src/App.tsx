import { useState, useCallback, lazy, Suspense } from 'react';
import { AppState, EnvelopeData } from './types';
import EnvelopeScreen from './components/EnvelopeScreen';

const LetterViewer = lazy(() => import('./components/LetterViewer'));
const LetterScreen = lazy(() => import('./components/LetterScreen'));
const StampScreen = lazy(() => import('./components/StampScreen'));

function App() {
  const [state, setState] = useState<AppState>({
    currentScreen: 'envelopes',
    selectedEnvelope: null,
    userMessage: '',
    userName: ''
  });

  const handleEnvelopeClick = useCallback((envelope: EnvelopeData) => {
    setState(prev => ({
      ...prev,
      selectedEnvelope: envelope
    }));

    setTimeout(() => {
      setState(prev => ({
        ...prev,
        currentScreen: 'viewer'
      }));
    }, 800);
  }, []);

  const handleViewerComplete = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentScreen: 'letter'
    }));
  }, []);

  const handleSubmitLetter = useCallback((message: string, name: string) => {
    setState(prev => ({
      ...prev,
      userMessage: message,
      userName: name,
      currentScreen: 'stamp'
    }));
  }, []);

  const handleRestart = useCallback(() => {
    setState({
      currentScreen: 'envelopes',
      selectedEnvelope: null,
      userMessage: '',
      userName: ''
    });
  }, []);

  return (
    <div
      className="app-container"
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        margin: 0,
        padding: 0,
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
      }}
    >
      <div
        className="phone-frame"
        style={{
          width: '100%',
          maxWidth: 750,
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          contain: 'layout style paint'
        }}
      >
        {state.currentScreen === 'envelopes' && (
          <EnvelopeScreen
            onEnvelopeClick={handleEnvelopeClick}
            selectedEnvelope={state.selectedEnvelope}
          />
        )}

        {state.currentScreen === 'viewer' && state.selectedEnvelope && (
          <Suspense fallback={<div style={{width:'100%',height:'100%',background:'#000',display:'flex',justifyContent:'center',alignItems:'center',color:'#FFD700'}}>加载中...</div>}>
            <LetterViewer
              envelope={state.selectedEnvelope}
              onComplete={handleViewerComplete}
            />
          </Suspense>
        )}

        {state.currentScreen === 'letter' && state.selectedEnvelope && (
          <Suspense fallback={<div style={{width:'100%',height:'100%',background:'#F0E6D2',display:'flex',justifyContent:'center',alignItems:'center',color:'#C41E3A'}}>加载中...</div>}>
            <LetterScreen
              envelope={state.selectedEnvelope}
              onSubmit={handleSubmitLetter}
            />
          </Suspense>
        )}

        {state.currentScreen === 'stamp' && state.selectedEnvelope && (
          <Suspense fallback={<div style={{width:'100%',height:'100%',background:'#F0E6D2',display:'flex',justifyContent:'center',alignItems:'center',color:'#C41E3A'}}>加载中...</div>}>
            <StampScreen
              envelope={state.selectedEnvelope}
              userName={state.userName}
              onRestart={handleRestart}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
