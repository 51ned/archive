import Link from 'next/link'

import { NextSeo } from 'next-seo'


import Menu from '@/components/footer/components/menu'
import Offer from '@/components/footer/components/offer'
import License from '@/components/footer/components/license'

import { fetchFooterMenuData, fetchFooterOfferData, fetchFooterLicenseData } from '@/lib/fetch-data'

export async function getStaticProps() {
  const menuData = await fetchFooterMenuData()
  const offerData = await fetchFooterOfferData()
  const licenseData = await fetchFooterLicenseData()

  return {
    props: {menuData, offerData, licenseData}
  }
}

export default function Home(props) {
  const { menuData, offerData, licenseData} = props

  return (
    <>
      <NextSeo
        title='Главная страница – ЭКЦ «Вектор»'
        description='Проведение независимых экспертиз и оценки, оказание юридических услуг населению и юр. лицам от одного из старейших экспертных бюро России.'
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

      <p>Ошибка 404. Страницы не существует.</p>
      
      <Menu { ...menuData } />
      <Offer { ...offerData } />
      <License { ...licenseData } />
    </>
  )
}