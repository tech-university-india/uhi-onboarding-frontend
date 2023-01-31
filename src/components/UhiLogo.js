import Logo from '../Assets/uhi-logo.png';
import Image from 'next/image';
function UhiLogo(){
return <Image src={Logo} alt="UHI Logo" class='h-96' />;
}
export default UhiLogo;