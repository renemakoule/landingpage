import Image from 'next/image'

export default function Component() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 max-w-3xl mx-auto p-4 h-[400px]">
      <div className="bg-sky-100 rounded-lg w-[100px] h-[100px]"></div>
      <div className="row-span-2 col-span-2 w-[200px] h-[200px]">
        <Image
          src="/poket.jpg"
          alt="Femme poussant une poussette"
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="row-start-1 col-start-4 w-[100px] h-[100px]">
        <Image
          src="/poket.jpg"
          alt="Femme faisant des gestes"
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="bg-sky-100 rounded-lg row-start-2 col-start-4 w-[100px] h-[100px]"></div>
<div className='w-[100px] h-[100px]'>
  <Image
    src="/poket.jpg"
    alt="Homme en chemise bleue"
    width={200}
    height={200}
    className="w-full h-full object-cover rounded-lg"
  />
</div>

    </div>
  )
}