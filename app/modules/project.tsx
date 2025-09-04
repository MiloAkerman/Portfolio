type LinkType = {
    text: string,
    url: string
}

export function Project(props: { name: string, duration: string, links: Array<LinkType>, description: string }) {
    const linkSymbol = (color: string) => {
        return (
            <svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" className="h-[1.5rem] w-[1.5rem] mx-[5px] inline">
                <title>External-Link</title>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="External-Link">
                        <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                        <path d="M20,12 L20,18 C20,19.1046 19.1046,20 18,20 L6,20 C4.89543,20 4,19.1046 4,18 L4,6 C4,4.89543 4.89543,4 6,4 L12,4" id="Path" stroke={color} stroke-width="2" stroke-linecap="round"></path>
                        <path d="M16,4 L19,4 C19.5523,4 20,4.44772 20,5 L20,8" id="Path" stroke={color} stroke-width="2" stroke-linecap="round"></path>
                        <line x1="11" y1="13" x2="19" y2="5" id="Path" stroke={color} stroke-width="2" stroke-linecap="round"></line>
                    </g>
                </g>
            </svg>
        )
    } 

    return (
        <div className="flex w-full h-auto lg:h-[200px] mt-[40px]">
            <div className="w-[5px] h-full bg-white" />
            <div className="w-full h-full px-[20px] lg:px-[40px]">
                <h3 className="text-[2rem]/[1rem] lg:text-[2.5rem]/[2rem] inline text-eng-green/80">{props.name} </h3>
                <h3 className="text-[1.5rem]/[1rem] lg:text-[2.5rem]/[2rem] lg:inline">{props.duration}</h3>
                <br />
                {props.links.map((link, i) => {
                    return (
                        <span className="text-[1.5rem]/[1rem] lg:text-[2rem]/[1.8rem]">{i != 0 ? <span>,&nbsp;&nbsp;</span> : ""}
                        <a className="text-eng-highlight underline" href={link.url}>{link.text}</a> 
                        {linkSymbol("#B2FF03")}</span>
                    )
                })}
                <br />
                <p className="mt-[25px] text-[1.5rem]/[1rem] lg:text-[2rem]/[1.5rem]">{props.description}</p>
            </div>
            <div className="hidden lg:block lg:grow-1 h-full">
                <img src="app/resources/spectrogram_piha.png" className="float-right"></img>
            </div>
        </div>)
}