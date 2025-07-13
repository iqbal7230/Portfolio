"use client";
import React from "react";
import { skill } from "@/data";

export function Skillbutton() {
    return (
        <div className=" w-full ">
            <h1 className="heading py-10 ">
                My <span className="text-purple">Skills</span>
            </h1>



            <div className="pb-2 px-1 w-full ml-auto mr-auto">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 w-full max-w-7xl mx-auto gap-2">
                    {skill.map((skill) => (
                        <button
                            key={skill}
                            className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-1 py-0.5 text-xs font-medium text-white backdrop-blur-3xl">
                                {skill}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}


