import SectionContainer from '../../components/SectionContainer';
import { SectionHeader } from '../../components/SectionHeader';
import { our_shcedules } from '../../constants';

export default function Schedules() {
  return (
    <SectionContainer
      id='schedules'
      bgColor='bg-gradient-to-r from-blue-200 to-cyan-200'
    >
      <div className='flex flex-col w-full lg:flex-row md:flex-row justify-between items-center'>
        <SectionHeader>
          Weekly <br/>
          Schedules
        </SectionHeader>
        <div className='flex justify-between'>
          <ul className='flex justify-end gap-1 sm:gap-3 md:gap-2'>
            {our_shcedules.map((schedules, index) => (
              <div className='flex' key={index}>
                <div
                  key={index}
                  className='flex flex-col lg:w-52 whitespace-nowrap lg:pl-3 sm:pl-2 rounded-xl bg-gradient-to-r from-slate-50/50 to-slate-200/5 hover:shadow-xl transition-all duration-1000'
                >
                  <h2 className='text-cyan-600 font-thin text-2xl lg:text-3xl'>{schedules.day}</h2>
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