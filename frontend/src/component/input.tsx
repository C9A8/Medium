interface inputType {
    type: string;
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputs = ({ label, type, placeholder, onChange }: inputType) => {
    return (
        <div>
            <div className="font-semibold text-lg mt-3">
                {label}
            </div>
            <div className="mt-2 border rounded-md border-gray-400"> 
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="w-full p-2  focus:outline-gray-600" 
                />
            </div>
        </div>
    );
};