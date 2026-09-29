import Link from 'next/link'

export default function Logo({ className = '', light = false }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <svg
        width="30"
        height="21"
        viewBox="0 0 36 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105 duration-200 flex-shrink-0"
      >
        <path d="M23.9999 12V0H35.9999V24.1818H23.9999V12Z" fill="#1663F9" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8182 0L0 12V24.1818H11.8183V12L24 9.58229e-05V0H11.8182Z"
          fill="#F961D8"
        />
      </svg>
      <span
        className={`font-heading font-normal text-h5 tracking-normal transition-colors inline-flex items-center text-center ${
          light ? 'text-white' : 'text-dark group-hover:text-primary'
        }`}
      >
        MicPro
      </span>
    </Link>
  )
}
