export const Skeleten = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div role="status" className="max-w-2xl w-full animate-pulse">
                <div className="border-b border-slate-200 pt-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div> {/* Avatar placeholder */}
                        <div className="h-4 bg-gray-200 rounded-full w-32"></div> {/* Author name placeholder */}
                        <div className="h-4 bg-gray-200 rounded-full w-20"></div> {/* Published date placeholder */}
                    </div>
                    <div className="h-6 bg-gray-200 rounded-full w-full mt-4"></div> {/* Title placeholder */}
                    <div className="h-4 bg-gray-200 rounded-full w-full mt-3"></div> {/* Content placeholder */}
                    <div className="h-4 bg-gray-200 rounded-full w-3/4 mt-3"></div> {/* Content placeholder */}
                    <div className="h-4 bg-gray-200 rounded-full w-1/2 mt-3"></div> {/* Content placeholder */}
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};