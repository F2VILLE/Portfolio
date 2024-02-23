
export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="template">
            <div className="container">
                {children}
            </div>
        </div>
    )
}