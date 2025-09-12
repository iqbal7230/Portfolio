
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { projects } from '@/data/index';
import Image from "next/image";

export function Project() {
   

    return (
        <div className=" py-10 mx-auto" id='projects'>
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-8 py-10">
            {projects.map((project: any) => (
                <BackgroundGradient
                    key={project.id}
                    className="rounded-[22px] max-w-sm w-full p-6 sm:p-10 bg-white dark:bg-black-100 shadow-lg"
                >
                    {/* <img
                        src={project.image}
                        alt={project.title}
                        height="300"
                        width="400"
                        className="object-cover rounded-lg mx-auto mb-4"
                    /> */}
                    <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                        {project.title}
                    </h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 text-justify">
                        {project.des}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.teckstack.map((tech: any, idx: number) => (
                            <span
                                key={idx}
                                className="bg-zinc-200 dark:bg-zinc-800 text-xs px-3 py-1 rounded-full font-medium text-zinc-700 dark:text-zinc-200"
                            >
                                {tech}
                            </span>
                        ))}
                    <div className="flex gap-2 mt-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" inline-flex items-center rounded-full px-3 py-1 text-xs text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition font-semibold shadow-sm mr-4"
                        >
                                <Image src="/world-wide-web.svg" alt="website" className="inline-block w-4 h-4 mr-1"  height={16} width={16}/>
                            Website
                        </a>
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs text-white bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 transition font-semibold shadow-sm"
                        >
                            <Image src="/git.svg" alt="GitHub" className="inline-block w-4 h-4 mr-1" height={16} width={16}/>
                            Source Code
                        </a>
                    </div>
                    </div>
                </BackgroundGradient>
            ))}
        </div>
        </div>
    );
}
