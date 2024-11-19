import QrCode from "../assets/icons/qr-code.svg"

export default function Footer() {
    return (
        <footer className="container px-5 pt-10 sm:pt-16">
            <div className="flex justify-between lg:flex-row flex-col space-y-7 sm:space-y-10 lg:space-y-0">
                <div className="sm:flex items-center justify-center sm:justify-between lg:block">
                    <div className="flex items-center gap-5">
                        <svg
                            viewBox="0 0 40 40"
                            aria-hidden="true"
                            className="h-10 w-10 flex-none fill-cyan-500"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                            ></path>
                        </svg>
                        <div>
                            <h6 className="text-base font-medium">Pocket</h6>
                            <p className="text-sm">
                                Invest at the perfect time.
                            </p>
                        </div>
                    </div>

                    {/*footer menu*/}
                    <nav className="mt-5 sm:mt-0 lg:mt-10">
                        <ul className="flex items-center gap-1 sm:gap-3">
                            <li className="footerNavItem">Features</li>
                            <li className="footerNavItem">Reviews</li>
                            <li className="footerNavItem">Pricing</li>
                            <li className="footerNavItem">FAQs</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className="sm:flex items-center gap-8">
                        <div className="relative">
                            <img
                                src={QrCode}
                                alt="qrcode"
                                className="h-16 w-16"
                            />
                        </div>
                        <div className="mt-3 sm:mt-0 lg:w-64">
                            <h6 className="font-medium">Download the app</h6>
                            <p className="text-gray-500">
                                Scan the QR code to download the app from Store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 md:flex items-center justify-between border-t-[1px] py-6 space-y-7 md:space-y-0">
                <p className="text-sm text-gray-500 mb-5 sm:mb-0">
                    © Copyright 2024. All rights reserved.
                </p>
                <div>
                    <form className="flex sm:flex-row flex-col items-center gap-3">
                        <input
                            className="w-full sm:w-[calc(100%-170px)] lg:w-56 rounded-lg border px-3 py-2 text-sm outline-none ring-cyan-400 focus:border-cyan-400 focus:ring-1 active:border-cyan-400 active:ring-1"
                            placeholder="Enter address"
                        />
                        <button className="text-white bg-cyan-500 px-4 py-2 text-sm rounded-lg font-medium w-full sm:w-auto">Join our newsletter</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}
