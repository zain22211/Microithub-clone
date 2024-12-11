

const Whoweare = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4">
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Placeholder"
          className="w-full h-auto rounded-[30px] md:mt-32 mt-10"
        />
      </div>
      <div className="mt-4 md:mt-20 md:ml-4 text-left md:text-left">
      <h6 className="font-medium uppercase text-start mb-4  text-blue-600">Who we are</h6>
      <h2 className=" font-bold text-4xl text-left mb-4">
        We&#39;re Developing Innovative, High-Performance{" "}
        <span className="text-[#3E66F3]">Software Solutions</span>
      </h2>
    
      <div className="space-y-8 text-gray-600">
      <p>
        We're developing innovative, high-performance Software solutions. At Microithub, we are a forward-thinking technology company dedicated to delivering innovative and high-quality software solutions. With expertise spanning across software development, web development, and mobile application development, we help businesses transform their ideas into impactful digital products.
      </p>
      <p>
        Our team of experienced developers and designers are committed to creating customized solutions that meet the unique needs of our clients. We leverage the latest technologies, industry best practices, and a collaborative approach to build scalable, efficient, and user-friendly software that drives success.
      </p>
      <p>
        Whether you're looking to develop a sophisticated web platform, a high-performance mobile app, or a robust enterprise software solution, Microithub is here to guide you every step of the way. We focus on delivering results that not only meet but exceed your expectations, ensuring your project is on time, within budget, and designed for long-term growth.
      </p>
    </div>
    </div>
    
    </div>
  );
};

export default Whoweare;
