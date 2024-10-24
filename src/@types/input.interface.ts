export interface IInput {
    placeHolder: string,
    onchange: any,
    icon?: any,
    label?: string,
    id: string,
}

export interface IOtherInput {
    inpType: string,
    placeHolder: string,
    onchange: any,
    icon?: any,
    label?: string,
    id: string,
  }

export interface ISelectInput {
    onchange: any,
    options? : Array<option>,
    icon?: any,
    label?: string,
    id: string,
  }
  
  type option = {
    value: string,
    content: string
  }

  