import { useState } from "react";

export default function ToggleSwitch({ onToggle }) {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(isToggled);
        onToggle(!isToggled);
    }
    
    return (
        <>
        <label className="relative inline-block w-16 h-8">
            <input 
            type="checkbox"
            className="opacity-0 w-0 h-0"
            checked={isToggled}
            onChange={handleToggle}
            />
            <span className={`absolute cursor-pointer inset-0 rounded-full bg-gray-400 transition-colors duration-300 ${isToggled ? 'bg-blue-500' : 'bg-gray-400'} `}>
                <span 
                className={`absolute h-6 w-6 bg-white rounded-full top-1 left-1 transition-transform duration-300 ${isToggled ? 'transform trnslate-x-8' : ''}`}
                />
            </span>
        </label>
        </>
    )
}