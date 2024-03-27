
export default function Iframe({yturl} : {yturl: string}) {
  return (
    <div className='aspect-video w-full px-2'>
        <iframe src={yturl} allowFullScreen className=' h-full w-full rounded-[30px]'/>
    </div>
  )
}