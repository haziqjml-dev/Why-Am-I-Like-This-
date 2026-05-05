/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  RefreshCw,
  Clock,
  Repeat,
  Monitor,
  MessageSquare, 
  Zap, 
  Lock, 
  Download, 
  CheckCircle2,
  BookOpen,
  Bot,
  User,
  Activity,
  ArrowRight,
  Eye,
  Type,
  Waves,
  Smartphone,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Header ---
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-24 py-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
    <div className="font-display font-medium text-lg tracking-widest uppercase">
      <span className="text-white">Why Am I</span> <span className="text-accent">Like This?</span>
    </div>
    <button 
      onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}
      className="border border-accent/50 text-accent hover:bg-accent hover:text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase flex items-center gap-2 transition-all tracking-widest"
    >
      <Download className="w-3.5 h-3.5"/> Interactive Ebook
    </button>
  </header>
);

// --- Hero ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 bg-transparent overflow-hidden pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 lg:block">
            <h1 className="flex-1 text-[2.1rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-display font-black leading-[0.85] tracking-tighter uppercase mt-2">
              <span className="text-white block pb-1">Kau Bukan</span>
              <span className="text-white/40 block pb-1">Stress.</span>
              <span className="text-white block mt-2 pb-1">Kau Cuma</span>
              <span className="text-accent block">Tak Boleh Rest.</span>
            </h1>

            {/* Mobile Book Mockup */}
            <div className="block lg:hidden w-[110px] sm:w-[140px] shrink-0 relative translate-y-1">
               <div className="relative w-full aspect-[2/3] shadow-[-(15px)_0_30px_rgba(230,32,32,0.15)] z-10">
                   <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-r-xl rounded-l overflow-hidden relative flex">
                      <div className="w-[8%] h-full bg-gradient-to-r from-white/10 to-transparent flex flex-col justify-end pb-4 items-center border-r border-white/5 relative z-20">
                         <span className="transform -rotate-90 text-[4px] sm:text-[5px] text-white/40 tracking-[0.4em] font-mono whitespace-nowrap mb-12 origin-center">WHY AM I LIKE THIS?</span>
                      </div>
                      <div className="w-[92%] h-full relative bg-cover bg-center" style={{backgroundImage: "url('https://i.imgur.com/nJCpI0h.png')"}}>
                      </div>
                   </div>
                   <div className="absolute top-0 bottom-0 left-[8%] w-2 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-30 mix-blend-multiply"></div>
               </div>
            </div>
          </div>

          <div className="border border-accent/50 rounded-2xl p-4 lg:p-6 relative bg-black/40 backdrop-blur-sm shadow-[0_0_30px_rgba(230,32,32,0.15)] mt-2 max-w-sm">
             <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rotate-45 border-t border-r border-accent/50 bg-[#0a0a0a]"></div>
             
             <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-black uppercase text-white leading-[1.1] mb-4 tracking-tight">
               Jom Kita<br/>
               <span className="text-white">Masuk Otak Kau</span><br/>
               <span className="text-accent">Dengan AI.</span>
             </h2>

             <div className="text-[10px] uppercase tracking-widest text-accent font-bold mb-4 pb-3 border-b border-white/10">
               AI Sebagai Companion / Mirror
             </div>

             <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-start">
                    <Brain className="w-5 h-5 text-accent shrink-0"/>
                    <div className="pt-0.5">
                       <p className="text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">Tanya Apa-Apa.</p>
                       <p className="text-[10px] text-white/60">AI akan push kau fikir lagi.</p>
                    </div>
                </div>
                <div className="flex gap-3 items-start">
                    <MessageSquare className="w-5 h-5 text-accent shrink-0"/>
                    <div className="pt-0.5">
                       <p className="text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">Dialog Jujur.</p>
                       <p className="text-[10px] text-white/60">AI tak judge, AI bantu kau faham diri.</p>
                    </div>
                </div>
                <div className="flex gap-3 items-start">
                    <Eye className="w-5 h-5 text-accent shrink-0"/>
                    <div className="pt-0.5">
                       <p className="text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">Nampak Pattern.</p>
                       <p className="text-[10px] text-white/60">AI dedahkan yang kau tak nampak.</p>
                    </div>
                </div>
             </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 border border-white/10 rounded-2xl p-4 lg:p-6 bg-black/40 backdrop-blur-md max-w-[550px]">
             <button 
               onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })} 
               className="w-full sm:w-auto flex flex-col items-center justify-center gap-1.5 border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-xl transition-all group shrink-0"
             >
               <div className="flex items-center gap-3 text-lg lg:text-xl font-display font-black tracking-tight"><div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors"><ArrowRight className="w-4 h-4"/></div> Dapatkan Sekarang</div>
               <span className="text-[11px] text-[#e62020] tracking-widest font-bold uppercase">Instant Access (PDF)</span>
             </button>
             
             <div className="flex flex-col gap-3 text-white/50 text-[9px] lg:text-[10px] uppercase tracking-widest font-bold justify-center w-full">
                <span className="flex items-center gap-2.5"><Download className="w-4 h-4 shrink-0 text-white/30"/> Download Terus</span>
                <span className="flex items-center gap-2.5"><Lock className="w-4 h-4 shrink-0 text-white/30"/> Pembayaran Selamat</span>
                <span className="flex items-center gap-2.5"><BookOpen className="w-4 h-4 shrink-0 text-white/30"/> Baca & Revisit Bila-Bila Masa</span>
             </div>
          </div>
        </motion.div>

        {/* Center Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 hidden lg:flex justify-center items-center py-10 lg:py-0 relative"
        >
          <div 
            className="relative w-[280px] sm:w-[340px] lg:w-[320px] xl:w-[400px] h-[420px] sm:h-[500px] lg:h-[480px] xl:h-[520px] shadow-[-(30px)_0_60px_rgba(230,32,32,0.15)] z-10"
          >
             {/* Realistic Book Mockup CSS */}
             <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-r-2xl rounded-l-md overflow-hidden relative flex">
                <div className="w-[8%] h-full bg-gradient-to-r from-white/10 to-transparent flex flex-col justify-end pb-8 items-center border-r border-white/5 relative z-20">
                   <span className="transform -rotate-90 text-[8px] text-white/40 tracking-[0.4em] font-mono whitespace-nowrap mb-24 origin-center">WHY AM I LIKE THIS?</span>
                </div>
                {/* Book Cover Design */}
                <div className="w-[92%] h-full relative bg-cover bg-center" style={{backgroundImage: "url('https://i.imgur.com/nJCpI0h.png')"}}>
                </div>
             </div>
             {/* Binding crease shadow */}
             <div className="absolute top-0 bottom-0 left-[8%] w-4 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-30 mix-blend-multiply"></div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-3 hidden lg:flex flex-col justify-center gap-16 font-display uppercase tracking-widest text-[#e62020] text-xs font-bold pl-8 border-l border-white/5"
        >
             <div className="relative hover:text-white transition-colors cursor-default">
                <div className="absolute top-1/2 -left-[33px] w-[32px] border-b border-[#e62020]/30 transition-all group-hover:border-[#e62020]"></div>
                Pattern Tersembunyi
             </div>
             <div className="relative hover:text-white transition-colors cursor-default">
                <div className="absolute top-1/2 -left-[33px] w-[32px] border-b border-[#e62020]/30 transition-all group-hover:border-[#e62020]"></div>
                Fikiran Tersangkut
             </div>
             <div className="relative hover:text-white transition-colors cursor-default">
                <div className="absolute top-1/2 -left-[33px] w-[32px] border-b border-[#e62020]/30 transition-all group-hover:border-[#e62020]"></div>
                Loop Berulang
             </div>
             <div className="relative text-white/80 hover:text-white transition-colors cursor-default">
                <div className="absolute top-1/2 -left-[33px] w-[32px] border-b border-[#e62020]/30 transition-all group-hover:border-[#e62020]"></div>
                Realiti Yang Kau<br/>Tak Nampak
             </div>
          </motion.div>

      </div>
    </section>
  )
}

// --- Features Inside (Agitation replacement) ---
const WhatsInside = () => {
  const features = [
    { title: 'Refleksi Mendalam', icon: Brain, desc: 'Soalan dan situasi yang buat kau nampak pattern kau sendiri.' },
    { title: 'AI Companion', icon: Bot, desc: 'Tanya apa-apa. AI akan challenge dan bantu kau fikir lagi.' },
    { title: 'Experience, Bukan Teori', icon: BookOpen, desc: 'Bukan teori kosong. Semua berdasarkan realiti dan pengalaman sebenar.' },
    { title: 'Revisit & Grow', icon: RefreshCw, desc: 'Baca, reflect, ulang balik. Setiap kali, kau akan nampak lebih jelas.' }
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-transparent">
       <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-display font-medium tracking-widest text-white uppercase text-center">
                Apa Yang Kau Dapat Dalam <span className="text-accent font-black">Interactive</span> Ebook Ni?
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#111] border border-white/5 rounded-xl p-4 sm:p-8 hover:border-accent/30 transition-colors flex flex-col items-center text-center"
              >
                <item.icon className="w-6 h-6 sm:w-10 sm:h-10 text-accent mb-3 sm:mb-6" strokeWidth={1.5} />
                <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-white mb-1.5 sm:mb-3">{item.title}</h3>
                <p className="text-[10px] sm:text-[14px] text-white/50 leading-relaxed sm:max-w-[200px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  )
}

// --- Interactive Showcase ---
const InteractiveShowcase = () => {
    return (
        <section className="py-24 px-6 lg:px-24 bg-transparent">
           <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Text */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-4"
              >
                 <h2 className="text-4xl lg:text-5xl font-display font-medium uppercase leading-[1.1] tracking-tighter text-white mb-6">
                   Bukan Ebook Biasa.<br/>
                   Ini <span className="text-accent font-black">Interactive.</span>
                 </h2>
                 <p className="text-[16px] text-white/70 leading-relaxed mb-10">
                   Ebook ni direka untuk kau baca sambil fikir, reflect, dan <strong className="text-white font-medium">engage</strong> dengan AI. Setiap bab bawa kau lebih dalam kenal diri sendiri.
                 </p>
                 <div className="space-y-4">
                     {[
                         'Dialog interaktif dengan AI',
                         'Soalan refleksi di setiap bab',
                         'Ruang untuk tulis & biasakan diri',
                         'Content dinamik & engaging'
                     ].map((feat, i) => (
                         <div key={i} className="flex items-center gap-3">
                             <div className="w-5 h-5 rounded flex items-center justify-center bg-accent/20 border border-accent/50 shrink-0">
                                 <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                             </div>
                             <span className="text-[15px] text-white/80">{feat}</span>
                         </div>
                     ))}
                 </div>
              </motion.div>

              {/* Right Mockups */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-8 relative flex items-center justify-center lg:justify-end w-full h-[300px] sm:h-[400px] lg:h-[550px] mt-8 lg:mt-0"
              >
                  <div className="relative w-full max-w-[600px] flex items-end justify-center lg:justify-end h-full origin-bottom scale-[0.6] sm:scale-[0.8] lg:scale-100 shrink-0">
                     {/* Laptop Mockup */}
                     <div className="relative w-[600px] h-[380px] bg-[#222] rounded-t-2xl flex flex-col shadow-2xl z-10 border border-white/10 shrink-0">
                      {/* Screen */}
                      <div className="flex-1 bg-[#0a0a0a] m-3 rounded-xl border border-white/5 flex overflow-hidden">
                          {/* Sidebar */}
                          <div className="hidden md:flex w-48 bg-[#111] border-r border-white/5 p-4 flex-col gap-4">
                              <span className="text-xs font-bold text-white/40 uppercase tracking-widest pl-2">Format</span>
                              <div className="space-y-1">
                                  <div className="text-[11px] text-white/60 p-2 rounded-lg hover:bg-white/5 flex items-center gap-2"><User className="w-3.5 h-3.5"/> Pengenalan</div>
                                  <div className="text-[11px] text-white/60 p-2 rounded-lg hover:bg-white/5 flex items-center gap-2"><User className="w-3.5 h-3.5"/> Dedication</div>
                                  <div className="text-[11px] text-white/60 p-2 rounded-lg hover:bg-white/5 flex items-center gap-2"><User className="w-3.5 h-3.5"/> OBS</div>
                                  <div className="text-[11px] text-white/60 p-2 rounded-lg hover:bg-white/5 flex items-center gap-2"><User className="w-3.5 h-3.5"/> Real</div>
                                  <div className="text-[11px] text-white/60 p-2 rounded-lg hover:bg-white/5 flex items-center gap-2"><Brain className="w-3.5 h-3.5"/> Refleksi</div>
                                  <div className="text-[11px] text-accent p-2 rounded-lg bg-accent/10 border border-accent/20 flex items-center gap-2"><Bot className="w-3.5 h-3.5"/> AI Companion</div>
                                  <div className="text-[11px] text-white/60 p-2 rounded-lg hover:bg-white/5 flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5"/> Penutup</div>
                              </div>
                          </div>
                          {/* Content Area */}
                          <div className="flex-1 p-8 flex flex-col">
                              <h3 className="text-white text-lg font-medium mb-6">AI Companion</h3>
                              <div className="flex-1 flex flex-col gap-4">
                                  <div className="bg-[#1a1a1a] p-4 text-[13px] rounded-2xl rounded-bl-sm self-start text-white/70 max-w-[80%] border border-white/5">
                                      Kenapa aku rasa serabut, walau-<br/>pun dah buat banyak benda?
                                  </div>
                                  <div className="bg-accent/10 border border-accent/20 p-4 text-[13px] rounded-2xl rounded-br-sm self-end text-white max-w-[80%] relative">
                                      <div className="absolute -left-8 top-2 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                          <Bot className="w-3.5 h-3.5 text-accent"/>
                                      </div>
                                      Mungkin kau bukan serabut.<br/>Mungkin kau penat lawan<br/>benda yang kau tak boleh<br/>control.
                                  </div>
                              </div>
                              <div className="mt-4 bg-[#1a1a1a] rounded-lg p-3 text-[12px] text-white/30 border border-white/5 flex justify-between items-center">
                                  Tanya apa-apa.. <ArrowRight className="w-4 h-4 text-accent/50"/>
                              </div>
                          </div>
                      </div>
                      {/* Laptop Base */}
                      <div className="h-4 bg-[#333] rounded-b-2xl mx-1 z-20 shrink-0"></div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-[#111] rounded-b-[50%] shadow-[0_10px_20px_rgba(0,0,0,1)] pointer-events-none"></div>
                  </div>

                  {/* Phone Mockup overlaying */}
                  <div className="absolute right-0 lg:-right-10 w-[240px] h-[480px] bg-[#0a0a0a] border-[8px] border-[#222] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-30 flex flex-col overflow-hidden bottom-0 lg:bottom-4">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-[#222] rounded-b-xl z-20"></div>
                      <video 
                         className="w-full h-full object-cover"
                         src="https://i.imgur.com/wEb15WH.mp4"
                         autoPlay
                         loop
                         muted
                         playsInline
                      />
                  </div>
                  </div>
              </motion.div>
           </div>
        </section>
    )
}

// Fallback icon since AlignJustify isn't in my imports list above
const AlignJustify = ({className}: {className?: string}) => <div className={className}></div>;

// --- Reading Experience Mini Section ---
const ReadingExperience = () => {
    return (
        <section className="py-20 px-6 lg:px-24 bg-transparent border-y border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.8 }}
                  transition={{ duration: 0.6 }}
                  className="text-center text-xl lg:text-2xl font-display font-medium uppercase tracking-widest text-white mb-12"
                >
                   Reading Experience Yang Lebih <span className="text-accent font-black">Dekat, Smooth & Real.</span>
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex items-center gap-4">
                        <Eye className="w-8 h-8 text-accent shrink-0"/>
                        <p className="text-[14px] text-white/70 leading-snug">Design minimal, fokes & tak mengganggu.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded border border-accent flex items-center justify-center shrink-0">
                           <Type className="w-5 h-5 text-accent"/>
                        </div>
                        <p className="text-[14px] text-white/70 leading-snug">Font selesa, mata tak cepat penat.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Waves className="w-8 h-8 text-accent shrink-0"/>
                        <p className="text-[14px] text-white/70 leading-snug">Navigasi mudah, flow baca lebih natural.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Smartphone className="w-8 h-8 text-accent shrink-0"/>
                        <p className="text-[14px] text-white/70 leading-snug">Boleh baca di phone, tablet atau PC.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- Testimonials ---
const Testimonials = () => {
    const reviews = [
        { name: 'Amirul H.', text: 'Ebook ni buat aku sedar banyak benda pasal diri aku sendiri. AI companion dia paling power!' },
        { name: 'Nadia K.', text: 'Bukan setakat baca, tapi rasa macam bercakap dengan diri sendiri. Highly recommended!' },
        { name: 'Faris Z.', text: 'Setiap kali revisit, aku jumpa insight baru. Memang berbaloi!' }
    ];

    return (
        <section className="py-24 px-6 lg:px-24 bg-transparent">
            <div className="max-w-[1400px] mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                    <h2 className="text-2xl lg:text-3xl font-display font-medium uppercase tracking-widest text-white">
                        Apa Yang <span className="text-accent font-black">Pembaca</span> Kata?
                    </h2>
                </motion.div>

                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 shrink-0 hidden md:flex">
                        <ChevronLeft className="w-5 h-5 text-white/50" />
                    </button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                        {reviews.map((r, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.2 }}
                              transition={{ duration: 0.5, delay: i * 0.15 }}
                              className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col justify-between"
                            >
                                <div>
                                    <Quote className="w-6 h-6 text-accent/50 mb-4 fill-accent/20" />
                                    <p className="text-[14px] text-white/80 leading-relaxed mb-6">
                                        {r.text}
                                    </p>
                                </div>
                                <div className="flex items-end justify-between border-t border-white/5 pt-4 mt-auto">
                                    <div className="flex items-center gap-1">
                                        {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-accent fill-accent" />)}
                                        <span className="text-white/50 ml-2 text-sm">— {r.name}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 shrink-0 hidden md:flex">
                        <ChevronRight className="w-5 h-5 text-white/50" />
                    </button>
                </div>
            </div>
        </section>
    )
}

const Footer = () => (
  <footer id="payment" className="py-24 px-6 lg:px-24 bg-transparent flex flex-col items-center text-center gap-12 border-t border-white/5">
     <div className="max-w-2xl text-center relative px-8">
         <Quote className="w-10 h-10 text-white/10 absolute -top-4 -left-2 transform rotate-180" />
         <h4 className="text-xl lg:text-3xl font-display font-medium uppercase tracking-widest text-white leading-relaxed">
             Ini Bukan Tentang Ubah Diri Kau.<br/>
             Ini Tentang <span className="text-accent font-black">Nampak</span> Apa Yang Dah Lama Ada.
         </h4>
         <Quote className="w-10 h-10 text-white/10 absolute -bottom-4 -right-2" />
     </div>

     <div className="flex flex-col items-center mt-8">
         <span className="text-lg uppercase tracking-[0.2em] font-medium text-accent mb-2">Harga Launch</span>
         <div className="flex flex-col mb-4 relative">
             <span className="text-[4rem] lg:text-[5rem] font-display font-black leading-none text-white tracking-tighter">RM29.90</span>
             <span className="text-2xl text-white/30 line-through decoration-white/20 mt-1">RM49.90</span>
             <div className="absolute -right-8 top-8 w-16 h-16 bg-accent rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(230,32,32,0.5)] transform rotate-12 text-white">
                 <span className="text-[10px] font-bold leading-none">JIMAT</span>
                 <span className="text-lg font-black leading-none">40%</span>
             </div>
         </div>
         <p className="text-white/60 text-sm max-w-md mt-4">
             Sila lengkapkan butiran pembelian anda pada borang di bawah halaman ini untuk dapatkan akses segera.
         </p>
         <div className="mt-8 animate-bounce">
             <ArrowRight className="w-6 h-6 text-white/50 rotate-90" />
         </div>
     </div>
     
     <div className="flex flex-wrap justify-center gap-6 lg:gap-12 text-[12px] text-white/40 uppercase tracking-widest mt-12 w-full border-t border-white/5 pt-12">
        <a href="#" className="hover:text-white transition-colors">Terma & Syarat</a>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">FAQ</a>
        <a href="#" className="hover:text-white transition-colors">Hubungi Kami</a>
     </div>
     
     <p className="text-[10px] text-white/30 tracking-widest">© 2026 HAZIQ JAMAL. ALL RIGHTS RESERVED.</p>
  </footer>
)

export default function App() {
  return (
    <div className="bg-transparent text-white font-sans selection:bg-accent/30 tracking-tight">
      <Header />
      <Hero />
      <WhatsInside />
      <InteractiveShowcase />
      <ReadingExperience />
      <Testimonials />
      <Footer />
    </div>
  );
}
