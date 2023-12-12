import React from 'react';
import { GlobeAltIcon, CurrencyDollarIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const About: React.FC = () => {
    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-semibold text-blue-600 mb-4">About Psyduck</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Welcome to Psyduck, a pioneering decentralized livestreaming donation platform designed to transform how viewers support creators worldwide. Our innovative platform is not just a tool for transactions but a bridge connecting artists and audiences in a dynamic, interactive community.
                </p>

                <div className="space-y-8">
                    {/* Global Access for All */}
                    <div>
                        <div className="flex justify-center">
                            <GlobeAltIcon className="h-10 w-10 text-blue-600 inline-block mb-2" />
                            <h2 className="text-2xl font-semibold ml-2 mt-2">Global Access for All</h2>
                        </div>
                        <p className="text-lg text-gray-600">
                            We envision a world where geographical boundaries do not limit creativity and support. Our platform ensures that no matter where you are, you can access and support incredible creators across the globe, fostering a diverse cultural exchange and broadening the horizons of the creative landscape.
                        </p>
                    </div>

                    {/* Instant, Direct Support */}
                    <div>
                        <div className="flex justify-center">
                            <CurrencyDollarIcon className="h-10 w-10 text-blue-600 inline-block mb-2" />
                            <h2 className="text-2xl font-semibold ml-2 mt-2">Instant, Direct Support</h2>
                        </div>
                        <p className="text-lg text-gray-600">
                            In the fast-paced world of livestreaming, we understand the importance of immediacy. Our transaction process ensures that your donations reach creators instantly, empowering them to continue their creative journey without financial hindrance.
                        </p>
                    </div>

                    {/* Security and Transparency */}
                    <div>
                        <div className="flex justify-center">
                            <ShieldCheckIcon className="h-10 w-10 text-blue-600 inline-block mb-2" />
                            <h2 className="text-2xl font-semibold ml-2 mt-2">Security and Transparency</h2>
                        </div>
                        <p className="text-lg text-gray-600">
                            Leveraging the power of blockchain technology, Psyduck guarantees secure and transparent transactions, ensuring a safe and trustworthy environment. Every donation is recorded on a decentralized ledger, offering unmatched security and transparency.
                        </p>
                    </div>

                    {/* Fostering Community Engagement */}
                    <div>
                        <div className="flex justify-center">
                            <UserGroupIcon className="h-10 w-10 text-blue-600 inline-block mb-2" />
                            <h2 className="text-2xl font-semibold ml-2 mt-2">Fostering Community Engagement</h2>
                        </div>
                        <p className="text-lg text-gray-600">
                            Engage with creators and other supporters through direct interactions and feedback, and be part of a community that celebrates and uplifts each other. Our platform is more than just a donation site; it is a hub for collaboration, inspiration, and mutual growth.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold ml-2 mt-2">Join Us</h2>
                        <p className="text-lg text-gray-600 ">
                            Join us on this exciting journey at Psyduck. Together, we are not just watching the future of digital interaction and creativity unfold; we are actively shaping it. Be a part of this revolutionary movement where every stream becomes a pathway to closer connections and shared success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
