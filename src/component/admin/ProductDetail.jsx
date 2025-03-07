import { Link } from "react-router-dom";

const ProductDetail = () => {
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className=" text-xl text-sky-500 font-bold">All Product</h1>
                {/* Add Product Button  */}
                <Link to={'/addproduct'}><button className="px-5 py-2 bg-sky-200 border border-sky-200 rounded-lg font-bold">Add Product</button></Link>
                
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-sky-200 text-sky-400" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-sky-200 text-slate-700 bg-slate-300 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-sky-200 text-slate-700 bg-slate-300 font-bold fontPara">Location Name</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-sky-200 text-slate-700 bg-slate-300 font-bold fontPara">Action</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-sky-200 text-slate-700 bg-slate-300 font-bold fontPara">Action</th>
                        </tr>
                        <tr className="text-pink-300">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                                1.
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                {'name'}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 hover:text-green-500 cursor-pointer ">
                                <Link to={'/updateproduct'}>Edit</Link>
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 hover:text-red-500 cursor-pointer ">
                                Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;