import { useParams } from 'react-router-dom'
import './Search.css'
import CouponCard from '../../components/CouponCard/CouponCard'

export default function Search() {

  const {code} = useParams()
  
  return (
    <section className='GeneralSearch'>
      <div className="AllProducte">
      <h2> نتائج البحث عن {code} :</h2>
            <CouponCard/>
    </div>
    </section>
  )
}
