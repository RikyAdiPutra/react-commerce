import { useStrore } from "@/lib/store";

const Icon = ({ children }) => {
    const cart = useStrore((state) => state.cart)
    return (
        <div>
            <div className="absolute text-[10px] top-0 right-0 bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">{cart}</div>
            {children}
        </div>
    )
}

export default Icon