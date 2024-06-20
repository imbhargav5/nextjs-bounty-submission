import MarqueeDemo from "../components/marquee-demo"

const Testimonials = () => {
    return (
        <div className="testimonial flex flex-col justify-center items-center gap-4 bg-gray-100 dark:bg-gray-800 pt-24">
            <div className="heading text-4xl font-semibold">Don't take our words for it</div>

            <div className="paragraph text-xl text-gray-500 dark:text-gray-400 w-[900px] px-16">Hear what our satisfied customers have to say about Nextbase
            </div>

            <div className="reviews w-8/12">

                <MarqueeDemo />
            </div>
        </div>
    )
}

export default Testimonials
