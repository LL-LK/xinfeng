import { useState } from 'react';
import { AppState, EnvelopeData } from './types';
import EnvelopeScreen from './components/EnvelopeScreen';
import LetterViewer from './components/LetterViewer';
import LetterScreen from './components/LetterScreen';
import StampScreen from './components/StampScreen';

function App() {
  const [state, setState] = useState<AppState>({
    currentScreen: 'envelopes',
    selectedEnvelope: null,
    userMessage: '',
    userName: ''
  });

  const handleEnvelopeClick = (envelope: EnvelopeData) => {
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
  };

  const handleViewerComplete = () => {
    setState(prev => ({
      ...prev,
      currentScreen: 'letter'
    }));
  };

  const handleSubmitLetter = (message: string, name: string) => {
    setState(prev => ({
      ...prev,
      userMessage: message,
      userName: name,
      currentScreen: 'stamp'
    }));
  };

  const handleRestart = () => {
    setState({
      currentScreen: 'envelopes',
      selectedEnvelope: null,
      userMessage: '',
      userName: ''
    });
  };

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
        padding: 0
      }}
    >
      <div
        className="phone-frame"
        style={{
          width: '100%',
          maxWidth: 750,
          height: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {state.currentScreen === 'envelopes' && (
          <EnvelopeScreen
            onEnvelopeClick={handleEnvelopeClick}
            selectedEnvelope={state.selectedEnvelope}
          />
        )}

        {state.currentScreen === 'viewer' && state.selectedEnvelope && (
          <LetterViewer
            envelope={state.selectedEnvelope}
            onComplete={handleViewerComplete}
          />
        )}

        {state.currentScreen === 'letter' && state.selectedEnvelope && (
          <LetterScreen
            envelope={state.selectedEnvelope}
            onSubmit={handleSubmitLetter}
          />
        )}

        {state.currentScreen === 'stamp' && state.selectedEnvelope && (
          <StampScreen
            envelope={state.selectedEnvelope}
            userName={state.userName}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
