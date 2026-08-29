import React from 'react'

const LoginLeft = () => {
  return (
    <div className="hidden lg:flex lg:w-2/5 bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat flex-col justify-between 
    p-12 shrink-0 select-none  ">
        {/* Logo  */}
        <div className='flex items-center gap-3'>
            <img src="/logo.svg" alt="Logo" sizes='9.5' />
            <span className='text-4xl font-medium text-white '>ZIRO AI</span>
        </div>
        <div>
            <h2 className='text-3xl text-white font-medium leading-snug mb-3 tracking-tight'>Build your presenece on web with just one prompt</h2>
            <p className='text-zinc-300'>
                Describe what you need, preview & customize your size website instantly. React with clean 
                JSX, verified layouts & instant code exports.
            </p>
            <p className='text-zinc-300 text-sm mt-12'>Copyright {new Date().getFullYear()} ZIRO AI </p>
        </div>

    </div>
  )
}

export default LoginLeft