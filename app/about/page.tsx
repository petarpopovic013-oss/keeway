import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      <Header />
      
      <main id="app" className="relative w-full mx-auto mb-auto" style={{ maxWidth: '2560px' }}>
        
        {/* SEKCIJA 1 */}
        <section className="relative w-full">
          <div className="relative md:block hidden w-full overflow-hidden md:bg-center bg-no-repeat bg-right md:bg-cover h-[480px] md:h-[850px] lg:h-[600px] xl:h-[742px] 2.5xl:h-[960px] 3.8xl:h-[1024px] xl:block" style={{ backgroundImage: 'url("/photos/aboutus/heroabout.jpg")' }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container relative z-10 md:pt-[543px] lg:pt-[143px] 1.5xl:pt-[164px] 2.5xl:pt-[190px] md:pb-[100px] lg:pb-0 xl:pb-[84px] mx-auto px-6">
              <div className="flex flex-col text-center md:items-center lg:justify-start lg:items-start md:justify-center">
                <div className="border-b-4 skew-x-[-50deg] xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-1.5 xl:absolute md:mt-5" style={{ borderColor: '#F54308' }}></div>
                <h1 className="text-[28px] italic inline lg:text-[46px] leading-[34px] sm:text-center sm:w-[450px] lg:text-left xl:text-[60px] xl:pt-[24px] font-saira font-normal w-[299px] md:leading-[50px] md:text-[40px] lg:w-[510px] xl:w-[524px] lg:leading-[54px] xl:leading-[68px] text-white lg:mt-[41px] sm:mt-[24px] sm:text-[36px] uppercase">
                  1999–2024.<br/><span className="whitespace-nowrap">25 godina inovacija</span>
                </h1>
                <p className="text-[15px] sm:w-[439px] md:text-xl pt-2 lg:text-[20px] lg:leading-[32px] md:leading-[28px] uppercase italic xl:text-[25px] font-saira w-[299px] lg:w-[450px] xl:w-[540px] leading-normal font-normal md:text-center lg:text-start text-white md:pt-6">
                  Ovo je naša priča: Ponosni na kvalitet, dizajn i uslugu.
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:hidden md:hidden">
            <div className="relative">
              <div className="w-full h-[480px]">
                <img loading="lazy" className="relative w-full h-[480px] object-cover object-center" src="/photos/aboutus/heroabout.jpg" alt="Hero" />
              </div>
            </div>
            <div className="flex items-center justify-start order-2 px-[15px] pt-[40px] pb-[40px] overflow-hidden md:w-1/2" style={{ background: 'rgb(57, 57, 57)' }}>
              <div className="w-auto">
                <div className="border-b-4 w-[86px] skew-x-[-50deg] flex justify-start items-start text-start h-1 lg:h-1.5 mb-[16px]" style={{ borderColor: '#F54308' }}></div>
                <h1 className="text-[32px] inline font-saira italic font-normal uppercase w-[345px] sm:w-full tracking-[-2%] leading-[38px] text-start text-white">
                  1999–2024.<br/><span className="whitespace-nowrap">25 godina inovacija</span>
                </h1>
                <p className="text-[16px] mt-[10px] text-white uppercase leading-[24px] font-saira italic font-normal">
                  Ovo je naša priča: Ponosni na kvalitet, dizajn i uslugu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCIJA 2 */}
        <section className="items-stretch lg:flex">
          <div className="w-full overflow-hidden md:flex md:flex-row bg-[#393939]">
            <div className="overflow-hidden md:order-1 flex items-center h-[300px] sm:h-[400px] md:h-[462px] lg:h-[578px] xl:h-[666px] 3xl:h-[680px] 4xl:h-[710px] xl:flex md:w-1/2">
              <div className="w-full h-full">
                <img loading="lazy" className="self-center object-cover object-center w-full h-full" src="/photos/aboutus/sekcija 2 logo.png" alt="Logo" />
              </div>
            </div>
            <div className="flex items-center justify-start px-4 md:px-[30px] lg:px-0 overflow-hidden md:h-[462px] lg:h-[578px] xl:h-[666px] 3xl:h-[680px] 4xl:h-[710px] md:order-2 xl:py-8 md:w-1/2">
              <div className="py-[30px] xl:pt-0 md:pb-[10px] lg:pb-[30px] xl:pb-0 xl:py-4 lg:ml-8 xl:mx-14 2xl:mx-[90px] w-full lg:w-[448px] xl:w-[540px]">
                <h1 className="text-[20px] xl:text-[33px] uppercase lg:text-[24px] md:text-[20px] md:leading-[30px] lg:leading-[48px] font-saira italic font-normal text-[#F54308] xl:tracking-normal md:mt-0 leading-[30px] xl:leading-[48px] text-start">
                  BUDIMPEŠTA, MAĐARSKA
                </h1>
                <div className="mt-[10px]">
                  <p className="text-[14px] text-white md:text-base md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] leading-[24px] font-normal xl:leading-[32px] font-saira">
                    Ime Keeway je mnogo više od običnog spoja dve reči – ono predstavlja slobodu, avanturu i potencijal koji mladi motociklisti traže. Reč „Key“ (ključ) simbolizuje mogućnost koju svaki vozač ima: da otključa svoj puni potencijal i otkrije nove horizonte. „Way“ (put) označava drum koji je pred njima, putovanje na kojem vozači istražuju svet i pomeraju sopstvene granice.
                    <br/><br/>
                    Naš prvi logo kompanije. (1999)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCIJA 3 */}
        <section className="relative">
          <div>
            <img className="order-1 md:h-[462px] lg:h-[573px] 2xl:h-[740px] 3xl:h-[980px] object-cover w-full h-[236px] bg-[#393939]" src="/photos/aboutus/sekcija 3 velika slika.png" alt="25 godina" />
          </div>
          <div className="-mt-1 xl:-mt-3 xl:px-4 bg-gradient-to-r to-[#F54308] from-[#ff7a00] pt-6 xl:pt-[60px] pb-[24px] xl:pb-[60px] md:pb-[40px] md:pt-[40px] lg:pb-[50px] lg:pt-[50px] order-2 w-full">
            <div className="border-b-4 xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-[4px] mx-auto mb-[16px] lg:mb-[24px] skew-x-[-50deg] border-white"></div>
            <div className="w-full lg:w-[784px] xl:w-[1214px] px-4 mt-[24px] md:mx-auto md:max-w-7xl md:px-16">
              <p className="text-[14px] mt-[6px] md:mt-[6px] leading-6 md:text-base md:leading-[22px] lg:text-[16px] lg:leading-[26px] text-center text-white xl:text-[20px] xl:leading-[32px] font-saira font-normal">
                Tokom svojih prvih 25 godina, Keeway se uspešno pozicionirao na globalnom tržištu u segmentima skutera i motocikala male i srednje kubikaže. Naši proizvodi izdvajaju se po savršenom balansu dizajna, kvaliteta i pristupačnosti.
                <br/>
                Ova kombinacija omogućila je kompaniji održiv rast kroz celokupnu istoriju, šireći svoje prisustvo u više od 73 zemlje širom sveta.
              </p>
            </div>
          </div>
        </section>

        {/* SEKCIJA 4 */}
        <section className="items-stretch lg:flex">
          <div className="w-full overflow-hidden md:flex md:flex-row bg-white">
            <div className="overflow-hidden md:order-1 order-1 xl:flex md:w-1/2 h-[300px] sm:h-[400px] md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="w-full h-full relative">
                <video src="/photos/aboutus/sekcija 4 video, zaustavljen .mp4" controls playsInline className="self-center object-cover w-full h-full" />
              </div>
            </div>
            <div className="flex items-center justify-start order-2 px-4 md:px-[30px] lg:px-0 overflow-hidden xl:py-8 md:w-1/2 md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="2xl:mx-[90px] lg:ml-8 lg:pb-[30px] lg:w-[448px] md:pb-[10px] pb-[40px] pt-6 w-full xl:mx-14 xl:pb-0 xl:pt-0 xl:py-4 xl:w-[525px]">
                <div>
                  <div className="border-b-4 xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-1.5 mb-[16px] lg:mb-[24px] skew-x-[-50deg] border-[#F54308]"></div>
                </div>
                <h1 className="text-[20px] xl:text-[24px] lg:text-[22px] font-saira italic font-normal text-[#F54308] xl:tracking-normal mt-[16px] md:mt-0 leading-[30px] xl:leading-[32px] text-start uppercase">
                  Keeway i Benelli
                </h1>
                <p className="text-[14px] mt-[6px] md:mt-[6px] leading-6 md:text-base md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] lg:mt-[10px] text-[#000] font-saira font-normal xl:leading-[32px]">
                  Kompanija Keeway je 2005. godine postala akcionar brenda Benelli i preuzela upravljanje, dizajn i marketing iz novog sedišta u Pezaru. Ovaj strateški potez omogućio je brz globalni uspon oba brenda. Pored toga, započeto je deljenje platformi za dizajn, šasije i agregate, a ova uspešna saradnja traje i danas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCIJA 5 */}
        <section className="items-stretch lg:flex">
          <div className="w-full bg-[#393939] overflow-hidden md:flex md:flex-row">
            <div className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[300px] sm:h-[400px] md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="w-full h-full">
                <img loading="lazy" className="self-center object-cover object-center w-full h-full" src="/photos/aboutus/sekcija 5 2008-2013.png" alt="2008-2013" />
              </div>
            </div>
            <div className="flex items-center justify-start px-4 md:px-[30px] lg:px-0 overflow-hidden md:order-1 md:justify-end md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px] md:w-1/2">
              <div className="w-full lg:w-[448px] xl:w-[525px] pb-[40px] pt-6 xl:pt-0 md:pb-[10px] lg:pb-[30px] xl:pb-0 xl:py-4 lg:mr-8 xl:mx-14 2xl:mx-[90px]">
                <div>
                  <div className="border-b-4 xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-1.5 mb-[16px] lg:mb-[24px] skew-x-[-50deg] border-[#F54308]"></div>
                </div>
                <h1 className="text-[20px] xl:text-[24px] lg:text-[22px] font-saira italic font-normal text-[#F54308] xl:tracking-normal mt-[16px] md:mt-0 leading-[30px] xl:leading-[32px] text-start uppercase">
                  2008–2013.
                </h1>
                <p className="text-[14px] mt-[6px] md:mt-[6px] leading-6 md:text-base md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] lg:mt-[10px] text-white font-saira font-normal xl:leading-[32px]">
                  Sa novim dizajnerskim kodom koji je potpisao Benelli, Keeway je napravio prve i izuzetno uspešne korake na evropskom tržištu, ubrzavši prodaju u segmentu skutera i motocikala male i srednje kubikaže. Za manje od pet godina, Keeway se pozicionirao kao lider u prodaji skutera na nekoliko ključnih tržišta, a brend se proširio na preko 50 zemalja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCIJA 6 */}
        <section className="items-stretch lg:flex">
          <div className="w-full overflow-hidden md:flex md:flex-row bg-white">
            <div className="overflow-hidden md:order-1 md:w-1/2 xl:flex h-[300px] sm:h-[400px] md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="w-full h-full">
                <img loading="lazy" className="self-center object-cover object-center w-full h-full" src="/photos/aboutus/sekcija 6.png" alt="2014-2023" />
              </div>
            </div>
            <div className="flex items-center justify-start order-2 px-4 md:px-[30px] lg:px-0 overflow-hidden xl:py-8 md:w-1/2 md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="2xl:mx-[90px] lg:ml-8 lg:pb-[30px] lg:w-[448px] md:pb-[10px] pb-[40px] pt-6 w-full xl:mx-14 xl:pb-0 xl:pt-0 xl:py-4 xl:w-[525px]">
                <div>
                  <div className="border-b-4 xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-1.5 mb-[16px] lg:mb-[24px] skew-x-[-50deg] border-[#F54308]"></div>
                </div>
                <h1 className="text-[20px] xl:text-[24px] lg:text-[22px] font-saira italic font-normal text-[#F54308] xl:tracking-normal mt-[16px] md:mt-0 leading-[30px] xl:leading-[32px] text-start uppercase">
                  2014–2023.
                </h1>
                <p className="text-[14px] mt-[6px] md:mt-[6px] leading-6 md:text-base md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] lg:mt-[10px] text-[#000] font-saira font-normal xl:leading-[32px]">
                  Keeway lansira osvežen i moderan vizuelni identitet brenda. Uz nekoliko novih modela koje je dizajnirao isti tim zadužen za Benelli, kompanija je uspela da proširi prisustvo na više od 70 zemalja. Nastupi Keeway-a na EICMA sajmu u Milanu – najvažnijem svetskom događaju u moto-industriji – privukli su veliku pažnju, gde su iz godine u godinu predstavljani novi modeli za svetsko tržište, uvek ispunjavajući stroge evropske standarde i sertifikate kvaliteta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCIJA 7 */}
        <section className="items-stretch lg:flex">
          <div className="w-full overflow-hidden bg-[#393939] md:flex md:flex-row">
            <div className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[300px] sm:h-[400px] md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="w-full h-full">
                <img loading="lazy" className="self-center object-cover object-center w-full h-full" src="/photos/aboutus/sekcija 7.png" alt="K-LIGHT" />
              </div>
            </div>
            <div className="flex items-center justify-start px-4 md:px-[30px] lg:px-0 overflow-hidden md:order-1 md:justify-end md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px] md:w-1/2">
              <div className="w-full lg:w-[448px] xl:w-[525px] pb-[40px] pt-6 xl:pt-0 md:pb-[10px] lg:pb-[30px] xl:pb-0 xl:py-4 lg:mr-8 xl:mx-14 2xl:mx-[90px]">
                <div>
                  <div className="border-b-4 xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-1.5 mb-[16px] lg:mb-[24px] skew-x-[-50deg] border-[#F54308]"></div>
                </div>
                <h1 className="text-[20px] xl:text-[24px] lg:text-[22px] font-saira italic font-normal text-[#F54308] xl:tracking-normal mt-[16px] md:mt-0 leading-[30px] xl:leading-[32px] text-start uppercase">
                  Kultni Keeway modeli
                </h1>
                <p className="text-[14px] mt-[6px] md:mt-[6px] leading-6 md:text-base md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] lg:mt-[10px] text-white font-saira font-normal xl:leading-[32px]">
                  Jedan od najprepoznatljivijih modela u istoriji brenda je K-LIGHT. Reč je o modernizovanoj verziji originalne SUPERLIGHT platforme. Prva verzija imala je robustan, masivan stil devedesetih, dok je K-LIGHT redizajniran u lakši, ulični stil (street style), sa konfiguracijom koja je podjednako spremna za asfalt i za vožnju po šljunku.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCIJA 8 */}
        <section className="items-stretch lg:flex">
          <div className="w-full overflow-hidden md:flex md:flex-row bg-white">
            <div className="overflow-hidden md:order-1 xl:flex h-[300px] sm:h-[400px] md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] md:w-1/2 3xl:h-[750px]">
              <div className="w-full h-full">
                <img loading="lazy" className="self-center object-cover object-center w-full h-full" src="/photos/aboutus/sekcija 8.png" alt="V302C" />
              </div>
            </div>
            <div className="flex items-center justify-start order-2 px-4 md:px-[30px] lg:px-0 overflow-hidden xl:py-8 md:w-1/2 md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="2xl:mx-[90px] lg:ml-8 lg:pb-[30px] lg:w-[448px] md:pb-[10px] pb-[40px] pt-6 w-full xl:mx-14 xl:pb-0 xl:pt-0 xl:py-4 xl:w-[525px]">
                <div>
                  <div className="border-b-4 xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-1.5 mb-[16px] lg:mb-[24px] skew-x-[-50deg] border-[#F54308]"></div>
                </div>
                <h1 className="text-[20px] xl:text-[24px] lg:text-[22px] font-saira italic font-normal text-[#F54308] xl:tracking-normal mt-[16px] md:mt-0 leading-[30px] xl:leading-[32px] text-start uppercase">
                  Keeway Benda V302C
                </h1>
                <p className="text-[14px] mt-[6px] md:mt-[6px] leading-6 md:text-base md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] lg:mt-[10px] text-[#000] font-saira font-normal xl:leading-[32px]">
                  Ovaj model je označio prvu saradnju Keeway-a sa drugim proizvođačem, kompanijom Benda Motorcycle. Keeway je 2021. godine lansirao svoj prvi model sa moćnim V-twin agregatom, sa ciljem da se pozicionira u segmentu srednje kubikaže. Kao rezultat ove saradnje, Keeway je zadržao liderstvo u „custom“ segmentu male i srednje kubikaže u Italiji, Španiji, kao i u delovima Azije i Južne Amerike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCIJA 9 */}
        <section className="items-stretch lg:flex">
          <div className="w-full overflow-hidden md:flex md:flex-row bg-[#393939]">
            <div className="overflow-hidden md:order-2 xl:flex md:w-1/2 h-[300px] sm:h-[400px] md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="w-full h-full">
                <img loading="lazy" className="self-center object-cover object-center w-full h-full" src="/photos/aboutus/sekcija 9.png" alt="Keeway Group" />
              </div>
            </div>
            <div className="flex items-center justify-start px-4 md:px-[30px] lg:px-0 overflow-hidden md:order-1 md:justify-end md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px] md:w-1/2">
              <div className="w-full lg:w-[448px] xl:w-[525px] pb-[40px] pt-6 xl:pt-0 md:pb-[10px] lg:pb-[30px] xl:pb-0 xl:py-4 lg:mr-8 xl:mx-14 2xl:mx-[90px]">
                <div>
                  <div className="border-b-4 xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-1.5 mb-[16px] lg:mb-[24px] skew-x-[-50deg] border-[#F54308]"></div>
                </div>
                <h1 className="text-[20px] xl:text-[24px] lg:text-[22px] font-saira italic font-normal text-[#F54308] xl:tracking-normal mt-[16px] md:mt-0 leading-[30px] xl:leading-[32px] text-start uppercase">
                  Keeway Group
                </h1>
                <p className="text-[14px] mt-[6px] md:mt-[6px] leading-6 md:text-base md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] lg:mt-[10px] text-white font-saira font-normal xl:leading-[32px]">
                  Od 2022. godine, Keeway Motorcycles postaje deo veće grupacije pod nazivom Keeway Group, zajedno sa brendovima Benelli, Morbidelli i EZI Electric. Kroz ugovor sklopljen 2024. godine, Keeway Group je, zajedno sa svojom mrežom distributera i zastupništva u Italiji, Španiji, Velikoj Britaniji, Mađarskoj, Portugalu, Maleziji, Indoneziji, Indiji, na Filipinima, u SAD, Argentini, Čileu, Urugvaju i Gvatemali, postao strateški partner za plasiranje brenda Benda na ova tržišta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKCIJA 10 */}
        <section className="items-stretch lg:flex">
          <div className="w-full overflow-hidden md:flex md:flex-row bg-white">
            <div className="overflow-hidden md:order-1 xl:flex md:w-1/2 h-[300px] sm:h-[400px] md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="w-full h-full">
                <img loading="lazy" className="self-center object-cover object-center w-full h-full" src="/photos/aboutus/sekcija 10.png" alt="2024" />
              </div>
            </div>
            <div className="flex items-center justify-start order-2 px-4 md:px-[30px] lg:px-0 overflow-hidden xl:py-8 md:w-1/2 md:h-[580px] lg:h-[540px] xl:h-[670px] 2xl:h-[700px] 3xl:h-[750px]">
              <div className="2xl:mx-[90px] lg:ml-8 lg:pb-[30px] lg:w-[448px] md:pb-[10px] pb-[40px] pt-6 w-full xl:mx-14 xl:pb-0 xl:pt-0 xl:py-4 xl:w-[525px]">
                <div>
                  <div className="border-b-4 xl:w-[108px] md:w-[77.353px] lg:w-[84px] w-[86px] h-1 lg:h-1.5 mb-[16px] lg:mb-[24px] skew-x-[-50deg] border-[#F54308]"></div>
                </div>
                <h1 className="text-[20px] xl:text-[24px] lg:text-[22px] font-saira italic font-normal text-[#F54308] xl:tracking-normal mt-[16px] md:mt-0 leading-[30px] xl:leading-[32px] text-start uppercase">
                  2024: Ulazak u novu eru
                </h1>
                <p className="text-[14px] mt-[6px] md:mt-[6px] leading-6 md:text-base md:leading-[24px] lg:text-[16px] lg:leading-[26px] xl:text-[20px] lg:mt-[10px] text-[#000] font-saira font-normal xl:leading-[32px]">
                  Sa velikim uzbuđenjem predstavljamo osveženi Keeway brend, što označava početak novog strateškog plana koji se proteže do 2030. godine. Naša nova strategija fokusirana je na proširenje asortimana proizvoda, pristupačnije cene i aktivnu globalnu promociju brenda. Kako idemo napred, ostajemo dosledni našoj misiji: da ponudimo kvalitetne i inovativne motocikle koji odgovaraju različitim profilima vozača. Ovaj novi pravac potvrđuje našu posvećenost rastu, pristupačnosti i globalnom prisustvu. Pridružite nam se na ovom uzbudljivom putovanju ka još uspešnijoj budućnosti. Dobrodošli u novu eru Keeway-a – vozimo zajedno ka izvrsnosti i inovacijama.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
