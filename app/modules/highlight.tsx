enum CardType {
    ENG, PROG, DES
}

export function Highlight(props: {title: string, subtitle: string, images: string, w: number, h: number, bg: CardType}) {
    let color;
    switch (props.bg) {
        case CardType.ENG: color = "#9AD21B"
        case CardType.PROG: color = "#4496FE"
        default: color = "#FFFFFF"
    }

    return (
        // <div className="aspect-[1] lg:aspect-auto col-span-2 row-span-4 bg-eng-green rounded-2xl"></div>
        <div style={{
            aspectRatio: props.w / props.h,
            gridColumn: `span ${props.w}`,
            gridRow: `span ${props.h}`,

        }} className="lg:aspect-auto"></div>
    )
}