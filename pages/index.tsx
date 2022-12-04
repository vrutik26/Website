import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Format from '../layout/format'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
import Section0 from '../components/section0'

export default function Home() {
  return (
   
    <Format>
      <Section0></Section0>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section1></Section1>
   </Format>
    
    
  )
}
