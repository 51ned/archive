import { useContext } from 'react'

import dynamic from 'next/dynamic'

import { NextSeo } from 'next-seo'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

import { ModalContext } from '@/components/modal/context'

import Topbar from '@/components/top-bar'
import Leftbar from '@/components/common/sidebar-left'
import Contacts from '@/components/contacts'
import Form from '@/components/form'
import Footer from '@/components/footer'

const Modal = dynamic(() => import('@/components/modal'))
const MainNav = dynamic(() => import('@/components/main-nav'))

import styles from '@/layouts/kind-layout.module.scss'


const Subtitle = ({ children }) => <span className={styles.subtitle}>{children}</span>
const Paragraph = ({ children }) => <p className={styles.paragraph}>{children}</p>

const RICH_TEXT_OPTIONS = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Subtitle>{text}</Subtitle>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>
  }
}


export default function KindLayout(props) { 
  const {
    specificData,
    footerMenuData,
    footerOfferData,
    footerLicenseData,
    mainNavData
  } = props

  const link = specificData.header.phoneLink
  const code = specificData.header.phoneCode
  const number = specificData.header.phoneNumber
  const phoneData = {link, code, number}

  const articleDesc = specificData.articleDesc
  const articleText = specificData.article.text.json
  const footerData = {footerMenuData, footerOfferData, footerLicenseData}

  let { isSelected } = useContext(ModalContext)

  return (
    <>
      <NextSeo
        title={specificData.head.title}
        description={specificData.head.description}
        keywords={specificData.head.keywords}
        openGraph={{
          type: `${specificData.head.ogtype}`,
          title: `${specificData.head.ogtitle}`,
          description: `${specificData.head.ogdescription}`,
          url: `${specificData.head.ogurl}`,
          images: [
            {
              url: `${specificData.head.ogimage}`
            }
          ]}}
          additionalLinkTags={[
            {
              href: '/img/favicon/apple-touch-icon-180x180-precomposed.png',
              rel: 'apple-touch-icon-precomposed',
              sizes: '180x180'
            },
            {
              href: '/img/favicon/apple-touch-icon-152x152-precomposed.png',
              rel: 'apple-touch-icon-precomposed',
              sizes: '152x152'
            },
            {
              href: '/img/favicon/apple-touch-icon-144x144-precomposed.png',
              rel: 'apple-touch-icon-precomposed',
              sizes: '144x144'
            },
            {
              href: '/img/favicon/apple-touch-icon-120x120-precomposed.png',
              rel: 'apple-touch-icon-precomposed',
              sizes: '120x120'
            },
            {
              href: '/img/favicon/apple-touch-icon-114x114-precomposed.png',
              rel: 'apple-touch-icon-precomposed',
              sizes: '114x114'
            },
            {
              href: '/img/favicon/apple-touch-icon-76x76-precomposed.png',
              rel: 'apple-touch-icon-precomposed',
              sizes: '76x76'
            },
            {
              href: '/img/favicon/apple-touch-icon-72x72-precomposed.png',
              rel: 'apple-touch-icon-precomposed',
              sizes: '72x72'
            },
            {
              href: '/img/favicon/apple-touch-icon-57x57-precomposed.png',
              rel: 'apple-touch-icon-precomposed',
              sizes: '57x57'
            },
            {
              href: '/img/favicon/apple-touch-icon.png',
              rel: 'shortcut icon',
            },
            {
              href: '/img/favicon/touch-icon-192x192.png',
              rel: 'icon',
              sizes: '192x192'
            },
            {
              href: '/img/favicon/touch-icon-128x128.png',
              rel: 'icon',
              sizes: '128x128'
            },
            {
              href: '/img/favicon/',
              rel: '',
              sizes: ''
            }
          ]}
      />

      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.temp_wrapper}>
            <header className={styles.temp_header}>
              <div className={styles.topbar_container}>
                <Topbar { ...phoneData } />
              </div>

              <h1 className={styles.temp_title}>{specificData.header.title}</h1>

              <p>Страница в разработке.</p>
            </header>
          </div>

          <main>
            <section
              className={styles.article}
              itemScope 
              itemType='http://schema.org/Article'
            >
              <link itemProp='mainEntityOfPage' href={articleDesc.mainUrl} />
              <link itemProp='image' href={articleDesc.img} />

              <h2 className={styles.visually_hidden} itemProp='headline'>
                {articleDesc.title}
              </h2>

              <span className={styles.pseudo_title}>
                {articleDesc.pseudoTitle}
              </span>

              <div className={styles.paragraph} itemProp='description'>
                {articleDesc.description}  
              </div>

              <article itemProp='articleBody'>
                {documentToReactComponents(articleText, RICH_TEXT_OPTIONS)}
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
              </div>

              <meta itemProp='name' content={articleDesc.name} />
              <meta itemProp='telephone' content={articleDesc.phone} />
              <meta itemProp='address' content={articleDesc.address} />
            </section>
            
            <section className={styles.contacts}>
              <Contacts { ...specificData.contacts } />
              {/* <Form /> */}
            </section>
          </main>
        </div>

        <div className={styles.leftbar_wrapper}>
          <Leftbar { ...specificData.breadcrumbs } />
        </div>

        <div className={styles.rightbar_wrapper} />

        <footer className={styles.footer}>
          <Footer { ...footerData } />
        </footer>
      </div>

      <Modal
        isOpened={isSelected === 'nav'}
        title='Главное меню'
      >
        <MainNav { ...mainNavData } />
      </Modal>
    </>
  )
}
