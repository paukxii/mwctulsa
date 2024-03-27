import SectionContainer from '../../components/SectionContainer';
import { SectionHeader } from '../../components/SectionHeader';
import { our_shcedules } from '../../constants';

export default function Schedules() {
  return (
    <SectionContainer
      id='schedules'
      bgColor='bg-gradient-to-r from-blue-100 to-cyan-100'
    >
      <div className='flex flex-col w-full lg:flex-row md:flex-row justify-between '>
        <SectionHeader>
          Weekly <br/>
          Schedules
        </SectionHeader>
        <div className='flex justify-between items-center'>
          <ul className='flex justify-end gap-10 sm:gap-1 md:gap-2'>
            {our_shcedules.map((schedules, index) => (
              <div className='flex mb-0' key={index}>
                <div className='sm:hidden h-full mx-4 w-1 bg-cyan-300 rounded-full rotate-6'/>
                  <div
                    key={index}
                    className='flex flex-col max-w-max whitespace-nowrap px-2'
                  >
                    <h2 className='text-cyan-600 font-thin text-2xl lg:text-3xl'>
                      {schedules.day}
                    </h2>
                    {schedules.program.map((p) => (
                      <div key={p.name}>
                        <p className='text-black font-bold capitalize text-sm'>{p.name}
                          {p.live && ( <span className=' text-[10px] text-red-500'> LIVE</span> )}
                        </p>
                        <p className='text-black font-thin capitalize text-sm'>{p.time}</p>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}