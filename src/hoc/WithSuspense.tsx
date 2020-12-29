import React, { Suspense } from 'react'

const WithSuspense = <P extends object>(Component:React.ComponentType<P>) => {
    return (props: any) => {
        return (
            <Suspense fallback={<div>Загрузка...</div>}>
                <Component {...props}/>
            </Suspense>
        )
    }
}

export default WithSuspense