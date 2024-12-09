import { ReactNode } from "react";

export interface IProgramState {
  programs: Record<string, any> | null;
  activeProgram: Record<string, any> | null;
  cohorts: Record<string, any> | null;
  activeCohort: Record<string, any> | null;
  sessions: Record<string, any> | null;
  participants: Record<string, any> | null;
}

export interface IProgramProvider {
  children: ReactNode
}

export type TProgramAction =
  | { type: 'PROGRAMS'; payload: Record<string, any> }
  | { type: 'ACTIVE_PROGRAM'; payload: Record<string, any> }
  | { type: 'COHORTS'; payload: Record<string, any> }
  | { type: 'ACTIVE_COHORT'; payload: Record<string, any> }
  | { type: 'SESSIONS'; payload: Record<string, any> }
  | { type: 'PARTICIPANTS'; payload: Record<string, any> }