import { ReactNode } from 'react';

export interface IDragnDrop {
  id: string;
  onchange: (file: File | null) => void;
  accept: string;
  detail?: string;
  description?: ReactNode; // Update this line to accept ReactNode
}