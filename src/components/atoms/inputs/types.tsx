import { ChangeEvent } from "react"

export interface IEmailInput {
  id: string,
  label?: string,
  placeholder: string,
  onchange(e: ChangeEvent<HTMLInputElement>): void,
  icon?: React.ReactNode,
}

export interface INumberInput {
  id: string,
  label?: string,
  placeHolder: string,
  icon?: React.ReactNode,
  onchange(e: ChangeEvent<HTMLInputElement>): void,
}


export interface IPasswordInput {
  id: string;
  placeHolder: string;
  icon?: React.ReactNode;
  label: string;
  showStrength: Boolean;
  valid: Boolean;
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
  placeHolder: string,
  onchange(e: ChangeEvent<HTMLTextAreaElement>): void,
}

export interface ITextInput {
  id: string,
  placeHolder: string,
  icon?: React.ReactNode,
  label?: string,
  onchange(e: ChangeEvent<HTMLInputElement>): void,
}

export interface ISearchInput {
  id: string,
  placeHolder: string,
  label?: string,
  onchange(e: ChangeEvent<HTMLInputElement>): void
}

export interface IDragnDrop {
  id: string
  label?: string,
  detail: string,
  onchange?: (file: File | null) => void;
}