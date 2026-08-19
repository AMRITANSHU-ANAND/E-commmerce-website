import React, { useContext } from 'react'
import { MyShop } from '../context/MyWebsite';


const Cart = () => {

  let {cartItem } = useContext(MyShop);

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price,
    0
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Cart
          </h1>

          <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
            {cartItem.length} Items
          </span>
        </div>


        {cartItem.length === 0 ? (

          /* Empty Cart */
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>

        ) : (

          <div className="grid gap-6 md:grid-cols-3">

            {/* Products */}
            <div className="space-y-4 md:col-span-2">

              {cartItem.map((product, index) => (

                <div
                  key={`${product.id}-${index}`}
                  className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
                >

                  {/* Product Image */}
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>


                  {/* Product Details */}
                  <div className="min-w-0 flex-1">

                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {product.category}
                    </p>

                    <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
                      {product.title}
                    </h2>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-2">

                      <span className="text-yellow-400">
                        {"★".repeat(Math.round(product.rating.rate))}
                      </span>

                      <span className="text-sm text-gray-500">
                        {product.rating.rate} ({product.rating.count})
                      </span>

                    </div>

                  </div>


                  {/* Price */}
                  <div className="text-right">

                    <p className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </p>

                    <button
                      className="mt-3 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {/* Order Summary */}
            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="mb-5 text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between text-gray-600">
                  <span>Items</span>
                  <span>{cartItem.length}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

              </div>

              <div className="my-5 border-t border-gray-200"></div>

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button className="mt-6 w-full rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800">
                Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default Cart