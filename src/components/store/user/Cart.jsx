import { useTranslation } from 'react-i18next';
import { TableTitle } from '../../ui/smallbits/TableTitle';
import { TableCartRow } from '../../ui/smallbits/TableCartRow';
import { TableCartTotal } from '../../ui/smallbits/TableCartTotal';
import { useEffect, useState } from 'react';
export const Cart = () => {
	const { t, i18n } = useTranslation();
	const [cartContent, setCartContent] = useState([]);
	const [totalCartPrice, setTotalCartPrice] = useState('$0')

	useEffect(() => {
		setCartContent([
			{
				"title": "Smartphone XYZ",
				"shortDescription": "High-performance smartphone",
				"price": 599000,
				"id": '12837'
			}, {
				"title": "Running Shoes ABC",
				"shortDescription": "Lightweight running shoes",
				"price": 89000,
				"id": '12344'
			}, {
				"title": "Laptop DEF",
				"shortDescription": "Sleek and lightweight laptop",
				"price": 1099000,
				"id": '43443'
			}, {
				"title": "Cotton T-Shirt",
				"shortDescription": "Comfortable cotton t-shirt",
				"price": 19000,
				"id": '76553'
			}, {
				"title": "Wireless Headphones GHI",
				"shortDescription": "High-quality wireless headphones",
				"price": 249000,
				"id": '09338'
			}
		])
	}, [])

	useEffect(() => {
		let price = 0;
		cartContent.forEach((currentItem) => {
			price += currentItem.price;
		})
		setTotalCartPrice(price);
	}, [cartContent])

	return (
		<div className='px-4'>
			<table className=' shadow-sm w-full  border-l-4 border-blue-300'>
				<TableTitle text={t('table-cart-title')} span={6} />
				<tbody>
					{
						cartContent.map((currentItem, index) => {
							return (
								<tr key={index} className='border-b border-blue-100'>
									<TableCartRow product={currentItem} />
								</tr>
							)
						})
					}
				</tbody>
				<tbody className='w-full'>
					<TableCartTotal price={totalCartPrice} />
				</tbody>
			</table>
		</div>
	)
}