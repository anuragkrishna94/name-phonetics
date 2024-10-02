import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProfileName } from "./ProfileName";

const NpProfileSection = () => {
    return (
        <div className="rounded-md border border-gray-200 bg-white md:h-[450px] h-[480px]">
            <div className="relative h-[200px]">
                <Image 
                    src={'/cover-image.jpg'} 
                    fill
                    // sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                        objectFit: 'cover', // cover, contain, none
                    }}
                    className="rounded-md"
                    alt="Cover Image" 
                />
            </div>
            <div className="relative -top-20 left-8 rounded-full p-4 bg-white w-[160px]">
                <Avatar className="h-[150px] w-[150px] relative -left-3 -top-3">
                    <AvatarImage src="/profile-image.jpg" alt="profile image" />
                    <AvatarFallback>AG</AvatarFallback>
                </Avatar>
            </div>
            <div className="relative -top-20 px-8">
                <ProfileName />
                <div>Senior Software Engineer | .Net | React | NextJS | Full Stack Development</div>
                <div><span className="text-gray-400 text-sm">Hyderabad, Telangana, India</span><Button className="text-blue-600" variant={"link"}>Contact info</Button></div>
                <div></div>
                <div className="flex gap-2">
                    <Button className="rounded-3xl bg-blue-700 hover:bg-blue-900" variant={"default"}>Open to</Button>
                    <Button className="rounded-3xl text-blue-600 border-blue-600 hover:border-2 hover:bg-blue-100 hover:text-blue-900" variant={"outline"}>Add profile section</Button>
                    <Button className="rounded-3xl text-gray-700" variant={"outline"}>More</Button>
                </div>
            </div>
        </div>
    )
}

export default NpProfileSection;