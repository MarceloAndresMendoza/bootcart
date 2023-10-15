import { useTranslation } from 'react-i18next';
import { TableTitle } from '../../ui/smallbits/TableTitle';
import { TableCartRow } from '../../ui/smallbits/TableCartRow';
import { TableCartTotal } from '../../ui/smallbits/TableCartTotal';
import { useEffect, useState, useCallback, useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import { StoreContext } from '../../../contexts/store.context';
import { NavLink, useNavigate } from 'react-router-dom';
import { PostWebpayPlusOrder } from '../../../utils/webpay.transbank';
export const Cart = () => {
	const { t, i18n } = useTranslation();
	const cartContext = useContext(CartContext);
	const navigate = useNavigate();
	// Cart context will contain cart elements for the whole app,
	// but as simple than the product id and the quantity.
	const {
		elements,
		total,
		doLoadCart,
		doClearCart,
		doAddElementToCart,
		doUpdateElementInCart,
		doRemoveElementFromCart,
	} = cartContext;

	useEffect(() => {
		doLoadCart();
		// loadProducts();
	}, []);
	
	const handleBuyCart = async (amount) => {
		const response = await PostWebpayPlusOrder('buy-order-1', 'session-id-1', amount, 'http://192.168.5.2:5173/confirm')
		navigate(`/webpay/${response.token}`)
	}

	return (
		<div className='px-4 pb-4'>
			<table className=' shadow-sm w-full  border-l-4 border-blue-300'>
				<TableTitle text={t('table-cart-title')} span={7} />
				<tbody>
					{
						elements?.length > 0 ?
							elements?.map((element, index) => {
								return (
									<tr key={index}>
										<td className='p-4'>
											<button
												className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center w-10'
												onClick={() => doRemoveElementFromCart(element)}
											>
												<i className='fas fa-trash'></i>
											</button>
										</td>
										<TableCartRow
											element={element}
											callback={doUpdateElementInCart}
										/>
									</tr>
								)
							}) : (
								<>
									<tr className=''>
										<td colSpan='6' className='text-center text-3xl py-4'>
											{t('table-cart-empty')}
										</td>
									</tr>
									<tr>
										<td colSpan='6' className='text-center text-xl py-4 text-blue-500 hover:text-blue-600'>
											<NavLink to='/store'>{t('table-cart-continue-shopping')}</NavLink>
										</td>
									</tr>
								</>
							)
					}
				</tbody>
			</table>
			<table className='shadow-sm w-full  border-l-4 border-blue-300'>
				<tbody className='w-full'>
					<TableCartTotal price={total ?? 0} />
				</tbody>
			</table>
			<table className='w-full'>
				<tbody className='w-full'>
					<tr className='w-full'>
						<td colSpan={8} className='py-4 flex flex-row gap-8 w-full justify-end'>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center w-40'
								onClick={() => handleBuyCart(total)}
							>
								{t('table-cart-buy')}
							</button>
							<button
								className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center w-40'
								onClick={() => doClearCart()}
							>
								{t('table-cart-clear')}
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div >
	)
}