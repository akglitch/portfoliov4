import React from 'react';

export const About: React.FC = () => {
    const technologies = [
        ["React", "JavaScript", "Python"],
        ["Express Js", "MongoDb", "NodeJs"],
        ["Power BI", "TensorFlow"],
        ["Git", "GitHub"],
        ["Pandas", "Numpy"],
    ];

    return ( 
        <div id='about'>
        <div className="bg-[#0a192f] text-white pb-44 p-8 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-baseline space-x-2 mb-8">
                    <span className="text-green-400 text-xl font-mono">01.</span>
                    <h1 className="text-3xl font-semibold">About Me</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <p className="text-base leading-relaxed mb-4">
                            Hello! I&apos;m Kwaku, a Software Developer based in Kumasi, Ghana.
                        </p>
                        <p className="text-base leading-relaxed mb-4">
                            I enjoy creating beautiful and reliable applications for the internet. My goal is to always build scalable products and performant experiences.
                        </p>
                        <p className="text-base leading-relaxed mb-4">
                            Here are a few technologies I&apos;ve been working with recently:
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-sm">
                            {technologies.flat().map((tech, index) => (
                                <div key={index} className="flex items-center bg-gray-800 p-2 rounded-lg shadow-md">
                                    <span className="text-green-400 mr-2">•</span>
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
