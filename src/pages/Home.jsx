import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {
    const dispatch = useDispatch()
    const { allProducts, loading, error } = useSelector(state => state.productReducer)
    console.log(allProducts, loading, error);

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 8
    const totalPage = Math.ceil(allProducts?.length/productsPerPage)
    const currentPageLastProductIndex = currentPage * productsPerPage
    const currentPageFirstProductIndex = currentPageLastProductIndex - productsPerPage
    const visibleProductCards  = allProducts?.slice(currentPageFirstProductIndex, currentPageLastProductIndex)

    
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const navigateToNextPage = () =>{
        if (currentPage!=totalPage) {
            setCurrentPage(currentPage+1)
        }
    }

    const navigateToPrevPage = () =>{
        if (currentPage!=1) {
            setCurrentPage(currentPage-1)
        }
    }

    return (
        <>
            <Header insideHome={true} />
            <div style={{ paddingTop: '100px' }} className='conntainer px-4 mx-24 pb-10'>
                {
                    loading ?
                        <div className="flex justify-center items-center my-5 text-lg">
                            <img width={'250px'} height={'250px'} src="https://cdn.pixabay.com/animation/2022/07/31/05/09/05-09-47-978_512.gif" alt="loading" />
                        </div>
                        :
                        <>
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    allProducts?.length > 0 ?
                                        visibleProductCards.map(product => (
                                            <div key={product?.id} className='rounded border p-2 shadow'>
                                                <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                                                <div className='text-center'>
                                                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                                                    <Link to={`${product?.id}/view`} className="bg-violet-600 rounded p-1 mt-3 text-white inline-block" >View more...</Link>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <div className='flex font-bold justify-center items-center text-red-500 my-5 text-lg'>
                                            Product Not Found!!!
                                        </div>
                                }
                            </div>
                            {/* pagination */}
                            <div className="text-center my-5">
                                <span onClick={navigateToPrevPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
                                <span>{currentPage} Of {totalPage}</span>
                                <span onClick={navigateToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>
                            </div>
                        </>
                }
            </div >
        </>
    )
}

export default Home