import TabsToAccordion from '@/components/service/components/tabs-to-accordion'

import styles from '@/components/service/index.module.scss'


export default function ServiceArticle(props) {
  const {
    articleDesc,
    articleText
  } = props
  
  return (
    <>
      <link itemProp='mainEntityOfPage' href={articleDesc.mainUrl} />
      <link itemProp='image' href={articleDesc.img} />

      <h2 className={styles.visually_hidden} itemProp='headline'>
        {articleDesc.title}
      </h2>

      <span className={styles.pseudo_title}>
        {articleDesc.pseudoTitle}
      </span>

      <div className={styles.desc} itemProp='description'>
        {articleDesc.description}  
      </div>

      <article className={styles.article} itemProp='articleBody'>
        <TabsToAccordion { ...articleText } />
      </article>

      <meta itemProp='author' content={articleDesc.author} />

      <meta content={articleDesc.sys.firstPublishedAt} itemProp='datePublished' />
      <meta content={articleDesc.sys.publishedAt} itemProp='dateModified' />
      
      <div itemProp='publisher' itemScope itemType='https://schema.org/Organization'>
        <div itemProp='logo' itemScope itemType='https://schema.org/ImageObject'>
          <img
            alt={articleDesc.logoAlt}
            className={styles.totally_hidden}
            itemProp='url image'
            src={articleDesc.logo}
          />
        </div>

        <meta itemProp='name' content={articleDesc.name} />
        <meta itemProp='telephone' content={articleDesc.phone} />
        <meta itemProp='address' content={articleDesc.address} />
      </div>
    </>
  )
}
