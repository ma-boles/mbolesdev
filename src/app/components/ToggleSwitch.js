import { useState, useEffect } from "react";

export default function ToggleSwitch({ onToggle }) {
    const [isToggled, setIsToggled] = useState(false);
    
    useEffect(() => {
        document.documentElement.classList.add('dark'); // Add dark class by default
      }, []);
    
      const handleToggle = () => {
        setIsToggled(!isToggled);
        // Toggle the classes on the html element
        if (isToggled) {
          document.documentElement.classList.remove('dark'); // Remove dark class to switch to light mode
          document.documentElement.classList.add('light'); // Add light class
        } else {
          document.documentElement.classList.add('dark'); // Add dark class to switch back to dark mode
          document.documentElement.classList.remove('light'); // Remove light class
        }
      };

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
                className={`absolute h-6 w-6 bg-white rounded-full top-1 left-1 transition-transform duration-300 ${isToggled ? 'transform translate-x-8' : ''}`}
                />
            </span>
        </label>
        </>
    )
}