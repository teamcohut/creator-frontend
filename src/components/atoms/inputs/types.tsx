import { ChangeEvent, ReactNode } from "react"

export interface IEmailInput {
  id: string,
  label?: string,
  placeholder: string,
  onchange(e: ChangeEvent<HTMLInputElement>): void,
  icon?: React.ReactNode,
  value?: string,
}

export interface INumberInput {
  id: string,
  label?: string,
  placeHolder: string,
  icon?: React.ReactNode,
  onchange(e: ChangeEvent<HTMLInputElement>): void,
}

export interface IDateInput {
  id: string,
  label?: string,
  placeHolder: string,
  icon?: React.ReactNode,
  onchange(e: ChangeEvent<HTMLInputElement>): void,
  value?: string
}

export interface ITimeInput {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  placeHolder?: string;
  defaultValue?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}


export interface IPasswordInput {
  id: string;
  placeHolder: string;
  icon?: React.ReactNode;
  label: string;
  showStrength?: Boolean;
  valid?: Boolean;
  onchange(e: ChangeEvent<HTMLInputElement>): void
}

export interface IOtherInput {
  id: string,
  label?: string,
  inpType: string,
  placeHolder: string,
  other?: any,
  icon?: React.ReactNode,
  onchange(e: ChangeEvent<HTMLInputElement>): void,
}

export interface IRadioInput {
  icon?: React.ReactNode,
  label?: string,
  id: string,
  name: string,
  selected: boolean,
  click: any
}

export interface ISelectInput {
  id: string,
  options: Array<option>,
  icon?: React.ReactNode,
  label?: string,
  onchange(e: ChangeEvent<HTMLSelectElement>): void,
}

type option = {
  value: string,
  content: string
}

export interface ICountryInput {
  id: string,
  options?: Array<option>,
  icon?: React.ReactNode,
  label?: string,
  onchange: (countryCode: Country) => void;
}

export interface Country {
  name: string;
  flag: string;
  code: string;
}


export interface ITextAreaInput {
  id: string
  label?: string,
  value?: string,
  placeHolder: string,
  onchange(e: ChangeEvent<HTMLTextAreaElement>): void,
}

export interface ITextInput {
  label?: string;
  id: string;
  icon?: React.ReactNode;
  placeHolder?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value?: string;
  tracks?: string[];
  onRemove?: (index: number) => void;
}



export interface ISearchInput {
  id: string,
  placeHolder: string,
  label?: string,
  width?: number,
  onchange(e: ChangeEvent<HTMLInputElement>): void
}

export interface IDragnDrop {
  id: string
  label?: string,
  detail: string,
  onchange?: (file: File | null) => void;
  icon?: ReactNode;
}
