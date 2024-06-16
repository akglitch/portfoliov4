import React from 'react';

export const Contact: React.FC = () => {
    return (
        <div id='contact'>
        <div className="bg-[#0a192f] text-white p-8 flex justify-center items-center min-h-screen">
            <div className="text-center max-w-6xl mx-auto">
                <h3 className="text-green-400 text-xl font-mono mb-4">03. What&apos;s Next?</h3>
                <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
                <p className="text-gray-400 mb-8">
                     I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:ntirianinakwa@gmail.com" className="inline-block px-6 py-3 border-2 border-green-400 text-green-400 rounded-md hover:bg-teal-400 hover:text-white transition-colors">
                    Say Hello
                </a>
            </div>
        </div>
        </div>
    );
};
