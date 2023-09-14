import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center pb-7 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='' src={profile} alt="" />
        </div>
    );
};

export default Header;