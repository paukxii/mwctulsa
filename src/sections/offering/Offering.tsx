import SectionContainer from '../../components/SectionContainer';

export default function Offering () {
  return (
    <SectionContainer id='offering' bgColor=''>
      <div className='flex gap-5 flex-wrap justify-center py-5'>
        <img src='./imgs/offering.png' className='h-40 sm:h-auto rounded-3xl'></img>
      </div>
    </SectionContainer>
  );
}