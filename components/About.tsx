import React from "react";
import { Timeline } from "@/components/ui/timeline";
// import Image from "next/image";

export function AboutTimeline() {
    const data = [
        {
            title: "2025",
            content: (
                <div className="space-y-6">


                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                Advanced Architecture Mastery
                            </h4>
                            <p className="text-neutral-300 text-sm mb-2">
                                Deep-dived into microservices, serverless computing, and cloud-native applications
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">Next.js</span>
                                <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">TypeScript</span>
                                <span className="px-2 py-1 bg-orange-600/20 text-orange-300 text-xs rounded-full">AWS</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-lg border border-blue-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                Portfolio Excellence
                            </h4>
                            <p className="text-neutral-300 text-sm mb-2">
                                Built 20+ production-ready applications serving 2,000+ monthly active users
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                                <span className="text-green-400 font-semibold">95% Client Satisfaction</span>
                                <span className="text-blue-400 font-semibold">40% Performance Boost</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-4 rounded-lg border border-green-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                Community Impact
                            </h4>
                            <p className="text-neutral-300 text-sm">
                                Mentored 10+ developers, contributed to 5 major repositories with 200+ GitHub stars
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">💻</span>
                        <h3 className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Foundation & Recognition
                        </h3>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-5 rounded-xl border border-yellow-500/30">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">🏆</span>
                            <h4 className="text-lg font-bold text-white">Smart India Hackathon 2024 - Finalist</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-neutral-300 text-sm mb-2">
                                    <strong className="text-yellow-400">Project:</strong> Downscaling of satellite based air quality map using AIML 
                                </p>
                                <p className="text-neutral-300 text-sm mb-2">
                                    <strong className="text-yellow-400">Role:</strong> Full-Stack Developer & Team Lead
                                </p>
                            </div>
                            <div>
                                <p className="text-neutral-300 text-sm mb-2">
                                    <strong className="text-yellow-400">Impact:</strong> Designed for ISRO to enhance air quality monitoring
                                </p>
                                <p className="text-neutral-300 text-sm">
                                    <strong className="text-yellow-400">Achievement:</strong> Top 
                                    1000 from 300,000+ participants
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full">React</span>
                            <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">Node.js</span>
                            <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">MongoDB</span>
                            <span className="px-2 py-1 bg-pink-600/20 text-pink-300 text-xs rounded-full">AI Integration</span>
                            <span className="px-2 py-1 bg-blue-600/20 text-purple-300 text-xs rounded-full">Machine Learning</span>
                        </div>
                    </div>

                    <div className="grid gap-3">
                        <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 p-4 rounded-lg border border-indigo-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="text-lg">🎓</span>
                                Learning Milestones
                            </h4>
                            <ul className="text-neutral-300 text-sm space-y-1">
                                <li>• MERN stack mastery with advanced concepts</li>
                                <li>• AI/ML integration into 3 web applications</li>
                                <li>• AWS Cloud Practitioner & Started Google Analytics certified course</li>

                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-pink-900/20 to-rose-900/20 p-4 rounded-lg border border-pink-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="text-lg">🎤</span>
                                Community Leadership
                            </h4>
                            <ul className="text-neutral-300 text-sm space-y-1">
                                <li>• Founded college coding club and Entrepreneurship cell (50+ members)</li>
                    
                                <li>• Launched StartUpStory platform (500+ users)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">📚</span>
                        <h3 className="text-xl font-bold text-white bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            Exploration & Discovery
                        </h3>
                    </div>

                    <div className="grid gap-4">
                        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 p-4 rounded-lg border border-emerald-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="text-lg">🤖</span>
                                Machine Learning Breakthrough
                            </h4>
                            <p className="text-neutral-300 text-sm mb-3">
                                Built Student Performance Indicator ML model with 87% accuracy
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-emerald-800/20 p-3 rounded-lg">
                                    <span className="text-emerald-400 font-semibold">10,000+</span>
                                    <p className="text-neutral-300">Records Processed</p>
                                </div>
                                <div className="bg-teal-800/20 p-3 rounded-lg">
                                    <span className="text-teal-400 font-semibold">87%</span>
                                    <p className="text-neutral-300">Model Accuracy</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-4 rounded-lg border border-blue-500/20">
                            <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="text-lg">🏅</span>
                                Programming Excellence
                            </h4>
                            <ul className="text-neutral-300 text-sm space-y-1">
                                <li>• Advanced Python & JavaScript ES6+ mastery</li>
                                <li>• 5+ coding competitions, 3 top-10 finishes</li>
                                <li>• Organized weekly coding sessions for 20+ students</li>
                                <li>• Focused on algorithms & data structures</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">🌐</span>
                        <h3 className="text-xl font-bold text-white bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                            The Beginning
                        </h3>
                    </div>

                    <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-5 rounded-xl border border-orange-500/30">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">✨</span>
                            <h4 className="text-lg font-bold text-white">The Spark Moment</h4>
                        </div>
                        <p className="text-neutral-300 text-sm mb-4">
                            Built first personal website and discovered passion for creating digital solutions
                        </p>

                        <div className="grid gap-3">
                            <div className="bg-orange-800/20 p-3 rounded-lg">
                                <h5 className="text-orange-400 font-semibold mb-1">Foundation Skills</h5>
                                <p className="text-neutral-300 text-sm">HTML5, CSS3, Vanilla JavaScript, Responsive Design</p>
                            </div>

                            <div className="bg-red-800/20 p-3 rounded-lg">
                                <h5 className="text-red-400 font-semibold mb-1">Academic Excellence</h5>
                                <p className="text-neutral-300 text-sm">Data Structures & Algorithms (A+), Database Design, Git Mastery</p>
                            </div>

                            <div className="bg-pink-800/20 p-3 rounded-lg">
                                <h5 className="text-pink-400 font-semibold mb-1">First Achievements</h5>
                                <p className="text-neutral-300 text-sm">College hackathon top 20, React Native exploration, UI/UX fundamentals</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className="py-20 w-full">
            <h1 className="heading mb-4">
                My <span className="text-purple">Timeline Journey</span>
            </h1>
            <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
                From curious beginner to full-stack developer - every milestone tells a story of growth,
                learning, and impact in the world of technology.
            </p>
            <div className="relative w-full overflow-clip">
                <Timeline data={data} />
            </div>

            <div className="text-center mt-8">
                <p className="text-neutral-400 italic max-w-3xl mx-auto">
                    Every line of code is a step forward, every project a milestone, every challenge an opportunity to grow.
                    This journey is just the beginning of transforming ideas into digital reality.
                </p>
            </div>
        </div>
    );
}