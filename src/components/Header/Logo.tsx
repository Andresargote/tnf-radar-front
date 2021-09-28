export default function Logo (props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={50}
            height={50}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#prefix__clip0)">
                <path
                    d="M0 5a5 5 0 015-5h40a5 5 0 015 5v40a5 5 0 01-5 5H5a5 5 0 01-5-5V5z"
                    fill="#FF8C00"
                />
                <path
                    d="M34.112 41.752c-.736.544-1.648.96-2.736 1.248a14.222 14.222 0 01-3.36.384c-3.072 0-5.456-.784-7.152-2.352-1.664-1.568-2.496-3.872-2.496-6.912V23.512h-3.984v-5.76h3.984v-6.288h7.488v6.288h6.432v5.76h-6.432v10.512c0 1.088.272 1.936.816 2.544.576.576 1.376.864 2.4.864 1.184 0 2.192-.32 3.024-.96l2.016 5.28z"
                    fill="#fff"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path
                        d="M0 5a5 5 0 015-5h40a5 5 0 015 5v40a5 5 0 01-5 5H5a5 5 0 01-5-5V5z"
                        fill="#fff"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}
