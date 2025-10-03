import React from 'react'
import Title from '../Title/Title'
import ControlledCarousel from '../Curosel/Curosel'

export default function MediaBord() {
  return (
    <section className='MediaBordSection'>
        <Title 
        title="أفضل موقع كوبونات خصم في سوريا"
        discreption="وفر في مشترياتك اليومية! يقدم لك موقع كوبونز مجموعة من أفضل كوبونات الخصم والعروض الحصرية من المتاجر والمراكز الخدمية داخل سوريا. اكتشف خصومات في مجالات متنوعة تشمل الأزياء، المطاعم، صالونات التجميل، العيادات، مراكز التدريب، المقاهي، محلات الأحذية والإكسسوارات، وغير ذلك الكثير."
        />
        <ControlledCarousel />
    </section>
  )
}
