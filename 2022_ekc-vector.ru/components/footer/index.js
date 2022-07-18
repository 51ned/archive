import FooterMenu from '@/components/footer/components/menu'
import FooterOffer from '@/components/footer/components/offer'
import FooterLicense from '@/components/footer/components/license'


export default function Footer(data) {
  const menu = data.footerMenuData
  const offer = data.footerOfferData
  const license = data.footerLicenseData
  
  return (
    <>
      <FooterMenu { ...menu } />
      <FooterOffer { ...offer } />
      <FooterLicense { ...license } />
    </>
  )
}
