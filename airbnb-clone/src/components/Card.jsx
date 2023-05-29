// import athlete from '../imgs/katie-zaferes.png'
import star from '../../public/imgs/star.png'

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
      <section className='font-poppins flex flex-col w-44 m-10 text-xs grow-0 shrink-0 relative'>
        {badgeText && <div className='absolute top-2 left-2 bg-white px-1 py-1 font-bold rounded-sm'>{badgeText}</div>}
        <img src={`../../imgs/${props.img}`} alt="Katie Zaferes photo" className='rounded-md'/>
        <div className='flex pt-1 items-center gap-1'>
            <img src={star} alt="Star icon" className='w-4'/>
            <p className='font-semibold'>{props.rating}</p>
            <p>({props.reviewCount}) • {props.country}</p>
        </div>
        <p className='pt-1'>{props.title}</p>
        <div className='flex pt-1'>
            <p> <span className='font-semibold'>From ${props.price}/</span> person </p>
        </div>
      </section>
       
      
    )
  }
  