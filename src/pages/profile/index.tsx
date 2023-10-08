import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getUserDataApi } from '../../common/api';

type Props = {};

const Index: React.FC<Props> = (props: Props) => {
    const [user, setUser] = useState<any>(null);
    const userId = useSelector((state: RootState) => state.auth.userId);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (userId == null) return;
                const userData = await getUserDataApi(userId);
                setUser(userData);
            } catch (err: any) {
                alert(err.response?.data.message);
            }
        };
        fetchUserData();
    }, [userId]);

    return (
        user ? (
            <div className='px-[50px] py-[40px] text-[#1C1C1C] text-[28px] font-[600]'>
                <div className="w-[120px] h-[120px] border rounded-[500px]">
                    <img src={user.image} alt="user icon" />
                </div>
                <div className='mt-[70px] flex flex-col gap-2'>
                    <div className='flex gap-[64px]'>
                        <div>
                            <p>First Name</p>
                            <input
                                className='w-[405px] h-[70px] rounded-[5px] border-2 border-solid border-[#858585] px-[27px] py-auto text-[#858585] text-[24px] font-[500]'
                                value={user.firstName}
                                readOnly
                            />
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input
                                className='w-[405px] h-[70px] rounded-[5px] border-2 border-solid border-[#858585] px-[27px] py-auto text-[#858585] text-[24px] font-[500]'
                                value={user.lastName}
                                readOnly
                            />
                        </div>
                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            className='w-[873px] h-[70px] rounded-[5px] border-2 border-solid border-[#858585] px-[27px] py-auto text-[#858585] text-[24px] font-[500]'
                            value={user.email}
                            readOnly
                        />
                    </div>
                    <div>
                        <p>Address</p>
                        <input
                            className='w-[873px] h-[70px] rounded-[5px] border-2 border-solid border-[#858585] px-[27px] py-auto text-[#858585] text-[24px] font-[500]'
                            value={user.address.address}
                            readOnly
                        />
                    </div>
                    <div>
                        <p>Contact Number</p>
                        <input
                            className='w-[873px] h-[70px] rounded-[5px] border-2 border-solid border-[#858585] px-[27px] py-auto text-[#858585] text-[24px] font-[500]'
                            value={user.phone}
                            readOnly
                        />
                    </div>
                    <div className='flex gap-[64px]'>
                        <div>
                            <p>City</p>
                            <input
                                className='w-[405px] h-[70px] rounded-[5px] border-2 border-solid border-[#858585] px-[27px] py-auto text-[#858585] text-[24px] font-[500]'
                                value={user.address.city}
                                readOnly
                            />
                        </div>
                        <div>
                            <p>State</p>
                            <input
                                className='w-[405px] h-[70px] rounded-[5px] border-2 border-solid border-[#858585] px-[27px] py-auto text-[#858585] text-[24px] font-[500]'
                                value={user.address.state}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default Index;
