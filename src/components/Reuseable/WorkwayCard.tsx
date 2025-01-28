

interface WorkwayCardProps {
    img: string;
    title: string;
    onClick? : () => void
    isSelected : any

}

const WorkwayCard: React.FC<WorkwayCardProps> = ({img , title , onClick , isSelected}) => {
    return (
        <div onClick={onClick}
         className={`flex flex-col justify-between items-center gap-2 rounded-xl py-6 bg-white ho w-48 h-24 hover:cursor-pointer hover:bg-gray-100 hover:border-blue-900 border-2 ${isSelected?  "border-blue-900 " : "border-white"}`}
         >
            <img className="w-6" src={img} alt="icon" />
            <h1 className="font-medium pb-6">{title}</h1>
        </div>
    )

}
export default WorkwayCard