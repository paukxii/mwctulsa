import { SectionHeader } from '../../components/SectionHeader';
import { our_shcedules } from '../../constants';

export default function Schedules() {
  return (
    <section
      id='schedules'
      className='bg-gradient-to-r from-blue-200 to-green-200 p-10'
    >
      {/* flex flex-col w-full lg:flex-row md:flex-row justify-between items-center */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5 '>
        <div className=' md:w-1/3 lg:w-1/3'>
        <SectionHeader>
          Weekly <br/>
          Schedules
        </SectionHeader>
        </div>
        
          <ul className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full'>
            {our_shcedules.map((schedules, index) => (

                <div
                  key={index}
                  // className='flex flex-col lg:w-52 whitespace-nowrap lg:pl-3 sm:pl-2 rounded-xl bg-gradient-to-r from-slate-50/50 to-slate-200/5 hover:shadow-xl transition-all duration-1000'
                  className='bg-gradient-to-r from-slate-50/50 to-slate-200/5 p-5  rounded-xl shadow-lg'
                >
                  <h2 className='text-cyan-600 py-2 text-2xl lg:text-3xl'>{schedules.day}</h2>
                  {schedules.program.map((p) => (
                    <div key={p.name}>
                      <p className='text-black font-bold capitalize text-sm pt-2'>{p.name}
                        {p.live && ( <span className=' text-[10px] text-red-500'> LIVE</span> )}
                      </p>
                      <p className='text-black font-thin capitalize text-sm'>{p.time}</p>
                    </div>
                  ))}
                </div>
            ))}
          </ul>
      </div>
    </section>
  );
}