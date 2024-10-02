"use client";
import { Input } from "@/components/ui/input";
import { GrSearch } from "react-icons/gr";
import { useMediaQuery } from 'react-responsive';

const SearchBar = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <div>
            {
                isMobile ? 
                <GrSearch scale={1.2} /> :
                <Input placeholder="Search" />
            }
        </div>
    )
}

export default SearchBar;