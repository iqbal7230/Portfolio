
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { projects } from '@/data/index';

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
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
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
                    </div>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition font-semibold"
                    >
                        Visit Project
                    </a>
                </BackgroundGradient>
            ))}
        </div>
        </div>
    );
}
