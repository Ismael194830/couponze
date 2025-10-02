import VerticalFullSlider from '../../components/VerticalSlider/VerticalSlider'
import Diteales from '../../components/Diteales/Diteales'
import MediaBord from '../../components/MediaBord/MediaBord'
import Title from '../../components/Title/Title'

export default function Home() {
  return (
    <main>
      <VerticalFullSlider />
      <Diteales title="كوبونات خصم مميزة لهذا الأسبوع"  discreption="اكتشف أفضل العروض والخصومات الحصرية في مكان واحد! تشمل هذه الفئة كوبونات مميزة، وفرص توفير استثنائية على مختلف المنتجات والخدمات. تابعها باستمرار لتكون أول من يستفيد من أقوى التخفيضات المتوفرة."/>
      <MediaBord />
      <Diteales title="الموضة و الأزياء" />
      <Diteales title="المطاعم و المقاهي" />
       <Title
              title="كيفية استخدام كوبونات الخصم في كوبونز سوريا"
              discreption="يوفر لك موقع كوبونز جميع الكوبونات والعروض المتاحة من المتاجر المحلية في سوريا، مع تفاصيل دقيقة مثل نسبة الخصم، نوع العرض، والموقع الجغرافي للمتجر. كل ما عليك هو الضغط على زر “مشاهدة العرض” أو “عرض الكوبون” للاطلاع على التفاصيل، ثم التوجه مباشرة إلى المتجر للاستفادة من العرض."
        />
    </main>
  )
}
