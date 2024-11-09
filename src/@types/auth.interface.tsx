export interface IAuthContext {
    auth: Record<string, any> | null; 
    setAuth: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    persist: boolean;
    setPersist: React.Dispatch<React.SetStateAction<boolean>>;
  }

export interface ISuccessCard {
    title: string,
    description: string,
    children?: React.ReactNode,
    icon: React.ReactNode
}