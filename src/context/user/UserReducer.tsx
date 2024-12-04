export const UserReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.payload }
        case 'PROGRAMs':
            return { ...state, programs: action.payload }
        default:
            break;
    }
}