import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TO5IQ3PAVJMO3G6UO3CDIWTS2Y.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Your Trusted Patner In Healthy life
                        </h2>
                        <p className="mt-6 text-gray-600">
                            The owner or manager of a grocery store is a grocer. This word once meant "one who buys and sells in gross," or in large quantities, from the Anglo-French grosser. By the 16th century, grocer also meant "merchant selling food," but earlier that person would've been called a spicer

                        </p>
                        <p className="mt-4 text-gray-600">
                            A supermarket is a self-service shop offering a wide variety of food, beverages and household products, organized into sections. This kind of store is larger and has a wider selection than earlier grocery stores, but is smaller and more limited in the range of merchandise than a hypermarket or big-box market.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}