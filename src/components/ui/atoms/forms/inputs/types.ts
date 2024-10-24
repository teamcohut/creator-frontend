export interface IInput {
    placeHolder: string,
    onchange?: any,
    other?: any,
    // hook?: any,
    icon?: any,
    label?: string,
    id: string,
}

export interface IOtherInput {
    inpType: string,
    placeHolder: string,
    onchange?: any,
    other?: any,
    icon?: any,
    label?: string,
    id: string,
  }

export interface ISelectInput {
    onchange?: any,
    other?: any,
    options? : Array<option>,
    icon?: any,
    label?: string,
    id: string,
  }
  
  type option = {
    value: string,
    content: string
  }

  