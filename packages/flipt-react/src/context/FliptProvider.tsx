import React, { useMemo } from 'react';
import { createFliptSDK, FlipSDKInstance } from '@betrybe/flipt-sdk';
import { createContext, ReactNode } from 'react';

type FliptProviderProps = {
  flipt: FlipSDKInstance;
  uri: string;
  children: ReactNode;
};

export const FliptContext = createContext<Omit<
  FliptProviderProps,
  'children'
> | null>(null);

function FliptProvider({
  children,
  uri,
}: Omit<FliptProviderProps, 'flipt'>): ReactNode {
  const flipt = useMemo(() => createFliptSDK({ uri }), [uri]);

  const value = useMemo(
    () => ({
      flipt,
      uri,
    }),
    [flipt, uri],
  );

  return (
    <FliptContext.Provider value={value}>{children}</FliptContext.Provider>
  );
}

export default FliptProvider;
