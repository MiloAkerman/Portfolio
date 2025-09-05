import { CardType } from "./highlight"

type LinkType = {
    text: string,
    url: string
}

export function Project(props: { id: string, name: string, duration: string, links: Array<LinkType>, description: string, type: CardType, image: string }) {
    const linkSymbol = (color: string) => {
        return (
            <svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className="h-[1.5rem] w-[1.5rem] mx-[5px] inline">
                <title>External-Link</title>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="External-Link">
                        <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
                        <path d="M20,12 L20,18 C20,19.1046 19.1046,20 18,20 L6,20 C4.89543,20 4,19.1046 4,18 L4,6 C4,4.89543 4.89543,4 6,4 L12,4" id="Path" stroke={color} strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M16,4 L19,4 C19.5523,4 20,4.44772 20,5 L20,8" id="Path" stroke={color} strokeWidth="2" strokeLinecap="round"></path>
                        <line x1="11" y1="13" x2="19" y2="5" id="Path" stroke={color} strokeWidth="2" strokeLinecap="round"></line>
                    </g>
                </g>
            </svg>
        )
    } 
    let color;
    switch (props.type) {
        case CardType.ENG: 
            color = "#B2FF03" 
            break;
        case CardType.PROG: 
            color = "#187AF5"
            break
        default: color = "#FFFFFF"
    }


    return (
        <div id={props.id} className="flex w-full h-auto lg:h-[200px] mt-[40px]">
            <div className="w-[5px] h-auto" style={{backgroundColor: color}} />
            <div className="w-full lg:w-[70%] h-full px-[20px] lg:px-[40px]">
                <h3 className="text-[2rem]/[1rem] lg:text-[2.5rem]/[2rem] inline"
                                style={{color: `color-mix(in oklab, ${color} 70%, transparent)`}}>{props.name} </h3>
                <h3 className="text-[1.5rem]/[1rem] lg:text-[2.5rem]/[2rem] lg:inline text-white/80"><i>{props.duration}</i></h3>
                <div className="mb-[5px]"/>
                {props.links.map((link, i) => {
                    return (
                        <span key={i} className="text-[1.5rem]/[1rem] lg:text-[2rem]/[1.8rem]">{i != 0 ? <span>,&nbsp;&nbsp;</span> : ""}
                        <a className="underline" style={{color: color}} href={link.url}>{link.text}</a> 
                        {linkSymbol(color)}</span>
                    )
                })}
                <div className="lg:mb-[10px]"/>
                {props.description.split("\n").map((str, i) => {
                    return (<p key={i} className="mt-[15px] text-[1.5rem]/[1rem] lg:text-[2rem]/[1.5rem]">{str}</p>)
                })}
            </div>
            <div className="hidden lg:block lg:grow h-full">
                <img src={props.image} className="float-right h-full aspect-[1.5] object-cover"></img>
            </div>
        </div>)
}