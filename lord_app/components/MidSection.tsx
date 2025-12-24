export default function HealthiansHero() {
    return (
        <section className="bg-[#00a0a8] py-14 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-center mb-10 text-[rgb(255,255,255)] ">
                The Excellence of{" "}
                <span className="text-[#fcbe57]">Healthians Labs</span>
            </h1>
            <div className="max-w-5xl mx-auto">

                <div className="  !flex   gap-12 items-center justify-center">

                    {/* Left Content */}
                    <div className="text-[#fff] space-y-4 mr-24">

                        <p className="text-sm sm:text-base font-medium text-[#ffff]/95">
                            Healthians is one of the most trusted players in diagnostics
                            today, with a network of fully automated labs across major
                            cities in India, that are hardcoded with innovative technology,
                            advanced robotics and intelligent digital solutions.
                        </p>

                        <p className="text-sm sm:text-base font-medium  text-[#ffff]/95">
                            With an extensive team of highly qualified lab technicians and
                            pathologists, our single-minded purpose is to follow the
                            strictest of quality measures to maintain accuracy for each test
                            we perform.
                        </p>

                        <button className="mt-3 bg-white text-[#000] font-normal px-5 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                            Know more
                        </button>
                    </div>

                    {/* Right Content - Video */}
                    <div className="relative ">
                        <div className="relative overflow-hidden shadow-2xl aspect-video bg-black w-72 md:w-[400px]">
                            <iframe
                                className="absolute inset-0 h-full w-full border !border-[#f9bb55]"
                                src="https://www.youtube.com/embed/6w7bJJw2Xtc?rel=0"
                                title="Healthians Video" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}