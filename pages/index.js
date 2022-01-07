import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import styles from '../styles/Layout.module.css'

HomePage.getInitialProps = async (ctx) => {
  const options = {headers: new Headers({'Content-Type': 'application/json'})}
  const resEN = await fetch('https://cms.ohbiohealth.club/documents', {
    method: 'GET', ...options
  })
  const resZH = await fetch('https://cms.ohbiohealth.club/documents?_locale=zh-Hant&&', {
    method: 'GET', ...options
  })
  const dataEN = await resEN.json()
  const dataZH = await resZH.json()

  return { 
      data: {
          about: {
            en: dataEN.filter(item=> item.type==='aboutus')[0].text,
            zh: dataZH.filter(item=> item.type==='aboutus')[0].text
          },
          technology: {
            en: dataEN.filter(item=> item.type==='technology')[0].text,
            zh: dataZH.filter(item=> item.type==='technology')[0].text
          },
          BM: {
            en: dataEN.filter(item=> item.type==='BMfunctions')[0].text,
            zh: dataZH.filter(item=> item.type==='BMfunctions')[0].text
          },
          QM: {
            en: dataEN.filter(item=> item.type==='QMfunctions')[0].text,
            zh: dataZH.filter(item=> item.type==='QMfunctions')[0].text
          },
          BES: {
            en: dataEN.filter(item=> item.type==='BESfunctions')[0].text,
            zh: dataZH.filter(item=> item.type==='BESfunctions')[0].text
          },
          SEG: {
            en: dataEN.filter(item=> item.type==='SEGfunctions')[0].text,
            zh: dataZH.filter(item=> item.type==='SEGfunctions')[0].text
          },
          contact: {
            en: dataEN.filter(item=> item.type==='contact')[0].text,
            zh: dataZH.filter(item=> item.type==='contact')[0].text
          }
      }
  }
}

export default function HomePage({ currentUser, data }) {
  const [aboutContent, setAboutContent] = useState(data.about.en)
  const [technologyContent, setTechnologyContent] = useState(data.technology.en)
  const [BMContent, setBMContent] = useState(data.BM.en)
  const [QMContent, setQMContent] = useState(data.QM.en)
  const [BESContent, setBESContent] = useState(data.BES.en)
  const [SEGContent, setSEGContent] = useState(data.SEG.en)
  const [contactContent, setContactContent] = useState(data.contact.en)

  useEffect(() => {
    setAboutContent(data.about.en)
    setTechnologyContent(data.technology.en)
    setBMContent(data.BM.en)
    setQMContent(data.QM.en)
    setBESContent(data.BES.en)
    setSEGContent(data.SEG.en)
    setContactContent(data.contact.en)
  },[])

  return (
    <div>
      <Hero />
      <div id="about" className={styles.container}>
          <h1>About us</h1>
          <p>{aboutContent}</p>
      </div>
      <div id="technology" className={styles.container}>
          <h1>Technology</h1>
          <p>{technologyContent}</p>
      </div>
      <div id="services" className={styles.container}>
            <h1>Services</h1>
            <img src="https://cms.ohbiohealth.club/uploads/Onour_224eb9361d.png"/>
            <img src="https://cms.ohbiohealth.club/uploads/woopie_27f9b598d3.png"/>
            <h1>Partners</h1>
            <img src="https://cms.ohbiohealth.club/uploads/cyberport_d8cac9ac3f.png"/>
            <img src="https://cms.ohbiohealth.club/uploads/jade_16a737d4f2.png"/>
      </div>
      <div id="productsBM" className={styles.container}>
          <h1>BM</h1>
          <p>{BMContent}</p>
      </div>
      <div id="productsQM" className={styles.container}>
          <h1>QM</h1>
          <p>{QMContent}</p>     
      </div>
      <div id="productsBES" className={styles.container}>
            <h1>BES</h1>
            <p>{BESContent}</p>
      </div>
      <div id="productsSEG" className={styles.container}>
            <h1>SEG</h1>
            <p>{SEGContent}</p>
      </div>
      <div id="faq" className={styles.container}>
            <h1>FAQ</h1>
      </div>
      <div id="contact" className={styles.container}>
            <h1>Contact</h1>
            <p>{contactContent}</p>
      </div>
    </div>
  )
}
