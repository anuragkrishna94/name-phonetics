"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NpAboutSection = () => {
    const [shouldLineClamp, setShouldLineClamp] = useState<boolean>(true);
    return (
        <div className="border border-gray-200 rounded-md p-8 flex flex-col gap-4 bg-white max-w-[609px]">
            <div className="text-lg font-semibold">About</div>
            <div className="">
                <span className={shouldLineClamp ? 'line-clamp-3' : ''}>
                Results-oriented software developer with a proven track record of building high-quality web applications. Successfully initiated and completed the development of our next-generation JavaScript application, leveraging modern frameworks and best practices. Demonstrated expertise in .NET Framework, .NET Core, JavaScript, React, and next.js. Committed to delivering scalable, efficient, and user-friendly solutions.<br />
Key Highlights:<br />
* Next.js Mastery: Proficient in developing server-side rendered and statically generated React applications.<br />
* Unit Test Coverage: Adheres to rigorous testing standards to ensure code quality and reliability.<br />
* Technology Stack: Experienced in a diverse range of programming languages and frameworks.<br />
* Innovation: Passionate about staying up-to-date with emerging technologies and industry trends.<br />
Looking to connect with like-minded professionals and contribute to exciting projects.
                </span>
                <span><Button className="text-blue-600" variant={"link"} onClick={() => setShouldLineClamp(!shouldLineClamp)}>Show { shouldLineClamp ? 'more' : 'less'}</Button></span>
            </div>
        </div>
    )
}

export default NpAboutSection;