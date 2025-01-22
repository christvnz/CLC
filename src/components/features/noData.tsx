import Link from "next/link"

interface Props {
    text?: string
}

const noData = (props: Props) => {

    const text = props.text || 'We couldn\'t find what you\'re looking for. Try adjusting your search or exploring our other categories.';

    return (
        <div className="flex items-center justify-center p-4">
            <div className="text-center">
                <div className="mb-8">
                    <svg className="w-24 h-24 mx-auto text-[#DD8465]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                    No results found
                </h2>

                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {text}
                </p>

                <p className="mt-8 text-sm text-gray-500">
                    Need help? <Link  href="/contact" className="text-[#DD8465] hover:underline">Contact Support</Link>
                </p>
            </div>
        </div>
    )

}

export default noData