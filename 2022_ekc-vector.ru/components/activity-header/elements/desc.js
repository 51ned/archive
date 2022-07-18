import useWindowSize from 'hooks/use-window-size'

import styles from '@/components/activity-header/elements/desc.module.scss'


export default function Content(data) {
  const { width } = useWindowSize();

  let isDesktop = true

  if (width <= 1280) {
    isDesktop = false
  }

  const descs = data?.desc?.map(text => (
    [...[
      text.onDesktopLine && Object.values(text.onDesktopLine).join(''),
      text.onDesktop2ndLine && Object.values(text.onDesktop2ndLine).join(''),
      text.onDesktop3rdLine && Object.values(text.onDesktop3rdLine).join(''),
      text.onMobileLine && Object.values(text.onMobileLine).join('')
    ]]
  ))

  const renderFullPretitle = () => {
    return (
      <>
        {data.preTitle1stLine}
        {data.preTitle2ndLine}
        <br className={styles.line_break} />
        {data.preTitle3rdLine}
      </>
    )
  }

  const renderCroppedPretitle = () => {
    return (
      <>
        {data.preTitle1stLine}
        <br />
        {data.preTitle3rdLine}
      </>
    )
  }

  const renderFullDesc = () => {
    return (
      descs.map((text, index) => (
        <li className={styles.list__item} key={index}>
          {text[0]} <br />
          {text[1] && text[1]} <br />
          {text[2] && text[2]}
        </li>
      ))
    )
  }

  const renderCroppedDesc = () => {
    return (
      descs.map((text, index) => (
        <li className={styles.list__item} key={index}>
          {text[3]}
        </li>
      ))
    )
  }
  
  return (
    <>
      <p className={styles.pre_title}>
        {isDesktop ? renderFullPretitle() : renderCroppedPretitle()}
      </p>
      <h1 className={styles.title}>
        {data.title}
      </h1>
      <ul className={styles.list}>
        {isDesktop ? renderFullDesc() : renderCroppedDesc()}
      </ul>
    </>
  )
}
