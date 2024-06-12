import './ScrollingText_style.css'

const ScrollingText = () => {
    return (
        <div className="relative bg-blue-200 h-10 overflow-scroll w-auto snap-x scrollingText-custom">
            <div className="absolute h-full w-max flex items-center p-2 scrollingText-custom-containText">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, sapiente. Suscipit explicabo, quasi architecto rem magni mollitia voluptatibus minima maiores, dolores enim ipsam, beatae consectetur consequuntur minus odit deleniti corrupti!
                || Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem quam ad veritatis iste voluptate ducimus soluta enim, dignissimos reiciendis repellendus nostrum voluptatibus ullam dolorum, facilis consequatur, quia provident. Expedita!
            </div>
        </div>
    )
}

export default ScrollingText;