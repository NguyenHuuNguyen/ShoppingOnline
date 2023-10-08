import React, { useEffect, useState } from 'react';
import Slide from '../../components/slide';
import Product from '../../components/product';
import { getProductsApi } from '../../common/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 30;

type Props = {};

const Index: React.FC<Props> = (props) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalProductsCount, setTotalProductsCount] = useState(0);

    const totalProductsInCart = useSelector((state: RootState) => state.product.cart.length);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const skip = currentPage * ITEMS_PER_PAGE;
                const result = await getProductsApi({ limit: ITEMS_PER_PAGE, skip });
                setProducts(result.products);
                setTotalProductsCount(result.total);
            } catch (err) {
                alert(err);
            }
        };
    
        fetchProducts();
    }, [currentPage]);

    const totalPages = Math.ceil(totalProductsCount / ITEMS_PER_PAGE);

    const handlePageChange = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    return (
        <div className='h-[1080px] overflow-scroll'>
            <Slide />

            <div className="pb-5 px-[30px] flex justify-end">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(data) => handlePageChange(data)}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    className='flex gap-5'
                />
            </div>

            <div className='flex justify-center pb-10'>
                <div className="grid grid-cols-3 gap-y-[40px] gap-x-[95px]">
                    {products.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </div>
            </div>

            <button className='fixed w-[200px] h-[200px] rounded-full flex justify-center items-center bottom-[50px] right-[50px] box-shadow bg-white'>
                <img src='/asset/images/Cart.png' alt='cart img'></img>
                <span className="text-[20px] font-[600] absolute top-[30px] right-[30px] bg-[#FF4A4A] text-white rounded-full px-3 py-1">
                    {totalProductsInCart}
                </span>
            </button>
        </div>
    );
};

export default Index;
