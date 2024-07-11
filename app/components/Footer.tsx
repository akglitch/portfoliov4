import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a192f] text-white py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                        <a href="https://github.com/akglitch" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-400 hover:text-white transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 00-3.16 19.47c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.67 2.67 0 00-1.11-1.47c-.9-.62.07-.6.07-.6a2.12 2.12 0 011.55 1.04 2.14 2.14 0 002.93.83 2.15 2.15 0 01.64-1.35c-2.22-.25-4.56-1.11-4.56-4.93a3.84 3.84 0 011.02-2.67 3.57 3.57 0 01.1-2.63s.83-.27 2.73 1.02a9.32 9.32 0 015 0c1.9-1.29 2.73-1.02 2.73-1.02.24.62.3 1.28.1 2.63a3.84 3.84 0 011.02 2.67c0 3.83-2.35 4.68-4.6 4.92.36.31.68.91.68 1.85v2.75c0 .26.18.59.69.48A10 10 0 0012 2z" />
                            </svg>
                        </a>
                       
        
                        <a href="https://x.com/Aninakwageorge1" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-400 hover:text-white transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.46 6.6c.01.18.01.36.01.54 0 5.5-4.18 11.83-11.83 11.83-2.35 0-4.53-.69-6.37-1.87.33.04.66.06.99.06 1.95 0 3.75-.66 5.18-1.77-1.82-.03-3.35-1.24-3.88-2.91.26.05.53.08.81.08.39 0 .78-.05 1.14-.14-1.9-.38-3.33-2.06-3.33-4.08v-.05c.56.31 1.19.5 1.87.52-1.1-.73-1.83-1.98-1.83-3.4 0-.75.2-1.46.56-2.06 2.03 2.5 5.06 4.14 8.47 4.31-.07-.3-.11-.62-.11-.94 0-2.3 1.87-4.16 4.16-4.16 1.2 0 2.28.5 3.04 1.3.95-.19 1.84-.53 2.64-1.01-.31.97-.97 1.78-1.83 2.3.85-.1 1.66-.33 2.42-.66-.57.85-1.28 1.59-2.1 2.18z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/kwaku-ntiri-aninakwa-b01ba5221/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-400 hover:text-white transition duration-300">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"  fill="#FFFFFF"/></svg>

                        </a>
                    </div>
                  

                    <div className="text-center">
                       
                        <p className="text-gray-400 text-sm mt-2">&copy; 2024 AKGlitch.Inc. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
