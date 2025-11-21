'use client'    //클라이언트 관련 모든 provider를 이 파일에 다 넣는다

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Provider as JotaiProver} from 'jotai'

const queryClient = new QueryClient();

export default function Providers({ children }: React.PropsWithChildren) {
    return (
        <JotaiProver>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </JotaiProver>
    )
}

