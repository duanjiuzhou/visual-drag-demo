import { FC } from 'react'
import DesignerStore from '.'
import { IDesignerProps } from '../types'

const Designer: FC<IDesignerProps> = ({
  mode = 'show',
  componentsMeta,
  componentsInstance,
  children,
}) => {
  return (
    <DesignerStore.Provider
      initialState={{ mode, componentsMeta, componentsInstance }}
    >
      {children}
    </DesignerStore.Provider>
  )
}

export default Designer
