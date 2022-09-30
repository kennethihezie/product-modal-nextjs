import AddToCartButton from "../add-cart-button/add-to-cart-button"
import Animation from "../animation/animation"
import RowButton from "../row-button/row-button"

const Content = () => {
    return (
        <div className="flex flex-col space-y-6">
            {/* Label description container */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                <div>
                    <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                        Free Shipping
                    </div>
                </div>

                {/* Description */}
                <div className="max-w-sm text-2xl font-medium">
                  Razer Kraken Kitty Edt Gaming Headset Quartz
                </div>
                {/* Price container */}
                <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                    <p className="line-through">$799</p>
                    <p className="text-5xl font-bold">$599</p>
                    <p className="text-sm font-light text-gray-400">
                    This offer is valid until April 3rd or as long as stock lasts!
                    </p>
                </div>

                {/* Button group */}
                <AddToCartButton />


                <div className="flex items-center space-x-3 group">
                   <Animation />
                  {/* stock */}
                     <div className="text-sm">50+ pcs. in stock</div>
                </div>

                <RowButton text='Add to cart' image='/images/weight.png' />            
            </div>
        </div>
    )
}

export default Content