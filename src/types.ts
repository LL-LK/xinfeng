export type Strategy = 'shouter' | 'lighter' | 'weaver' | 'crosser' | 'hider';

export interface EnvelopeData {
  id: number;
  title: string;
  subtitle: string;
  strategy: Strategy;
  coverImage: string;
  pages: string[];
}

export interface AppState {
  currentScreen: 'envelopes' | 'unfolding' | 'viewer' | 'letter' | 'stamp';
  selectedEnvelope: EnvelopeData | null;
  userMessage: string;
  userName: string;
}

export interface StrategyConfig {
  name: string;
  landscape: string;
  coreGraphic: string;
  color: string;
  animation: string;
  description: string;
}
