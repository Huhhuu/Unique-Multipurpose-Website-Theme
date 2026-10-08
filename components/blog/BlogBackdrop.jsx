export default function BlogBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(22, 99, 249, 0.18) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 15%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 15%, black 40%, transparent 100%)',
        }}
      />

      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] md:w-[960px] h-[400px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(81, 180, 250, 0.65) 0%, rgba(22, 99, 249, 0.35) 45%, transparent 75%)',
          filter: 'blur(70px)',
          transform: 'translateZ(0)',
        }}
      />

      <div
        className="absolute top-10 -right-20 md:right-[-10%] w-[500px] md:w-[700px] h-[450px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249, 97, 216, 0.6) 0%, rgba(248, 166, 240, 0.35) 50%, transparent 75%)',
          filter: 'blur(80px)',
          transform: 'translateZ(0)',
        }}
      />

      <div
        className="absolute top-24 -left-20 md:left-[-10%] w-[500px] md:w-[680px] h-[420px] md:h-[560px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 149, 58, 0.5) 0%, rgba(248, 217, 151, 0.35) 50%, transparent 75%)',
          filter: 'blur(85px)',
          transform: 'translateZ(0)',
        }}
      />

      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[650px] md:w-[900px] h-[450px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(133, 74, 235, 0.4) 0%, rgba(61, 176, 229, 0.3) 50%, transparent 75%)',
          filter: 'blur(90px)',
          transform: 'translateZ(0)',
        }}
      />

      <div
        className="absolute bottom-10 right-[-5%] w-[550px] md:w-[750px] h-[420px] md:h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(81, 180, 250, 0.5) 0%, rgba(248, 166, 240, 0.35) 50%, transparent 75%)',
          filter: 'blur(80px)',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  )
}
