import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryCollection {
    id: string;
    title: string;
    slug: string;
    coverImage: string;
    photoCount: number;
}

const collections: GalleryCollection[] = [
    {
        id: '1',
        title: 'BLOCKDAG HACKATHON',
        slug: 'blockdag-hackathon-dutse-2.0',
        coverImage: '/assets/blockdag1.png',
        photoCount: 24,
    },
    {
        id: '2',
        title: 'BLOCKDAG HACKATHON',
        slug: 'blockdag-hackathon-dutse-1.0',
        coverImage: '/assets/blockdag2.png',
        photoCount: 45,
    },
    {
        id: '3',
        title: 'BLOCKDAG HACKATHON',
        slug: 'blockdag-hackathon-kano-1.0',
        coverImage: '/assets/blockdag3.png',
        photoCount: 18,
    },
    {
        id: '4',
        title: 'SUI BUILDATHON',
        slug: 'sui-buildathon-kaduna',
        coverImage: '/assets/sui.png',
        photoCount: 18,
    },
];

export const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                        Event Gallery
                    </h2>
                    <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto">
                        Browse through my collection of memorable moments from past events.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection) => (
                        <Link
                            key={collection.id}
                            href={`/gallery/${collection.slug}`}
                            className="group relative block overflow-hidden rounded-2xl bg-zinc-900 shadow-md hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={collection.coverImage}
                                    alt={collection.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-blue-600 rounded-full">
                                    {collection.photoCount} Photos
                                </span>
                                <h3 className="text-2xl font-bold leading-tight">
                                    {collection.title}
                                </h3>
                                <div className="mt-4 flex items-center text-sm font-medium text-blue-300 group-hover:text-white transition-colors">
                                    View Collection
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

