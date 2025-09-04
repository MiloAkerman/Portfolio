import { useEffect, useState, type ReactNode } from "react";
import Tilt from 'react-parallax-tilt';

export enum CardType {
    ENG, PROG, DES
}

export function Highlight(props: {title: string, subtitle: string, content: ReactNode, colStart: number, rowStart: number, w: number, h: number, bg: CardType}) {
    let [aspectRatio, setAspectRatio] = useState("");
    let color;
    switch (props.bg) {
        case CardType.ENG: 
            color = "#9AD21B" 
            break;
        case CardType.PROG: 
            color = "#4496FE"
            break
        default: color = "#FFFFFF"
    }

    const calcAspectRatio = () => {
        setAspectRatio(window.innerWidth < 1024 ? Math.max((props.w / props.h), 1).toString() : "auto");
    }

    useEffect(() => {
        calcAspectRatio(); 
        window.addEventListener('resize', calcAspectRatio);
        return () => window.removeEventListener('resize', calcAspectRatio);
    }, [])

    return (
        // <div className="aspect-[1] lg:aspect-auto col-span-2 row-span-4 bg-eng-green rounded-2xl"></div>
        <Tilt tiltReverse={true} style={{
            gridColumn: `${props.colStart} / span ${props.w}`,
            gridRow: `${props.rowStart} / span ${props.h}`,
            background: `linear-gradient(to bottom, ${color}80 0%, ${color}20 100%)`,
            backdropFilter: "blur(10px)"
        }} className="rounded-4xl flex flex-col">
            <h3 className="text-[1.5rem]/[1rem] lg:text-[2.2rem]/[2rem] mt-[1.5rem] mb-[0.5rem]">{props.title}</h3>
            <h4 className="text-[1rem]/[1rem] lg:text-[1.5rem]/[1.5rem] mx-[1.8rem] opacity-60">{props.subtitle}</h4>
            <div className="max-h-[150px] lg:max-h-max m-[1.2rem] rounded-4xl content-center overflow-auto hover:scale-110 hover:drop-shadow-black hover:drop-shadow-2xl duration-100">{props.content}</div>
        </Tilt>
    )
}