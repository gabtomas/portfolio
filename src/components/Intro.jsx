import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                Tomáš Gabriel
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software Engineer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm an junior software engineer. I'm currently studying at the{" "}
                <a href="https://unicornuniversity.net/">Unicorn University.</a>
                <br />
                <br />
                Here are my latest projects.
            </p>
        </div>
    );
}

export default Intro;
