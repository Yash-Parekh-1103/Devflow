import type { ReactNode } from 'react'

const StatCard = ({count,icon,title}:{count:number , title:string , icon:ReactNode}) => {
  return (
  <div className='col-span-6 flex gap-5 rounded-lg border border-slate-800 bg-slate-900/70 px-5 py-3 text-slate-100 shadow-sm shadow-slate-950/50 lg:col-span-4 xl:col-span-3'>
    <div className='flex items-center text-cyan-300'>
            {icon}
        </div>
    <div className='flex flex-col text-2xl'>
      <p className='font-semibold'>{count}</p>
      <p className='text-lg text-slate-300'>{title}</p>
        </div>
    </div>
  )
}

export default StatCard