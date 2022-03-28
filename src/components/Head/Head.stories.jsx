import React from 'react'
import Head from './Head'
import pic from '../images/me.jpeg'

export default { title: "Head", component: Head }


export const HeadExample = () => <Head props={{ name: "Luis G Suarez", role: "Senior Software Engineer", initials: "LS", imageLink: pic, waLink: "https://api.whatsapp.com/send?phone=573504967199&text=%F0%9F%92%BC" }}></Head>