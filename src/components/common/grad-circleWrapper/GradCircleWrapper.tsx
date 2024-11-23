
export default function GradCircleWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex items-center justify-center w-full h-[80vh]">
            <div className="bg-gradient-to-b from-white to-[#F5EEF3] p-20 rounded-full">
                {children}
            </div>
        </div>
    )
}

