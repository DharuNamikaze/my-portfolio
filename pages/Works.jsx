import ProjectCards from '../components/ProjectCards';
import DesignCards from '../components/DesignCards';
import '../styles/globals.css';  

const Works = () => {
  return (
    <>
    <section className='mt-5'>
      <h1 className='font-semibold text-2xl text-center flex justify-center p-4'>Projects</h1>
      <ProjectCards />
      <h1 className='font-semibold text-2xl text-center flex justify-center p-4'>Designs</h1>
      <DesignCards />
    </section>
    </>
  )
}

export default Works