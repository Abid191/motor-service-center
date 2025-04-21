import Image from "next/image";

const About = () => {
    return (
        <div>
            <h3 className='text-orange-400 text-3xl text-center mt-10 font-bold'>About Us</h3>
            <div className="hero bg-white ">
                <div className="flex flex-col lg:flex-row mt-10 items-center">
                    <div className='relative'>
                        <Image className="w-3/5 relative rounded-lg shadow-2xl" alt="person" src='/assets/images/about_us/person.jpg' width={400} height={200}></Image>
                        <Image className=" absolute w-4/8 top-1/3 left-1/4 border-8 border-white rounded-lg shadow-2xl" alt="person" src='/assets/images/about_us/parts.jpg' width={400} height={200}></Image>
                    </div>
                    <div className='text-center'>
                        <h1 className="text-4xl font-bold ">We are qualified <br /> & of experience <br />in this field</h1>
                        <h2 className="mt-5 ">
                            Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem <br />
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </h2>
                        <h2 className="mt-5 ">
                        the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which dont look even slightly believable.
                        </h2 >
                        <button className=" mt-5 btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
