export function Horizontal(props: { images: Array<string> }) {
    return (<div className="flex gap-[20px] h-full w-full">
        {props.images.map((imageUrl, idx) => (
                <img
                    key={idx}
                    className="h-full object-cover select-none"
                    src={imageUrl}
                    alt=""
                />
            ))}
    </div>)
}

export function Vertical(props: { images: Array<string> }) {
    return (<div className="flex flex-col gap-[20px] w-full h-full">
        {props.images.map((imageUrl, idx) => (
                <img
                    key={idx}
                    className="w-full object-cover select-none"
                    src={imageUrl}
                    alt=""
                />
            ))}
    </div>)
}