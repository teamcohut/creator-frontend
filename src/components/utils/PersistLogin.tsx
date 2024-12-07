import React, { FC, ReactNode, useEffect, useState } from 'react'
import useRefreshToken from '../../hooks/auth/useRefreshToken';
import { useAuthContext } from '../../hooks/auth/useAuthContext';

const PersistLogin: FC<IPersistLogin> = ( { children } ) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const refresh = useRefreshToken()
    const { context } = useAuthContext()

    useEffect(() => {
      let isMounted = true

        const verifyRefreshToken = async () => {
            try {
            await refresh();
            } catch (err) {
            console.log(err);
            } finally {
            isMounted && setIsLoading(false);
            }
        };

      !context?.authToken ? verifyRefreshToken() : setIsLoading(false)

      return () => {
        isMounted = false
      }
    }, [context?.authToken, refresh])
    
  return (
    <>
        {
            isLoading ? <h1>Loading...</h1> : <>{children}</>
        }
    </>
  )
}

interface IPersistLogin {
    children : ReactNode
}

export default PersistLogin