type FooterProps = {
    type: "Signup" | "Signin";
    onClick: () => void;
};

export const Footer = ({ type, onClick }: FooterProps) => {
    return (
        <div>
            <div>
                <button
                    onClick={onClick}
                    className={`w-full bg-black border rounded-md p-2 mt-6 border-gray-400 ${
                        type === "Signup"
                            ? "text-white font-bold hover:bg-slate-200 hover:text-black"
                            : "text-white font-bold hover:bg-slate-200 hover:text-black"
                    }`}
                >
                    {type}
                </button>
            </div>
        </div>
    );
};