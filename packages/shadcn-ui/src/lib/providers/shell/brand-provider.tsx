import { PropsWithChildren, createContext, useContext } from 'react';
import { IBrand } from '../../types';

export const DEFAULT_BRAND: IBrand = {};

export const AuthBrand = createContext<IBrand>(DEFAULT_BRAND);

export const useBrand = () => useContext(AuthBrand);

export interface IBrandProviderProps {
  brand?: IBrand;
}

export const BrandProvider = ({
  brand,
  children,
}: IBrandProviderProps & PropsWithChildren) => {
  const context: IBrand = { ...DEFAULT_BRAND, ...brand };

  return <AuthBrand.Provider value={context}>{children}</AuthBrand.Provider>;
};
