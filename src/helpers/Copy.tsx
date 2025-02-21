import { notification } from "antd";


export const Copy = (text: string) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            notification.success({message: "Copied"})            
            return true;
        })
        .catch(err => {
            return false;
        });
}