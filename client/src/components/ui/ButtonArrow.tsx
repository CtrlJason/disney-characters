// Types
import type { ButtonArrowProps } from "../../types/buttons"

const ButtonArrow = ({ handleDirection, direccion }: ButtonArrowProps) => {
    return (
        <button
            onClick={handleDirection}
            className={`${direccion === "left" ? "left-8" : "right-8"} absolute top-1/2 -translate-y-1/2 text-4xl p-4 rounded-full cursor-pointer z-10 transition-transform duration-150 hover:scale-110 active:bg-gray-200 active:scale-105 bg-white`}
        >
            {direccion === "left" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7" /></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7" /></svg>
            )}
        </button>
    )
}

export default ButtonArrow