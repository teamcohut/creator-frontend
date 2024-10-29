export interface IInput {
    placeHolder: string,
    onchange?: any,
    other?: any,
    // hook?: any,
    icon?: React.ReactNode,
    label?: string,
    id: string,
}

export interface IOtherInput {
    inpType: string,
    placeHolder: string,
    onchange?: any,
    other?: any,
    icon?: React.ReactNode,
    label?: string,
    id: string,
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
    onchange?: any,
    other?: any,
    options? : Array<option>,
    icon?: React.ReactNode,
    label?: string,
    id: string,
  }
  
  type option = {
    value: string,
    content: string
  }

export interface ITextAreaInput {
  label?: string,
  placeHolder: string,
  onchange: any,
  id: string
}
