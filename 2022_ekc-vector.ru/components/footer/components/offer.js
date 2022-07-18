import styles from '@/components/footer/components/offer.module.scss'


export default function FooterOffer(props) {
  const offer = props?.data?.offer

  return (
    <div className={styles.offer}>
      <address className={styles.offer__address}>
        {offer.intro}&nbsp;
        <a href={offer.link.url} title={offer.link.title}>
          {offer.link.text}
        </a>,&nbsp;
        {offer.outro}
      </address>
    </div>
  )
}
