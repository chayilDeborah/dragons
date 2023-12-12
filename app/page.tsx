import Homepage from "./components/Homepage";
import Injective from "./components/Injective";

export default function Home() {
  return (
    <>
    <div className="flex justify-center">
      <div className='lg:max-w-[1440px] w-full '>
      <Homepage />
      <Injective />
      </div>
    </div>
    </>
  )
}
