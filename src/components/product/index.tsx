import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/productSlice';
import { RootState } from '../../store';
import { setShowLogin } from '../../store/authSlice';

type Props = {
    product: any,
}

const Index = (props: Props) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    const handleAddToCart = () => {
        isLoggedIn ? dispatch(addToCart(props.product)) : dispatch(setShowLogin(true));
    };

    return (
        <div className='w-[300px] h-[457px] rounded-[10px] box-shadow py-[8px] px-[10px]'>
            <div className='flex justify-between mb-[5px]'>
                <p className='text-[#000] text-[14px] font-[400]'>
                    {props.product.rating}/5
                </p>
                <button className='w-[111px] h-[16px] rounded-[10px] bg-[#388614] text-[#FFF] text-[8px] font-[400]'>
                    {props.product.category}
                </button>
            </div>
            <div className="flex justify-center mb-[10px] h-[147px]">
                <img
                    className="rounded-[10px] w-auto max-h-full"
                    src={props.product.images[0]}
                    alt="product"
                />
            </div>
            <p className='text-[#000] text-[22px] font-[600] mb-[10px] truncate'>{props.product.title}</p>
            <p className='text-[#000] text-[18px] font-[400] mb-[20px] max-h-[53px] overflow-scroll'>{props.product.description}</p>
            <p className='text-[#1299E5] text-[18px] font-[800] mb-[23px]'>Price ${props.product.price}</p>
            <div className='flex'>
                <div className="bg-[#A60101] rounded-[6px] flex justify-center items-center flex-shrink px-[22px] h-[17px] mb-[22px]">
                    <p className='text-[#FFF] text-[14px] font-[400]'>{props.product.brand}</p>
                </div>
            </div>
            <div className='flex justify-end'>
                <button
                    className='text-[#388614] bg-[#FFF] w-[165px] h-[44px] rounded-[8px] border-solid border-2 border-[#388614]'
                    onClick={handleAddToCart}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default Index;
