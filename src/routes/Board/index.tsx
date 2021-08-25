import { useMemo } from 'react'

import { Designer, Canvas } from '@src/designer'
import componentsMeta from '@src/designer/components-meta'

// css
import './style.scss'

export default function Board() {
  const componentsInstance = useMemo(() => {
    const result = localStorage.getItem('designerData')
    return result ? JSON.parse(result) : []
  }, [])

  return (
    <Designer
      mode={'show'}
      componentsMeta={componentsMeta}
      componentsInstance={componentsInstance}
    >
      <Canvas />
    </Designer>
  )
}
