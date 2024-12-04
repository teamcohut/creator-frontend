import { useAuthContext } from "./useAuthContext";

function usePermissions () {
    const {user} = useAuthContext();

    return user.permissions
}