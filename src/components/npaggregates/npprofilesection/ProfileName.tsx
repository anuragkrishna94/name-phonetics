"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";

export const ProfileName = () => {
    const [nameAudio, setNameAudio] = useState<HTMLAudioElement | null>(null)

    useEffect(() => {

        setNameAudio(new Audio("/Anurag.wav")) // only call client

    },[])
    return (
        <div className="text-lg font-semibold justify-center">
            <div className="flex items-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <span className="hover:cursor-pointer hover:bg-blue-100 py-2 rounded-md">Anurag Garimella</span> 
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-xl">About this profile</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center">
                                <h2 className="text-lg font-semibold">Anurag Garimella</h2>
                                <Button variant={"ghost"} onClick={() => {nameAudio?.play();}}><HiMiniSpeakerWave /></Button>
                            </div>
                            <h3 className="text-md font-semibold">Phonetics</h3>
                            <div><span>Pronounced as : </span><span className="text-gray-500">uh - n uu - r ah g</span></div>
                            <div>/ə.nʊ.ɾɑːɡ/, [ɐ.nʊ.ɾäːɡ]</div>
                            <Info title="Joined" text="May 2016" />
                            <Info title="Contact information" text="Updated less than 1 year ago" />
                            <Info title="Profile photo" text="Updated over 1 year ago" />
                        </div>
                    </DialogContent>
                </Dialog>
                <Button variant={"ghost"} onClick={() => {nameAudio?.play();}}><HiMiniSpeakerWave /></Button>
                <span className="text-gray-400 text-sm font-light">(He/Him)</span>
            </div>
        </div>
    )
}

const Info = ({title, text}: {title: string, text: string}) => {
    return (
        <div>
            <h3 className="text-md font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{text}</p>
        </div>
    )
}
