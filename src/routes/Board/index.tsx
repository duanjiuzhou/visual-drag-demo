import { useMemo } from 'react'

import { Designer, Canvas } from '@src/designer'
import componentsMeta from '@src/designer/components-meta'

// utils
import { getUrlParam } from '@src/utils'

// css
import './style.scss'

export default function Board() {
  const id = getUrlParam('id')

  const componentsInstance = useMemo(() => {
    if (!id) {
      return []
    }
    const result = localStorage.getItem(id)
    return result ? JSON.parse(result) : []
  }, [id])

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
