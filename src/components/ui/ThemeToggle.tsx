import {SunIcon} from "@heroicons/react/24/outline";

export const ThemeToggle = () => {
    return (
        <button>
            <SunIcon
                className="w-6 h-6 hover:rotate-90 transition duration-500 cursor-pointer"
            />
        </button>
    )
}