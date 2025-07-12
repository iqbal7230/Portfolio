import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function AboutTimeline() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <ul className="mb-8 list-disc pl-5 text-base font-sans font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
                        <li>
                            Deep dive into Web Development, mastering cutting-edge technologies and building more than 20 projects.🚀
                        </li>
                        <li>
                            Playing with algorithms, data structures, and building scalable applications.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <ul className="mb-8 list-disc pl-5 text-base font-sans font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
                        <li>
                            Learned the fundamentals of Web Development, including HTML, CSS, and JavaScript. Built my first few projects and fell in love with coding.💻
                        </li>
                        <li>
                            Learned about machine learning and AI, and started exploring how to integrate these technologies into web applications.
                        </li>
                        <li>
                            Selected in Smart India Hackathon 2024, where I worked on a project that aimed to solve real-world problems using technology. This experience taught me the importance of teamwork and innovation in software development.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <ul className="mb-8 list-disc pl-5 text-lg font-sans text-neutral-800 md:text-base dark:text-neutral-200">
                        <li>
                            Learned the basics of programming with Python and JavaScript. Started building small projects to apply my knowledge.📚
                        </li>
                        <li>
                            Joined a local coding community, where I met other aspiring developers and learned from their experiences. This helped me to stay motivated and inspired.
                        </li>
                    </ul>
                </div>
            ),
        }
    ];
    return (
        <div className="pb-10 w-full">
            <h1 className="heading">
                My <span className="text-purple">Timeline Journey</span>
            </h1>
            <div className="relative w-full overflow-clip">
                <Timeline data={data} />
            </div>
        </div>
    );
}
