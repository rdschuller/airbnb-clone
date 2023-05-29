import photoGrid from '../../public/imgs/photo-grid.png'

export default function Navbar() {
    return (
      <section className='font-poppins flex flex-col p-20'>
         <img src={photoGrid} alt="airbnb logo" className='max-w-md self-center'/>
         <h1 className='font-semibold text-4xl mb-4'>Online Experiences</h1>
         <p className=' mt-0 '>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
      </section>
       
      
    )
  }
  