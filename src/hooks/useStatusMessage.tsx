import { notification } from "antd";


export const useStatusMessage = () => {
    const [api, contextHolder] = notification.useNotification();
    
    /**
     * 
     * @param message 
     * @param description 
     * @param showProgress 
     * @param pauseOnHover 
     * @param duration 
     */
    const openNotification = (message: string, description: string, showProgress: boolean, pauseOnHover: boolean, duration: number) => {
        api.open({
        message,
        description,
        showProgress,
        pauseOnHover,
        duration,
        className: 'custom-class',
        style: {
            border: '1px solid #453BDB',
        }
        });
    };
    return { openNotification };
}