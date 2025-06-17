import Image from 'next/image';
import { Roboto_Flex } from 'next/font/google';
// import AircraftModel from '/temp-3d-model'

const robotoFlex = Roboto_Flex({
    subsets: ['latin'],
    display: 'swap',
});

export default function MainContent() {
    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className={`${robotoFlex.className} text-3xl font-bold`}>
                <span className="text-black text-4xl"><span className="text-5xl">A</span>ERO</span>
                <span className="text-purple-600 text-4xl"><span className="text-5xl">D</span>OCS</span></h1>
            <Image src="/images/temp-3d-model.png" alt="B2 Spirit Bomber" width={1000} height={500} />
        </div>);
}