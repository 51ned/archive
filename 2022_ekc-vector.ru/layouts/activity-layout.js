import { useContext } from 'react'

import dynamic from 'next/dynamic'

import { NextSeo } from 'next-seo'

import { ModalContext } from '@/components/modal/context'

import Topbar from '@/components/top-bar'
import Leftbar from '@/components/common/sidebar-left'
import ActivityHeader from '@/components/activity-header'
import Rightbar from '@/components/common/sidebar-right'
import HeaderFeats from '@/components/header-feats'
import Article from '@/components/service/'
import PricesDesc from '@/components/prices-desc'
import PricesAccordion from '@/components/prices'
import PricesFeauters from '@/components/prices-feauters'
import Contacts from '@/components/contacts'
import Form from '@/components/form'
import Footer from '@/components/footer'

const Modal = dynamic(() => import('@/components/modal'))
const MainNav = dynamic(() => import('@/components/main-nav'))
const Slider = dynamic(() => import('@/components/slider'))

import styles from '@/layouts/activity-layout.module.scss'


export default function ActivityLayout(props) { 
  const {
    specificData,
    pricesFeautersData,
    footerMenuData,
    footerOfferData,
    footerLicenseData,
    mainNavData,
    pageNavData
  } = props
  
  const link = specificData.header.phoneLink
  const code = specificData.header.phoneCode
  const number = specificData.header.phoneNumber
  const phoneData = {link, code, number}

  const sliderData = specificData.headerFeats.items[0].content.docsCollection.items
  
  const articleDesc = specificData.articleDesc
  const articleText = specificData.articleText
  const articleData = {articleDesc, articleText}

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
          <div
            data-spy-target
            id='ekspert'
          >
            <ActivityHeader { ...specificData.header } />
          </div>

          <main className={styles.layout__main}>
            <div className={styles.header_feats_wrapper}>
              <HeaderFeats { ...specificData.headerFeats } />
            </div>
            
            <section
              className={styles.article}
              data-spy-target
              id='ob-usluge'
              itemScope 
              itemType='http://schema.org/Article'
            >
              <Article { ...articleData } />
            </section>

            <section
              className={styles.prices}
              data-spy-target
              id='tseny'
            >
              <PricesDesc { ...specificData.pricesDescription } />
              <PricesAccordion { ...specificData.prices } />
              <PricesFeauters { ...pricesFeautersData } />
            </section>

            <section
              className={styles.contacts}
              data-spy-target
              id='kontakty'
            >
              <Contacts { ...specificData.contacts } />
              {/* <Form /> */}
            </section>
          </main>
        </div>

        <div className={styles.topbar_container}>
          <Topbar { ...phoneData } />
        </div>

        <div className={styles.leftbar_wrapper}>
          <Leftbar { ...specificData.breadcrumbs } />
        </div>

        <div className={styles.rightbar_wrapper}>
          <Rightbar { ...pageNavData } />
        </div>

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

      <Modal
        isOpened={isSelected === 'gallery'}
        title='Документы эксперта'
      >
        <Slider { ...sliderData } />
      </Modal>

      <Modal isOpened={isSelected === 'letter'}>
        В разработке.
      </Modal>
    </>
  )
}
