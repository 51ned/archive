import { YMaps, Map, Placemark } from 'react-yandex-maps'

import styles from '@/components/map.module.scss'


export default function OurMap() {
  return (
    <YMaps>
      <Map
        className={styles.map}
        defaultState={{
          center: [55.75, 37.57],
          controls: ['zoomControl', 'fullscreenControl'],
          zoom: 9
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark defaultGeometry={[55.759441, 37.637407]} />
      </Map>
    </YMaps>
  )
}