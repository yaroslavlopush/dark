import { Cabin, PT_Serif, Inter } from 'next/font/google';

const cabin = Cabin({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const ptSerif = PT_Serif({ subsets: ['latin'], weight: '400' })

export { cabin, inter, ptSerif }
