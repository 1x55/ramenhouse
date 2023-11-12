export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">   

        <div className="text-center">
            <img src = "/ramen.png" className="max-h-auto max-h-10" alt="ramen"/>
        </div>
        
        <h4 className="font-semibold text-xl my-3">Tonkotsu Ramen</h4>
        <p className="text-gray-500 text-sm">The soul of Tonkotsu Ramen. Pork bones are boiled for hours until they break down, creating a creamy, white broth. The long cooking time extracts collagen, marrow, and fat, giving the broth its signature richness and depth.
        </p>

        {/* add button */}
        <button className="bg-primary text-white px-8 py-2 rounded-full mt-4">Add to cart $12

        </button>
    </div>
    )
}