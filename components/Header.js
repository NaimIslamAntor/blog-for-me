import Link from 'next/link'

const Header = () => {
    return (
        <div className="w-full h-12 bg-gray-900 px-10 flex justify-between items-center">
        <Link href="/" passHref>
           <h1 className="text-white text-xl leading-3 cursor-pointer">Blog for me</h1>
        </Link>
           {/* nav part will be build later */}
        </div>
    )
}

export default Header
