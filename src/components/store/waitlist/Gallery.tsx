export default function Gallery() {
    return(
        <>
            <div className="my-[5rem]">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-10">
                        A Fashion Gallery of Signatures by Doyen{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
                            #UnveilingtheChic
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://images.unsplash.com/photo-1504349147817-111111111111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                alt="A picture of a cat"
                            />
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl font-bold text-center mb-2">
                                    A Cat
                                </h3>
                                <p className="text-sm text-gray-500">
                                    A cat is a type of animal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}